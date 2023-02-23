function addUser(){
localStorage.setItem("Username",Username);

localStorage.setItem("FirstName",FirstName);

localStorage.setItem("LastName",LastName);

username = document.getElementById("Username").value;

FirstName = document.getElementById("FirstName").value;

LastName = document.getElementById("LastName").value;

window.location= "kwitter_room.html";
}
