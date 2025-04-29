import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, createUserProfile, Analytics } from '../firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const provider = new GoogleAuthProvider();
      // Add these security configurations
      provider.setCustomParameters({
        prompt: 'select_account',
        hd: 'ds.study.iitm.ac.in' // Restrict to specific domain
      });
      
      const result = await signInWithPopup(auth, provider);
      
      // Log the login attempt
      Analytics.events.userLogin('google');
      
      const email = result.user.email;
      
      if (!email.endsWith('@ds.study.iitm.ac.in')) {
        await auth.signOut();
        setError('Please use your IITM email address (@ds.study.iitm.ac.in)');
        Analytics.logUserEvent('login_error', { 
          reason: 'invalid_email_domain',
          email_domain: email.split('@')[1]
        });
        return;
      }

      await createUserProfile(result.user);
      Analytics.logUserEvent('login_success', {
        user_email_domain: 'ds.study.iitm.ac.in'
      });
      navigate('/');
    } catch (error) {
      Analytics.logUserEvent('login_error', {
        error_code: error.code,
        error_message: error.message
      });
      setError(error.message);
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
          Only @ds.study.iitm.ac.in email addresses are allowed
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