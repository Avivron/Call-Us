function createTicketRequest(request, id, hood) {
  let date = request.date.split("-");
  let requestHTML =
    '<div class="plan-box" onclick=window.popup(window.db,"' + id +'",'+hood+ ')>';
  requestHTML += '<div class="card-text" id="' + id + '"><br>';
  requestHTML +=
    '<h2 style="text-align: right; font-size: 30px; text-align-last:center; color: #e67e22;">' +
    request.request +
    "</h2>";
  // requestHTML += '<div class="img-avatar" style="font-size: 20px">';
  // requestHTML += '<i class="' + request.hobbies[3] + '"></i>';
  // requestHTML += '<br><i class="' + request.hobbies[1] + '"></i>';
  // requestHTML += '<i class="' + request.hobbies[2] + '"></i>';
  // requestHTML += '<i class="' + request.hobbies[0] + '"></i>';
  // requestHTML += '<br><i class="' + request.hobbies[4] + '"></i></div>';


  requestHTML +=
    '<div class="desc" style="text-align: right; font-size:17px; margin-top:5px;">';
  requestHTML += '<div class="row"><div class="col span-1-of-2">';

  requestHTML +=
    '<i class="far fa-clock" style="font-size:17px;"></i>   ' +
    request.time;
  requestHTML +=
    '<br><i class="far fa-calendar" style="font-size:20px;"></i>    ' +
    date[2] +
    "/" +
    date[1] +
    "/" +
    date[0];
  
  requestHTML +='</div><div class="col span-1-of-2">';
  
  requestHTML +=
    '<i class="fas fa-user" style="font-size:17px;"></i>    ' + request.name;
  if(request.location ==1) {
    requestHTML +=
    '<br><i class="fas fa-map-marker-alt" style="font-size:17px; margin-top:5px;"></i>    יתואם בשיחת טלפון';
  }
  else{
    requestHTML +=
    '<br><i class="fas fa-map-marker-alt" style="font-size:17px; margin-top:5px;"></i>    ' +
    request.address;
  }
  


  requestHTML +='</div></div></div>';

  // requestHTML +=
  //   '<div class="actions" style="padding-bottom: 0px;"><label class="switch"><input type="checkbox"><span class="sli round">';
  // requestHTML +=
  //   '</div><div style="font-size: 14px; font-style: italic;"><p> עדכנו אותי</p></div></div></div>';  
  requestHTML +=
    '</div></div>';
  return requestHTML;
}

function createPopupRequest(doc, id) {
  let request = doc.data();
  let date = request.date.split("-");
  let requestHTML = "<div>";
  requestHTML += "<h3>" + request.request + "</h3>";
  requestHTML +=
  '<br><div class="desc" style="font-size:17px;">';
  requestHTML += '<div class="row">';
  requestHTML += '<div class="col span-1-of-3">';
  requestHTML += '<ion-icon name="time-outline"></ion-icon>' + request.time;
  requestHTML += "</div>";
  requestHTML += '<div class="col span-1-of-3">';
  requestHTML +=
    '<ion-icon name="calendar-outline"></ion-icon>' +
    date[2] +
    "/" +
    date[1] +
    "/" +
    date[0];
  requestHTML += "</div>";
  requestHTML += '<div class="col span-1-of-3">';
  requestHTML +=
    '<ion-icon name="location-outline"></ion-icon>' + request.address;
  requestHTML += "</div>";
  requestHTML += "</div>";
  requestHTML += "</div>";
  requestHTML += "</div>";
  return requestHTML;
}

function initRequests(db, hood) {
  let requestsHTML = "";
  db.collection("posts")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let requestHTML = createTicketRequest(doc.data(), doc.id, hood);
        requestsHTML += requestHTML;
      });
    })
    .then(() => {
      document.getElementById("requestsList").innerHTML = requestsHTML;
    });
}

