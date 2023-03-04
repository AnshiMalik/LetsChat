const firebaseConfig = {
    apiKey: "AIzaSyATraR9E0CjGN6NKXVJnYZkFJBHNklr0n8",
    authDomain: "kwitter-29c5e.firebaseapp.com",
    databaseURL: "https://kwitter-29c5e-default-rtdb.firebaseio.com",
    projectId: "kwitter-29c5e",
    storageBucket: "kwitter-29c5e.appspot.com",
    messagingSenderId: "1076724121193",
    appId: "1:1076724121193:web:3335feaaddb668f6126cf8"
  };

  const app = initializeApp(firebaseConfig);

function logout(){
    window.location="kwitter.html";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         nam=message_data('name');
         message = message_data('message');
         like= message_data['like'];
         name_with_tag = "<h4> "+ nam+"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
         like_button="<button class='btn btn-warning' id="+firebase_message_id+"; value= "+like+" onclick='updatelikes(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

         row=nam_with_tag + messgae_with_tag + like_button  +span_with_tag;
         document.getElementById("output").innerHTML += row;
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}         

function send()
{
      msg= document.getElementById("msg").ariaValueMax;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}
