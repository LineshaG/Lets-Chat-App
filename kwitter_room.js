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

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function Add_Room()
    {
        room_name = document.getElementById("Room_name").value;
        firebase.database().ref("/").child(room_name).update({
            purpose: "Add Room Name"
        });
        localStorage.setItem("Room_name", room_name);
        window.location = "kwitter_page.html";
    }
      

function getData() 
{
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
       Room_names = childKey;
       row = '<div class="roomname" id= '+Room_names+' onclick="redirect(this.id)"> #'+ Room_names+ '</div> <hr>';
      document.getElementById("output").innerHTML += row;

    });});}

getData();

function redirect(room)
{
    localStorage.setItem("room_name", room);
    window.location = "kwitter_page.html";
}

function Logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("Room_name");
    window.location = "index.html";
}
