import { auth } from "./firebase.js";

import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


const registerBtn = document.getElementById("registerBtn");


registerBtn.addEventListener("click", () => {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;


  createUserWithEmailAndPassword(auth, email, password)

  .then(() => {
    alert("Pendaftaran berhasil!");
    window.location.href = "login.html";
  })

  .catch((error) => {
    alert(error.message);
  });

});
