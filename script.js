function daftar(){

let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;


if(username=="" || email=="" || password==""){

alert("Semua data harus diisi!");

}

else{


localStorage.setItem("username",username);
localStorage.setItem("email",email);
localStorage.setItem("password",password);


alert("Pendaftaran berhasil!");

window.location.href="login.html";


}

}