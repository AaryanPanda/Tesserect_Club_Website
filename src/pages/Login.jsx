import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, createUserProfile, Analytics, db } from '../firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

export default function Login() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Check for rate limiting
  const checkRateLimit = async (uid) => {
    try {
      const rateLimitRef = doc(db, 'rateLimit', uid);
      const rateLimitDoc = await getDoc(rateLimitRef);
      
      if (rateLimitDoc.exists()) {
        const data = rateLimitDoc.data();
        const now = Date.now();
        
        // If user has attempted more than 5 logins in the last 15 minutes
        if (data.attempts >= 5 && now - data.timestamp < 15 * 60 * 1000) {
          return false;
        }
        
        // Update attempt count
        await setDoc(rateLimitRef, {
          attempts: data.attempts + 1,
          timestamp: now
        });
      } else {
        // First attempt
        await setDoc(rateLimitRef, {
          attempts: 1,
          timestamp: Date.now()
        });
      }
      
      return true;
    } catch (error) {
      console.error("Rate limit check failed:", error);
      return true; // Allow on error to prevent blocking legitimate users
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const provider = new GoogleAuthProvider();
      // Add these security configurations
      provider.setCustomParameters({
        prompt: 'select_account'
      });
      
      // Use popup for both mobile and desktop
      const result = await signInWithPopup(auth, provider);
      
      // Log the login attempt
      Analytics.events.userLogin('google');
      
      if (result && result.user) {
        // Check rate limit
        const canProceed = await checkRateLimit(result.user.uid);
        if (!canProceed) {
          await auth.signOut();
          setError('Too many login attempts. Please try again later.');
          return;
        }
        
        // Validate email domain
        const email = result.user.email;
        const allowedDomains = ['ds.study.iitm.ac.in', 'es.study.iitm.ac.in'];
        const emailDomain = email.split('@')[1];
        
        if (!allowedDomains.includes(emailDomain)) {
          await auth.signOut();
          setError('Please use your IITM email address (@ds.study.iitm.ac.in or @es.study.iitm.ac.in)');
          Analytics.logUserEvent('login_error', { 
            reason: 'invalid_email_domain',
            email_domain: emailDomain
          });
          return;
        }
        
        // Create user profile
        await createUserProfile(result.user);
        
        // Navigate to home page
        navigate('/');
      }
    } catch (error) {
      console.error("Sign in error:", error);
      setError(`Authentication error: ${error.message}`);
      Analytics.logUserEvent('login_error', {
        error_code: error.code,
        error_message: error.message
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="bg-[#2a1a1a]/50 p-8 rounded-xl backdrop-blur-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Login to TESSEREX
        </h2>
        <div className="text-center text-gray-300 mb-8">
          Please sign in with your IITM email address
        </div>
        
        <button
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          className={`w-full flex items-center justify-center gap-3 bg-white text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors ${
            isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
          }`}
        >
          <FcGoogle className="text-xl" />
          {isLoading ? 'Signing in...' : 'Sign in with Google'}
        </button>
        
        <p className="mt-6 text-sm text-gray-400 text-center">
          Only @ds.study.iitm.ac.in and @es.study.iitm.ac.in email addresses are allowed
        </p>

        {error && (
          <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
