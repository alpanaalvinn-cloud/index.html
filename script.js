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

function login(){

let email = document.querySelector('input[type="email"]').value;
let password = document.querySelector('input[type="password"]').value;


let savedEmail = localStorage.getItem("email");
let savedPassword = localStorage.getItem("password");


if(email == savedEmail && password == savedPassword){

alert("Login berhasil!");

window.location.href="index.html";

}

else{

alert("Email atau password salah!");

}

}
