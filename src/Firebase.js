import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDsFhTL7ZCun_NRfwwBPcClv7BXgGemcjw",
  authDomain: "disneyplus-clone-454e3.firebaseapp.com",
  projectId: "disneyplus-clone-454e3",
  storageBucket: "disneyplus-clone-454e3.appspot.com",
  messagingSenderId: "934564086871",
  appId: "1:934564086871:web:212ccd4677e39e15374f12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
