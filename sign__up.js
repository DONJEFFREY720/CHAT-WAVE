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
   


function sign_up(){
     localStorage.clear();
     user = document.getElementById("user_name").value
     password = document.getElementById("password").value
     localStorage.setItem("USER",user)
     localStorage.setItem("PASSWORD",password) 

firebase.database().ref("/").child(localStorage.getItem("USER")).update({
     Password:password
});

setTimeout(function(){
    window.location="index.html"
},2000)

  
}


