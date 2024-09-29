import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCgPcxnHSNnh9sgPbdCaXWqiel0H22dz_s",
    authDomain: "blogging-app-4bd08.firebaseapp.com",
    projectId: "blogging-app-4bd08",
    storageBucket: "blogging-app-4bd08.appspot.com",
    messagingSenderId: "714516911247",
    appId: "1:714516911247:web:df7dfa1857cbb8af690cfa",
    measurementId: "G-BM6ZSS6K35"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app