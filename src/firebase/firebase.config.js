// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBprcB4POfcJVHzw5u7Q2DgmMcL0fQJy3A",
  authDomain: "dosofy-service.firebaseapp.com",
  projectId: "dosofy-service",
  storageBucket: "dosofy-service.appspot.com",
  messagingSenderId: "1045778422065",
  appId: "1:1045778422065:web:77528329dc7f9a2637b810"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;