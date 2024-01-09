// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIbHyAATKzuJ1fuwZG4cudWuDWp8OSxXA",
  authDomain: "swiftbite-client.firebaseapp.com",
  projectId: "swiftbite-client",
  storageBucket: "swiftbite-client.appspot.com",
  messagingSenderId: "799609961577",
  appId: "1:799609961577:web:cc5bf1c4690ba492e8b6f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;