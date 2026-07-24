import { auth } from "./firebase.js";

import {
 signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


const loginBtn = document.getElementById("loginBtn");


loginBtn.addEventListener("click", () => {


const email = document.getElementById("email").value;

const password = document.getElementById("password").value;



signInWithEmailAndPassword(auth,email,password)

.then(() => {

alert("Login berhasil!");

window.location.href="index.html";

})


.catch((error)=>{

alert("Login gagal: " + error.message);

});


});
