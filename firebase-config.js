// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyBxXkhN2Eu4fOOWu6nbDVCQGka_jRYUKFM",
  authDomain: "exam-portal-8ac4e.firebaseapp.com",
  projectId: "exam-portal-8ac4e",
  storageBucket: "exam-portal-8ac4e.appspot.com",
  messagingSenderId: "659111610901",
  appId: "1:659111610901:web:882ff39ec888be75d31c1c"
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);

// ✅ Auth and Firestore instances
const auth = firebase.auth();
const db = firebase.firestore();
