import { auth } from "./firebase.js";


import {

onAuthStateChanged,
signOut

} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";



const emailText =
document.getElementById("userEmail");


const logoutBtn =
document.getElementById("logoutBtn");




// cek login

onAuthStateChanged(auth,(user)=>{


if(user){

emailText.innerHTML =
"👤 "+user.email;


}else{

window.location.href="login.html";

}


});




// logout


logoutBtn.addEventListener("click",()=>{


signOut(auth)

.then(()=>{

alert("Logout berhasil");

window.location.href="login.html";

})


.catch((error)=>{

alert(error.message);

});


});
