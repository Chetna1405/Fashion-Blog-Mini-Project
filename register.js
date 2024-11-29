
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDcfkMIP25gyF0OKRpFhPfuwyF_RF9gF9w",
    authDomain: "fashion-blog-login.firebaseapp.com",
    projectId: "fashion-blog-login",
    storageBucket: "fashion-blog-login.firebasestorage.app",
    messagingSenderId: "382808952038",
    appId: "1:382808952038:web:b28aee33fa048d57e1bf27",
    measurementId: "G-LL1DEEP3VW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("creating Account ...")
            window.location.href = "home.html"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });

})