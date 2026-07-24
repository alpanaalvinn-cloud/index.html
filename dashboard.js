import { auth } from "./firebase.js";

import {
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// Cek user login

const userEmail = document.getElementById("userEmail");


onAuthStateChanged(auth, (user)=>{

if(user){

userEmail.innerHTML =
"Login sebagai:<br>" + user.email;

}else{

window.location.href="login.html";

}

});


// Tombol logout

const logoutBtn =
document.getElementById("logoutBtn");


logoutBtn.addEventListener("click",()=>{


signOut(auth)

.then(()=>{

alert("Berhasil logout");

window.location.href="login.html";

})


.catch((error)=>{

alert(error.message);

});


});
