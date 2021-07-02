var firebaseConfig = {
  apiKey: "AIzaSyBioy5Zljit06qQ2f9QuZ5NlqmUAiFjSZs",
  authDomain: "kwitter-f7607.firebaseapp.com",
  databaseURL: "https://kwitter-f7607-default-rtdb.firebaseio.com",
  projectId: "kwitter-f7607",
  storageBucket: "kwitter-f7607.appspot.com",
  messagingSenderId: "481084638761",
  appId: "1:481084638761:web:968bd8578b4c33279fbe38",
  measurementId: "G-TYP40RHKJ9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code

        //End code
      });
    });
}
getData();
