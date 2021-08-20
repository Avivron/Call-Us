
//Getting variables for requests

function popup(hood) {
  // console.log("this is popup");
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

function removePopup() {
  // location.replace("./bk_anak.html");
    document.getElementById("overlays").innerHTML = "";
}

function update(hood) {
  if (hood == 1){
    location.replace("./bk_profile.html");
  }
  else{
    location.replace("./rehavia_profile.html");
  }
  
}

function update_info_bk(){
  var num_ktanot_not_done = 0;
        var num_ktanot_done = 0;
        var num_gamadim = 0;

        db.collectionGroup('users').get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                      if (doc.data().hood == 1 && doc.data().user_type == 1){
                        num_gamadim +=1;
                      };
                    });
                    document.getElementById("txtGamadim").innerHTML = num_gamadim;
                  });

        db.collectionGroup('posts').get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        if (doc.data().hood == 1){
                          if (doc.data().volunteer == ""){
                            num_ktanot_not_done += 1;
                          }
                          else{
                            num_ktanot_done +=1;
                          }
                        }
                    });
                    // console.log(num_ktanot_not_done, num_ktanot_done);
                    document.getElementById("txtKtanotDone").innerHTML = num_ktanot_done;
                    document.getElementById("txtKtanotInwait").innerHTML = num_ktanot_not_done;
                });
}

function update_info_rehavia(){
  var num_ktanot_not_done = 0;
        var num_ktanot_done = 0;
        var num_gamadim = 0;

        db.collectionGroup('users').get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                      if (doc.data().hood == 2 && doc.data().user_type == 1){
                        num_gamadim +=1;
                      };
                    });
                    document.getElementById("txtGamadim").innerHTML = num_gamadim;
                  });

        db.collectionGroup('posts').get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        if (doc.data().hood == 2){
                          if (doc.data().volunteer == ""){
                            num_ktanot_not_done += 1;
                          }
                          else{
                            num_ktanot_done +=1;
                          }
                        }
                    });
                    // console.log(num_ktanot_not_done, num_ktanot_done, num_gamadim);
                    document.getElementById("txtKtanotDone").innerHTML = num_ktanot_done;
                    document.getElementById("txtKtanotInwait").innerHTML = num_ktanot_not_done;
                });
}


export{
  popup, removePopup,update, update_info_bk, update_info_rehavia
};
