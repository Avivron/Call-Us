function createEmptyRequest(post){
  let date = post.date.split("-");
  let request='<li class="table-row" style="justify-content: center;">';
  request+='<div class="col col-1" data-label="Gamad">';
  request+='<div class="card user-card-full">';
  request+='<div class="row-table m-l-0 m-r-0">';
  request+='<div class="col-sm-8" style="justify-content: center;">';
  request+='<div class="card-block">';
  request+=' <h6 class="m-b-20 p-b-5 b-b-default f-w-600">'+'טרם נרשם גמד'+'</h6>';
  request+='</div>';
  request+='</div>';
  request+='</div>';
  request+='</div>';
  request+='</div>';
  request+='<div class="col col-2" data-label="Request" style="text-align: -webkit-center">';
  request+='<div class="col-sm-8">';
  request+='<div class="card-block" style="justify-content: center; ">';
  request+='<h6 class="m-b-20 p-b-5 b-b-default f-w-600">'+post.request+'</h6>';
  if(post.location == 1){
    request+='<div class="row-table">';
    request+='<h6 class="text-muted f-w-600 b-b-defualt">מיקום יתואם בשיחת טלפון</h6>';
    request+='</div><br>';
  }
  else{
    request+='<div class="row-table">';
    request+='<h6 class="text-muted f-w-600 b-b-defualt">אצלי בבית</h6></div><br>';
  }
  request+='<div class="row-table">';
  request+='<h6 class="text-muted f-w-400">'+date[2]+"/"+date[1]+"/"+date[0]+'</h6></div><br>';
  request+='<div class="row-table">';
  request+='<h6 class="text-muted f-w-400">'+post.time+'</h6>';
  request+='</div>';
  request+='<div class="col-sm-about">';
  request+='<img src="assets/images/request.png" class="rounded img-fluid d-block mx-auto" alt="App" width="200" height="200">';
  request+='</div>';
  request+='</div>';
  request+='</div>';
  request+='</div>';
  request+='</li>';
  request+='<br>';
  return request;
}

function createFullRequest(volunteer, post){
  let date = post.date.split("-");
  let request='<li class="table-row" style="justify-content: center;">';
  request+='<div class="col col-1" data-label="Gamad">';
  request+='<div class="card user-card-full">';
  request+='<div class="row-table m-l-0 m-r-0">';
  request+='<div class="col-sm-8" style="justify-content: center;">';
  request+='<div class="card-block">';
  request+=' <h6 class="m-b-20 p-b-5 b-b-default f-w-600">'+volunteer.name+'</h6>';
  request+=' <div class="row-table">';
  request+='<div class="col-sm-6">';
  request+='<p class="m-b-10 f-w-600">תחביבים</p>';
  request+='<h6 class="text-muted f-w-400">';
  volunteer.hobbies_names.forEach((i,idx,array)=>{
    if (idx === array.length-1){
      request+=i;
    }
    else{ 
      request+=i+', ';
    }
  })
  request+='</h6>';
  request+='</div>';
  request+='<div class="col-sm-6">';
  request+='<p class="m-b-10 f-w-600">טלפון</p>';
  request+='<h6 class="text-muted f-w-400">'+volunteer.phone_number+'</h6>';
  request+='</div>';
  request+='<div class="col-sm-about">';
  request+='<p class="m-b-10 f-w-600">קצת עלי</p>';
  request+='<h6 class="text-muted f-w-400">'+volunteer.description+'</h6>';
  request+='</div>';
  request+='</div>';
  request+='</div>';
  request+='</div>';
  request+='</div>';
  request+='</div>';
  request+='</div>';
  request+='<div class="col col-2" data-label="Request" style="text-align: -webkit-center">';
  request+='<div class="col-sm-10">';
  request+='<div class="card-block" style="justify-content: center; ">';
  request+='<h6 class="m-b-20 p-b-5 b-b-default f-w-600">'+post.request+'</h6>';
  if(post.location == 1){
    request+='<div class="row-table">';
    request+='<h6 class="text-muted f-w-600 b-b-defualt">מיקום יתואם בשיחת טלפון</h6>';
    request+='</div><br>';
  }
  else{
    request+='<div class="row-table">';
    request+='<h6 class="text-muted f-w-600 b-b-defualt">אצלי בבית</h6></div><br>';
  }
  request+='<div class="row-table">';
  request+='<h6 class="text-muted f-w-400">'+date[2]+"/"+date[1]+"/"+date[0]+'</h6></div><br>';
  request+='<div class="row-table">';
  request+='<h6 class="text-muted f-w-400">'+post.time+'</h6>';
  request+='</div>';
  request+='<div class="col-sm-about">';
  request+='<img src="assets/images/request.png" class="rounded img-fluid d-block mx-auto" alt="App" width="200" height="200">';
  request+='</div>';
  request+='</div>';
  request+='</div>';
  request+='</div>';
  request+='</li>';
  request+='<br>';
  return request;
}

function getRequests(db, userID){
    let requests = '<ul class="responsive-table"><li class="table-header"><div class="col col-1">גמד</div><div class="col col-2">קטנה</div></li>';
    const docs =[];
    const map1 = new Map();
    db.collection("posts")
    .get()
    .then((posts) => {
      let i = 0;
      const promises = [];
      posts.forEach((doc) => {
        console.log(doc.data().user);
        if (doc.data().user == userID){
          if (doc.data().volunteer != ""){
            docs.push(doc);
            map1.set(doc.id, i);
            const promise = db.collection("users").doc(doc.data().volunteer).get();
            promises.push(promise);
            i += 1;
          }
          else{
            docs.push(doc);
            map1.set(doc.id, i);
            promises.push("");
            i += 1;
          }
        }
      });
      return Promise.all(promises);
    }).then((results)=>{
        let num = 0;
        let Adocs = docs.sort((a,b)=> ((a.data().date).localeCompare(b.data().date)) || ((a.data().time).localeCompare(b.data().time)) );
        Adocs.forEach(promise => {
          if (results[map1.get(promise.id)]){
            // console.log(promise.id);
            // console.log(results[map1.get(promise.id)]);
            // console.log(results[map1.get(promise.id)].data());
            requests += createFullRequest(results[map1.get(promise.id)].data(), promise.data());
          }
          else{
            requests += createEmptyRequest(promise.data());
          }
          // console.log(docs[num]);
          num += 1;
        });
        requests+='</ul>';
        document.getElementById("myRequests").innerHTML = requests;
    });
}

export {
  getRequests
};