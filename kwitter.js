var firebaseConfig = {
  apiKey: "AIzaSyAOws_lVBoD8uFz3rHPrfh2IhzA3QU9two",
  authDomain: "passwords-ae1de.firebaseapp.com",
  databaseURL: "https://passwords-ae1de-default-rtdb.firebaseio.com",
  projectId: "passwords-ae1de",
  storageBucket: "passwords-ae1de.appspot.com",
  messagingSenderId: "464776656920",
  appId: "1:464776656920:web:04285e8ea4ede0a57d2b6d"
};
firebase.initializeApp(firebaseConfig);

usernaxme = document.getElementById("input1").value;
localStorage.setItem("user_name", usernaxme);
  pass_data = document.getElementById("password").value;
localStorage.setItem("pass_word", usernaxme);

  
function addUser() {
  
    window.location = "kwitter_room.html";
}

function signup(){
  window.location="sign__up.html"
}

function login(){
  
  name_dat = document.getElementById("input1").value;
localStorage.setItem("user_name", name_dat);
  pass_data = document.getElementById("password").value;
localStorage.setItem("pass_word", pass_data);



function getData() { firebase.database().ref("/"+name_dat).on('value', function(snapshot) { 
   snapshot.forEach(function(childSnapshot) { 
    childKey  = childSnapshot.key;
     childData = childSnapshot.val(); 
     if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;


//Start code
 // console.log(firebase_message_id);
  console.log(message_data);
 // name = message_data['User'];
 // console.log(name)
  
//End code
} });  }); }
getData();

secure()

} 

function secure(){

if(pass_data==message_data){
  addUser();
  }

  else{
    alert("USERNAME OR PASSWORD IS INCORRECT");
    alert("CREATE USER USING SIGNUP BUTTON");
  }

}
