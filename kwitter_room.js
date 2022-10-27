
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDU4aPoq8GhLJ9qcX6mvgU_qUhgzGQOWUU",
      authDomain: "kwitter-6de15.firebaseapp.com",
      databaseURL: "https://kwitter-6de15-default-rtdb.firebaseio.com",
      projectId: "kwitter-6de15",
      storageBucket: "kwitter-6de15.appspot.com",
      messagingSenderId: "594820265605",
      appId: "1:594820265605:web:8ce9f7bcf14345d99e1bec",
      measurementId: "G-4146TWZJKW"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome  " +user_name +"!";
      
      function addRoom()
      {
            room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                  purpose: "adding room name"
            });
            localStorage.setItem("room_name", room_name);
            window.location="kwitter_page.html";}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name -" + Room_names);
      row = "<div class='room_name' id =" +Room_names+ "onclick='redirectToRoomName(this.id)'>#"+Room_names+ "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}