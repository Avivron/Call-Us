
let firebaseConfig = {
  apiKey: "AIzaSyAw1y2xZAYjCzZx5Ar6O42hiGCtly5Ed2k",
  authDomain: "callus-50777.firebaseapp.com",
  databaseurl: "https://callus-50777.firebaseio.com",
  projectId: "callus-50777",
  storageBucket: "callus-50777.appspot.com",
  messagingSenderId: "710368084796",
  appId: "1:710368084796:web:0f8582d3bfed5b4cf81439",
  measurementId: "G-8SS2E15GX5",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

let btnLogin = document.getElementById("btnLogout");
btnLogout.addEventListener("click", (e) => {
  firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged((firebaseUser) => {
  console.log("hi");
  if (firebaseUser) {
    console.log(firebaseUser);
    console.log(firebase.auth().currentUser.uid);
  } else {
    console.log("not logged in");
    location.replace("./index.html");
  }
});

//Getting variables for requests

function popup(hood, user_type) {
  console.log("this is popup");
  let popupHTML = "";
  popupHTML += '<div class="backdrop" onclick=window.removePopup()></div>';
  popupHTML += '<div class="popup plan-box js--wp-4 request">';
  popupHTML += "<div>";
  popupHTML += "<h3>הקטנה הועלתה בהצלחה</h3>";
  popupHTML += "<br>";
  popupHTML += "</div>";
  popupHTML += '<div class = "update_btn">';
  popupHTML +=
    '<a href="javascript:void(0);" class="btn btn-full update-profile-btn js--scroll-to-plans" onclick="update('+hood+','+user_type+')">חזרה לקטנות שלי</a>';
  popupHTML += "</div>";
  popupHTML += "</div>";
  document.getElementById("overlays").innerHTML = popupHTML;
}

function removePopup() {
    document.getElementById("overlays").innerHTML = "";
}

function update(hood, user_type) {
  if (hood == '1'){
    if(user_type == '1'){
      location.replace("./bk_myrequests_gamad.html");
    }
    else{
      location.replace("./bk_myrequests_anak.html");
    }
}
else{
  if(user_type == '1'){
      location.replace("./rehavia_myrequests_gamad.html");
    }
    else{
      location.replace("./rehavia_myrequests_anak.html");
    }
}
}

db = firebase.firestore();
btnSubReq = document.getElementById("btnSub-Req");
btnSubReq.addEventListener("click", (e) => {
  
  // Get location from radio
  var req_loc = null;
  var inputElements_loc = document.getElementsByClassName("req_loc");
  for (var i = 0; inputElements_loc[i]; ++i) {
    if (inputElements_loc[i].checked) {
      req_loc = inputElements_loc[i].value;
      break;
    }
  }

  // Get request type from user
  var req_type = null;
  var inputElements_type = document.getElementsByClassName("inp-cbx");
  var request_txt = document.getElementById("request_txt");
  for (var i = 0; inputElements_type[i]; ++i) {
    if (inputElements_type[i].checked) {
      req_type = inputElements_type[i].value;
      break;
    }
  }
  if (!req_type){
    req_type = request_txt.value;
  }

  var req_today = null;
  var inputElements_type = document.getElementsByClassName("req_time");
  for (var i = 0; inputElements_type[i]; ++i) {
    if (inputElements_type[i].checked) {
      req_today = inputElements_type[i].value;
      break;
    }
  }
  var today = new Date();
  var this_day = today.getDate();

  // Get date + time from inputs
  var req_date = document.getElementById("date").value;
  var req_time = document.getElementById("appt").value;
  console.log(req_date, req_today);
  console.get

  if(req_date == "") {
    if(req_today == 1){
      req_date = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();
    }
    else{
      req_date = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + (today.getDate() + 1);
    }
  }
  console.log(req_date);

  var firebaseUser = firebase.auth().currentUser;
  var name, address, hobbies, coordinates, hobbies_names, user_type;

  user_data = db
    .collectionGroup("users")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id == firebaseUser.uid) {
          name = doc.data().name;
          hobbies = doc.data().hobbies;
          hobbies_names = doc.data().hobbies_names;
          address = doc.data().address;
          coordinates = doc.data().coordinates;
          hood = doc.data().hood;
          phone = doc.data().phone_number;
          user_type = doc.data().user_type;
          console.log(doc.data().coordinates);
          console.log(doc.data().hobbies);
          console.log(doc.data().hobbies_names);
          console.log(req_date, req_time.value);
          console.log(req_loc);
          console.log(req_type);

          // Save data to DB
          db.collection("posts").doc().set({
            user: firebase.auth().currentUser.uid,
            location: req_loc,
            request: req_type,
            date: req_date,
            time: req_time,
            address: address,
            coordinates: coordinates,
            phone: phone,
            name: name,
            hobbies: hobbies,
            hobbies_names: hobbies_names,
            volunteer: "",
            hood:hood,
          }).then(()=>{
            console.log("popup_finish")
            console.log(doc.id);
            popup(hood, user_type);
          });
        }
      });
    });
  // location.replace("./");


btnLogout.addEventListener("click", (e) => {
  firebase.auth().signOut();
});
});

// export{popup, removePopup};
