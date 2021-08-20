 <p align="center">
   <img src='https://callus-50777.web.app/assets/images/logo5.png' type='image'>
 </p>
 
 # CallUs
 Our Cooperative Laundry Application.
 A full deployed site with user mangemant (for clients and washers), location base filtered web app.
 
 ## Frontend Architecture
 All of the project frontend files are in public folder. We decided to arrange the html files in folders, but since a few html files using the same css and js files, all of the style and functions can be found in the css and scripts folders.
 puclic:
   - css:

 # 🧺 The Social Laundry Service Platform
 > Our Cooperative Laundry Application.<br/>
 > A full deployed site with user mangemant (for clients and washers), location base filtered web app.
 ## 🖌️ Frontend Architecture
 All of the project frontend files are in public folder.</br>
 We decided to arrange the html files in folders, but since a few html files using the same css and js files, all of the style and functions can be found in the css and scripts folders.

 ### public:
 #### css:
     - header_style.css - main css file for colors, headers and more.
     - more style files.
   - html:
     - includes - header.html, the site header (included in all pages).

 #### html:
     - includes - header.html, the site header (included in all pages)
     - user_flow - all of the pages linked to the user expirience
     - washer_flow - all of the pages linked to the washer expirience
     - welcome.html: landing page
   - images:
     - the site static images.
   - scripts:

 #### images:
     - the site static images

 #### scripts:
     - js files for dynamic site content

 ## Backend architecture
 - Firebase and configuration files:
   1. .firebaserc
   2. .gitignore
   3. firebase.json
   4. firestore.rules

 - Our backend API:
   1. public/scripts/app - functions handling firebase auth, user login and authObserver (changes in the page on user login).
   2. public/scripts/firestore_tools - function handling firestore. user\washer\order create, delete, edit, filter, sort and more.
   3. public/scripts/tools - more backend tools, such as forward and reverse geocoder, washer-array intersection, distance between points and date handling.

 ## Technolegy involved:
 - frontend: JS, CSS, HTML.
 - backend: Firebase (JS framework).
 ## Usage
 You can find the site (running in open version) [Here](https://themoneylaundry-745ca.web.app).
 ## 🛠️ Backend architecture
 ### Firebase and configuration files:
     - .firebaserc
     - .gitignore
     - firebase.json
     - firestore.rules

 ### Our backend API:
     - public/scripts/app - functions handling firebase auth, user login and authObserver (changes in the page on user login).
     - public/scripts/firestore_tools - function handling firestore. user\washer\order create, delete, edit, filter, sort and more.
     - public/scripts/tools - more backend tools, such as forward and reverse geocoder, washer-array intersection, distance between points and date handling.

 ## 💻 Technolegy involved:
 ### Frontend
 <p align="center">
   <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
   <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
   <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
 </p>

 ### Backend:
 <p align="center">
   <img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" />
   (JS framework)
 </p>

 ## 🔗 Usage
 You can find the site (running in open version) [Here](https://callus-50777.web.app).</br>
 For updates: clone the folder, connect it to Firebase cli with 'firebase init' (and connect it to firebase project) and than run 'firebase deploy' to deploy the site. make sure you have the setting required to run the project (DB handling, indexing and more).

 ## 🦸🏻‍♀️🦸🏻‍♂️ Our Team:
 - [Tomer Gilmore] - Backend & Product
 - [Amit Makovky] - Frontend & UI Design
 - [Ori Meirav] - Frontend & Product
 - [Yoav Perez] - Frontend & Product
 - [Aviv Ron] - Backend & Product
