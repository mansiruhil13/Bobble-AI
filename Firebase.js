// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKWr4Q0_bTP-9-dnviFlyesJITE1K9LxI",
    authDomain: "bobble-ai-6c878.firebaseapp.com",
    projectId: "bobble-ai-6c878",
    storageBucket: "bobble-ai-6c878.appspot.com",
    messagingSenderId: "389012742453",
    appId: "1:389012742453:web:f212dbd734d078e5b02c7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const googleLoginButton = document.getElementById("google_btn");
googleLoginButton.addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            // Redirect to index.html after successful login
            window.location.href = "index.html";
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email; // The email of the user's account used.
            const credential = GoogleAuthProvider.credentialFromError(error); // Auth credential if available
            
            console.error("Error during sign-in:", errorCode, errorMessage, email, credential);
            // You can show an alert or a message to the user
            alert(`Sign-in failed: ${errorMessage}`);
        });
});
