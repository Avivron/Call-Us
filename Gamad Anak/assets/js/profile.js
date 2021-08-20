function info(db, id) {
    db.collection("users").doc(id).get().then((doc)=>{
        // console.log(data.data());
        let data = doc.data()
        document.getElementById("name").innerHTML = data.name;
        document.getElementById("txtName").innerHTML = data.name;
        document.getElementById("txtPhone").innerHTML = data.phone_number;
        document.getElementById("txtAddress").innerHTML = data.address;
        document.getElementById("txtEmail").innerHTML = data.Email;
        document.getElementById("email").innerHTML = data.Email;
        document.getElementById("txtDescription").innerHTML = data.description;

        for (var i = 0; i < data.hobbies.length; i++) {
            document.getElementById(data.hobbies_names[i]).checked = true;
        }
    });
    // let popupHTML = "";
    // popupHTML += '<div class="backdrop" onclick=window.removePopup()></div>';
    // popupHTML += '<div class="popup plan-box js--wp-4 request">';
    // popupHTML += "<div>";
    // popupHTML += "<h3>חסרים לנו כמה פרטים קטנים עליך כדי להשלים את הקטנה</h3>";
    // popupHTML += "<br>";
    // popupHTML += "</div>";
    // popupHTML += '<div class = "update_btn">';
    // popupHTML +=
    //   '<a href="javascript:void(0);" class="btn btn-full update-profile-btn js--scroll-to-plans" onclick="update('+hood+')">עדכן פרטים</a>';
    // popupHTML += "</div>";
    // popupHTML += "</div>";
    // document.getElementById("overlays").innerHTML = popupHTML;
  }
  
  function popup() {
    console.log("this is popup");
    let popupHTML = "";
    popupHTML += '<div class="backdrop" onclick=window.removePopup()></div>';
    popupHTML += '<div class="popup plan-box js--wp-4 request">';
    popupHTML += "<div>";
    popupHTML += "<h3>עדיין חסרים לנו כמה פרטים קטנים עליך</h3>";
    popupHTML += "<br>";
    popupHTML += "</div>";
    popupHTML += '<div class = "update_btn">';
    popupHTML +=
      '<a href="javascript:void(0);" class="btn btn-full update-profile-btn js--scroll-to-plans" onclick="removePopup()">עדכן פרטים</a>';
    popupHTML += "</div>";
    popupHTML += "</div>";
    document.getElementById("overlays").innerHTML = popupHTML;
  }

  function removePopup() {
    // location.replace("./bk_anak.html");
      document.getElementById("overlays").innerHTML = "";
  }
  
  function update() {
    location.replace("./bk_profile.html");
  }

  function popup_done(hood, user_type) {
    console.log("this is popup done");
    let popupHTML = "";
    popupHTML += '<div class="backdrop" onclick=window.removePopup_done()></div>';
    popupHTML += '<div class="popup plan-box js--wp-4 request">';
    popupHTML += "<div>";
    popupHTML += "<h3>!כל הפרטים עודכנו בהצלחה</h3>";
    popupHTML += "<br>";
    popupHTML += "</div>";
    popupHTML += '<div class = "update_btn">';
    popupHTML +=
      '<a href="javascript:void(0);" class="btn btn-full update-profile-btn js--scroll-to-plans" onclick="update_done('+hood+','+user_type+')">חזרה לשכונה</a>';
    popupHTML += "</div>";
    popupHTML += "</div>";
    document.getElementById("overlays").innerHTML = popupHTML;
  }

  function removePopup_done() {
    // location.replace("./bk_anak.html");
      document.getElementById("overlays").innerHTML = "";
  }
  
  function update_done(hood, user_type) {
      if (hood == '1'){
          if(user_type == '1'){
            location.replace("./bk_gamad.html");
          }
          else{
            location.replace("./bk_anak.html");
          }
      }
      else{
        if(user_type == '1'){
            location.replace("./rehavia_gamad.html");
          }
          else{
            location.replace("./rehavia_anak.html");
          }
      }
    
  }


  export {info, popup, update, removePopup, popup_done, update_done, removePopup_done}