import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'; // Import getDatabase function for Firebase Realtime Database
import { getStorage } from 'firebase/storage'; // Import getStorage function for Firebase Storage


const firebaseConfig = {
  // Replace with your actual Firebase project configuration
  apiKey: "AIzaSyBinBcsp_ud_kvGBsqnJK77icCesh8jXE8",
  authDomain: "ehsconsulting-8671e.firebaseapp.com",
  databaseURL: "https://ehsconsulting-8671e-default-rtdb.firebaseio.com",
  projectId: "ehsconsulting-8671e",
  storageBucket: "ehsconsulting-8671e.appspot.com",
  messagingSenderId: "874584704343",
  appId: "1:874584704343:web:b9ac2e9955d08e13462a12",
  measurementId: "G-8R7MKD7EDZ"
};

const firebaseApp = initializeApp(firebaseConfig);
// Get Firestore instance
const database = getDatabase(firebaseApp);

// Initialize Firebase Storage
const storage = getStorage(firebaseApp);

// Export auth, firestore, and storage objects
export {database, storage };

export default firebaseApp;