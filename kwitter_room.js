var firebaseConfig = {
  apiKey: "AIzaSyAZcb3Fjrsh0ybOOXC6ZkNBRFucbZBepSU",
  authDomain: "twitter2-d4b6d.firebaseapp.com",
  databaseURL: "https://twitter2-d4b6d-default-rtdb.firebaseio.com",
  projectId: "twitter2-d4b6d",
  storageBucket: "twitter2-d4b6d.appspot.com",
  messagingSenderId: "290799928667",
  appId: "1:290799928667:web:8959d0c02c19d59ccc867e"
};



  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
    localStorage.clear();
    console.clear()
  
}