function popup(db, id, hood) {
  let popupHTML = "";
  popupHTML += '<div class="backdrop" onclick=window.removePopup()></div>';
  popupHTML += '<div id="popupMessage" class="popup plan-box js--wp-4 request">';
  db.collection("posts")
    .doc(id)
    .get()
    .then((doc) => {
      popupHTML += createPopupRequest(doc, id);
    })
    .then(() => {
      popupHTML += '<div class = "update_btn">';
      popupHTML +=
        '<a href="javascript:void(0);" class="btn btn-full update-profile-btn js--scroll-to-plans" onclick="volunteer(window.db,' +
        "'" +
        id +
        "'" +
        ',window.user)">לקחתי</a>';
      popupHTML += "</div>";
      popupHTML += "</div>";

      document.getElementById("overlays").innerHTML = popupHTML;
    });
}


// function popup3(db, id) {
//   let popupHTML = "";
//   popupHTML += '<div class="backdrop" onclick=window.removePopup()></div>';
//   popupHTML += '<div id="popupMessage" class="popup plan-box js--wp-4 request">';
//   db.collection("posts")
//     .doc(id)
//     .get()
//     .then((doc) => {
//       popupHTML += createPopupRequest(doc, id);
//     })
//     .then(() => {
//       popupHTML += '<div class = "update_btn">';
//       popupHTML +=
//         '<a href="javascript:void(0);" class="btn btn-full update-profile-btn js--scroll-to-plans" onclick="volunteer(window.db,' +
//         "'" +
//         id +
//         "'" +
//         ',window.user)">קיבלתי</a>';
//       popupHTML += "</div>";
//       popupHTML += "</div>";

//       document.getElementById("overlays").innerHTML = popupHTML;
//     });
// }

function popup3(db, id, hood) { 
  let popupHTML = "";
  popupHTML += '<div class="backdrop" onclick=window.removePopup()></div>';
  popupHTML += '<div class="popup plan-box js--wp-4 request">';
  popupHTML += "<div>";
  popupHTML += "<h3>חסרים לנו כמה פרטים קטנים עליך כדי להשלים את הקטנה</h3>";
  popupHTML += "<br>";
  popupHTML += "</div>";
  popupHTML += '<div class = "update_btn">';
  popupHTML +=
    '<a href="javascript:void(0);" class="btn btn-full update-profile-btn js--scroll-to-plans" onclick="update('+hood+')">עדכן פרטים</a>';
  popupHTML += "</div>";
  popupHTML += "</div>";
  document.getElementById("overlays").innerHTML = popupHTML;
}

function update(hood) {
  if (hood == 1){
    location.replace("./bk_profile.html");
  }
  else {
    location.replace("./rehavia_profile.html");
  }
}


// <div class="row">
//         <div class="col span-2-of-6 scroll-list"></div>

function popup2(db, id) {
  let popupHTML = "<div>";
  db.collection("posts")
    .doc(id)
    .get()
    .then((doc) => {
      let request = doc.data();
      popupHTML += "<h3>הבקשה התקבלה</h3><br>";
      popupHTML += "<h2 style='font-weight: bold; font-size: 20px'>מספר הטלפון של " + request.name + ': ' + request.phone + "</h2><br>"
      popupHTML += "<h2 style='font-size: 16px'>:תוכלו לדבר על</h2><br>";
      popupHTML += '<div style="font-size: 16px">';
      if (request.hobbies_names[0]){
        popupHTML += '<div style="font-size: 16px">';
        popupHTML += request.hobbies_names[0];
        popupHTML += '<i style="margin: 5px" class="' + request.hobbies[0] + '"></i>';
        popupHTML += '</div>';
      }
      if (request.hobbies_names[1]){
        popupHTML += '<div style="font-size: 16px">';
        popupHTML += request.hobbies_names[1];
        popupHTML += '<i style="margin: 5px" class="' + request.hobbies[1] + '"></i>';
        popupHTML += '</div>';
      }
      if (request.hobbies_names[2]){
        popupHTML += '<div style="font-size: 16px">';
        popupHTML += request.hobbies_names[2];
        popupHTML += '<i style="margin: 5px"class="' + request.hobbies[2] + '"></i>';
        popupHTML += '</div>';
      }
      if (request.hobbies_names[3]){
        popupHTML += '<div style="font-size: 16px">';
        popupHTML += request.hobbies_names[3];
        popupHTML += '<i style="margin: 5px" class="' + request.hobbies[3] + '"></i>';
        popupHTML += '</div>';
      }
      if (request.hobbies_names[4]){
        popupHTML += '<div style="font-size: 16px">';
        popupHTML += request.hobbies_names[4];
        popupHTML += '<i style="margin: 5px" class="' + request.hobbies[4] + '"></i></div>';
        popupHTML += '</div>';
      }
      // popupHTML += '</div>';
      // popupHTML += createPopupRequest(doc, id);
    })
    .then(() => {
      document.getElementById("popupMessage").innerHTML = popupHTML;
    });
}


