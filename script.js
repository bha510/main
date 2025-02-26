// Import Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js';

// Your Firebase project configuration (Replace with your actual credentials)
const firebaseConfig = {
    apiKey: "AIzaSyBxbrA9kvfNU6bGu4rObxhnhqDvzvrgihM",
    authDomain: "maths-fcd41.firebaseapp.com",
    projectId: "maths-fcd41",
    storageBucket: "maths-fcd41.firebasestorage.app",
    messagingSenderId: "242227535073",
    appId: "1:242227535073:web:3f76c5c57f7aa600036ba0",
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Login function
document.getElementById("loginBtn").addEventListener("click", async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        document.getElementById("user-pic").src = user.photoURL;
        document.getElementById("user-name").innerText = `Name: ${user.displayName}`;
        document.getElementById("user-email").innerText = `Email: ${user.email}`;
        document.getElementById("user-info").classList.remove("hidden");
        document.getElementById("loginBtn").style.display = "none";
    } catch (error) {
        console.error("Login Error:", error);
    }
});

// Logout function
document.getElementById("logoutBtn").addEventListener("click", async () => {
    try {
        await signOut(auth);
        document.getElementById("user-info").classList.add("hidden");
        document.getElementById("loginBtn").style.display = "block";
    } catch (error) {
        console.error("Logout Error:", error);
    }
});
