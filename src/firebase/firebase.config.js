// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAskpJmyT6VPqBOyqnVefMNF_8Yibq1Wd0",
    authDomain: "my-latest-portfolio.firebaseapp.com",
    projectId: "my-latest-portfolio",
    storageBucket: "my-latest-portfolio.appspot.com",
    messagingSenderId: "469245353267",
    appId: "1:469245353267:web:ebac991ca5a7920abbf246"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;