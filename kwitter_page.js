var firebaseConfig = {
      apiKey: "AIzaSyChi2WuC3IyNdAJFWprjElyF5wPJzhY5C4",
      authDomain: "lets-chat-app-af5b1.firebaseapp.com",
      databaseURL: "https://lets-chat-app-af5b1-default-rtdb.firebaseio.com",
      projectId: "lets-chat-app-af5b1",
      storageBucket: "lets-chat-app-af5b1.appspot.com",
      messagingSenderId: "880417428587",
      appId: "1:880417428587:web:61b44d536062c24d4c8d2e",
      measurementId: "G-4DS21DM3CH"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    room_name = localStorage.getItem("room_name");

    function Send()
    {
      msg = document.getElementById("message").value;
      console.log(msg);
      console.log(user_name);
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("message").innerHTML = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
//getData();
