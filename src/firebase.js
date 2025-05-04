// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { getFirestore, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { getAnalytics, logEvent } from 'firebase/analytics';

// Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.useDeviceLanguage(); // Set language to device language
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

// Export additional auth methods
export { signInWithPopup, GoogleAuthProvider, signOut };

// Analytics helper
export const Analytics = {
  logPageView: (pagePath) => {
    logEvent(analytics, 'page_view', {
      page_path: pagePath
    });
  },
  logUserEvent: (eventName, params = {}) => {
    logEvent(analytics, eventName, params);
  },
  events: {
    userLogin: (method) => {
      logEvent(analytics, 'login', { method });
    },
    eventRegistration: (eventName) => {
      logEvent(analytics, 'event_registration', { event_name: eventName });
    }
  }
};

// Function to create/update user profile
export const createUserProfile = async (user) => {
    if (!user) return;

    const userRef = doc(db, 'users', user.uid);
    const email = user.email;
    const emailDomain = email.split('@')[1];
    
    const userData = {
        email: email,
        displayName: user.displayName || '',
        photoURL: user.photoURL || '',
        lastLogin: serverTimestamp(),
        createdAt: serverTimestamp(),
        role: 'user', // Default role
        institution: 'IITM' // Both domains are from IITM now
    };

    try {
        await setDoc(userRef, userData, { merge: true });
        console.log('User profile created/updated successfully');
    } catch (error) {
        console.error("Error creating user profile:", error);
        throw error;
    }
};

export { app };