function removePopup() {
  document.getElementById("overlays").innerHTML = "";
}

/** add user to request */
function volunteer(db, post, user) {

  db.collection("posts")
    .doc(post)
    .update({
      volunteer: user,
    })
    .then(
      document
        .getElementById(post)
        .setAttribute("style", "background-color:#B3C2F2; border-radius: 50px;")
    )
    .then(popup2(db, post));
}

async function initMap(db, hood, lat, lng) {
  // console.log(db);
  const israel = new google.maps.LatLng(lat, lng);
  let map = new google.maps.Map(document.getElementById("map"), {
    center: israel,
    zoom: 15,
  });

  let requestsHTML = "";
  let listOfRequests = [];
  db.collection("posts")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if(doc.data().volunteer == "" && doc.data().hood == hood){
          let requestHTML = createTicketRequest(doc.data(), doc.id, hood);
          requestsHTML += requestHTML;
          listOfRequests = [...listOfRequests, doc.data().coordinates];
        }
      });
    })
    .then(() => {
      document.getElementById("requestsList").innerHTML = requestsHTML;
    })
    .then(() => {
      // console.log(listOfRequests);
      for (let i in listOfRequests) {
        // console.log(listOfRequests[i]);
        const marker = new google.maps.Marker({
          position: {
            lat: listOfRequests[i].lat,
            lng: listOfRequests[i].lng,
          },
          animation: google.maps.Animation.DROP,
          map: map,
          request: listOfRequests[i],
        });
        marker.addListener("click", () => {
          if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
          } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }
          // filter
        });
      }
    });
}

// geocodes address to cordinates for the map
async function forwardGeocodePromise(location_str) {
  location_str = location_str.split(/[ ,]+/).join("+");
  return new Promise((resolve, reject) => {
    var apiKey = "03ab3dbb57034f19a37b7114dcec9396";
    var location = location_str;
    var api_url = "https://api.opencagedata.com/geocode/v1/json";
    let country = "IL";
    let language = "en";

    var request_url =
      api_url +
      "?" +
      "key=" +
      apiKey +
      "&q=" +
      location +
      "&pretty=1" +
      "&no_annotations=1" +
      "&countrycode=" +
      country +
      "&language=" +
      language;
    // see full list of required and optional parameters:
    // https://opencagedata.com/api#forward

    var request = new XMLHttpRequest();
    request.open("GET", request_url, true);

    // request.onload = callback;
    request.onload = () => {
      if (request.status === 200) {
        var data = JSON.parse(request.responseText);
        // console.log(data.results[0].formatted);
        resolve(data);
      } else if (request.status <= 500) {
        // console.error("unable to geocode! Response code: " + request.status);
        var data = JSON.parse(request.responseText);
        // console.error("error msg: " + data.status.message);
        reject(
          Error(
            "An error occurred while loading image. error code:" +
              data.status.message
          )
        );
      } else {
        // console.error("server error"); 
        reject(Error("server error" + data.status.message));
      }
    };

    request.onerror = function () {
      console.log("unable to connect to server");
    };

    request.send(); // make the request
  });
}

export {
  initRequests,
  popup,
  popup3,
  volunteer,
  removePopup,
  forwardGeocodePromise,
  initMap,
  update
};
