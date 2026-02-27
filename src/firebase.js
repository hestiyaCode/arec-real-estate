import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA4yxSJE_K4ESUkjy-UH60lTRoxdPhhca4",
  authDomain: "arec-auth.firebaseapp.com",
  projectId: "arec-auth",
  storageBucket: "arec-auth.firebasestorage.app",
  messagingSenderId: "4232226464",
  appId: "1:4232226464:web:c89c1ffd9c0a5d93dd4bc5",
  measurementId: "G-3KK4RWXM2H"
};

// Initialize Firebase (using getApps prevents "app already exists" errors in Next.js)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Analytics only in the browser
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) analytics = getAnalytics(app);
  });
}

// THIS IS THE CRITICAL EXPORT YOUR APP IS MISSING
export const auth = getAuth(app);