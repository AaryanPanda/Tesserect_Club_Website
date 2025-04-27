import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { getAnalytics, logEvent } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyC1YMGcf6zyZ6Iu91o6fnmPuM9wXNOi2GY",
    authDomain: "tessaractlogin.firebaseapp.com",
    projectId: "tessaractlogin",
    storageBucket: "tessaractlogin.firebasestorage.app",
    messagingSenderId: "661274180357",
    appId: "1:661274180357:web:318d2f6d777bcb8546d56c",
    measurementId: "G-F7HJRMV9KP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

// Function to create/update user profile
export const createUserProfile = async (user) => {
    if (!user) return;

    const userRef = doc(db, 'users', user.uid);
    
    const userData = {
        email: user.email,
        displayName: user.displayName || '',
        photoURL: user.photoURL || '',
        lastLogin: serverTimestamp(),
        createdAt: serverTimestamp(),
        role: 'user' // Default role
    };

    try {
        await setDoc(userRef, userData, { merge: true });
        console.log('User profile created/updated successfully');
    } catch (error) {
        console.error("Error creating user profile:", error);
        throw error;
    }
};

// Analytics utility functions
export const Analytics = {
    // Track page views
    logPageView: (pageName) => {
        logEvent(analytics, 'page_view', {
            page_title: pageName,
            page_location: window.location.href,
            page_path: window.location.pathname
        });
    },

    // Track user actions
    logUserEvent: (eventName, params = {}) => {
        logEvent(analytics, eventName, {
            ...params,
            timestamp: new Date().toISOString()
        });
    },

    // Track specific events for TESSEREX
    events: {
        eventRegistration: (eventName) => {
            logEvent(analytics, 'event_registration', {
                event_name: eventName,
                timestamp: new Date().toISOString()
            });
        },

        userLogin: (method) => {
            logEvent(analytics, 'login', {
                method: method,
                timestamp: new Date().toISOString()
            });
        },

        buttonClick: (buttonName, location) => {
            logEvent(analytics, 'button_click', {
                button_name: buttonName,
                location: location,
                timestamp: new Date().toISOString()
            });
        }
    }
};
