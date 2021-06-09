//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "IDIOT-BOX",
    link:"https://frozen-citadel-58286.herokuapp.com/",
    Githublink:"https://github.com/tarun744/idiot-box",
    cardImage: "assets/images/experience-page/flipkart.jpg",
    place: "Movie Downloading Website",
    time: "(Live - present)",
    desp: "<li>Developed a movie website using Node.js for backend, used MongoDB as database and deployed using Amazon Web Services.</li> <li> I had used CSS, SCSS, Bootstrap and javascript to make it more attractive and responsive.</li> <li>Implemented Search to find a particular movie with given keyword.</li>",
  },
  {
    title: "T-90 Tank",
    link:"https://github.com/tarun744/Mobile-Controlled-Tank",
    Githublink:"https://github.com/tarun744/Mobile-Controlled-Tank",
    cardImage: "assets/images/experience-page/t.png",
    place: "Mobile Controlled Tank",
    time: "(Mar - Aug, 2019)",
    desp: "<li>Developed a fully functional T-90 tank with Nodemcu as controller used Arduino C++ as the working code which develops local server and an IP Address for user to control the tank. .</li><li> Controller(Node Mcu) is the key which directs the tank to move in forward backward left and right direction.</li>",
  },
  {
    title: "Virtual Mouse",
    link:"https://github.com/tarun744/Virtual-Mouse",
    Githublink:"https://github.com/tarun744/Virtual-Mouse",
    cardImage: "assets/images/experience-page/AI-Virtual-Mouse.jpg",
    place: "OpenCV Python | Computer Vision",
    time: "(Dec, 19 - Jan, 20)",
    desp:"<li>In this project, I have created a Virtual Mouse Controller. Which will first detect the hand landmarks and then track and click based on these points.</li><li>I have applied smoothing techniques to stabilize the cursor</li><li>I have used Computer vision's OpenCv and Mediapipe library</li>",
  },
  {
    title: "Gideon",
    link:"https://github.com/tarun744/Gideon-Voice-Controlled-Assistant.git",
    Githublink:"https://github.com/tarun744/Gideon-Voice-Controlled-Assistant.git",
    cardImage: "assets/images/experience-page/gideon.jfif",
    place: "Tensor-Flow | NLTK",
  
    desp:"<li>In this project, I have created Gideon is a voice controlled personal assistant bot aims to ease the access of operating laptop/pc features and functions.</li><li>It uses Google's Speech to Text Recognition to interact with user</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp,link,
    Githublink }) =>
      (output += `        
      <ul style="margin-top:60px;" >
      
      <li class="card card1">
      
      
        <img href="${link}" src="${cardImage}" class="featured-image"/>
        
        <a href="${link}" target="_blank">
        <article class="card-body">
        
          <header >
          
            <div class="title" >
            

              <h3>${title} <a style="margin-left:400px;"href="${Githublink} " target="_blank" <i class="fab fa-github"></i>

              </a> </h3>
              
              
             
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            
           
            <ol>
              ${desp}
            </ol>
           
            
          </header>
        </article>
        </a>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Catch me if u Can",
    link:"https://catch-steam.surge.sh",
    cardImage: "assets/images/experience-page/catch.jfif",
    description:
      "Catch me if u Can game to catch the text in screen using mouse",
  },
  {
    title: "Insecto",
    link:"http://gaudy-doctor.surge.sh//",
    cardImage: "assets/images/experience-page/maxresdefault.jpg",
    description:
      "Insect Game of finding a particular insect in given time. I have used basic html, css , js",
  },
  {
    title: "Snake-salt",
    link:"http://snake-salt.surge.sh/",
    cardImage: "assets/images/experience-page/snake.jfif",
    description:
      "Developed a Snake game fully based on java-script",
  },
  {
    title: "Tic-tac-toe",
    link:"https://tic-tac-duck.surge.sh/",
    cardImage: "assets/images/experience-page/tic.png",
    description:
      "Tic-Tac-TOe Game mobile and pc comptaible.",
  },
  {
    title: "Adventure-Island",
    link:"http://adventure-string.surge.sh/",
    cardImage: "assets/images/experience-page/adv.jfif",
    description:
      "Adventure text based game of going in a story",
  },
  {
    title: "Music Hacks",
    link:"https://music-polish.surge.sh",
    cardImage: "assets/images/experience-page/mus.jpg",
    description:
      "Music based text Game",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description,link }) =>
      (output += `
      <a href="${link}"target="_blank">        
      <div class="card volunteerCard" style="height: 600px;width:400px">
      
      <img src="${cardImage}" height="300" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      </a>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "HakinCode",
    image: "assets/images/experience-page/hakin.png",
    time: "06/2020 - 08/2020",
    desp: "<li>It is an open source community where students and mentors can apply.</li><hr /><li>Ample amount of technologies and projects are there and we are given opportunity to work on them according to our interest and knowledge.</li>",
  },
  {
    title: "Google Summer of Code",
    image: "assets/images/experience-page/gsoc.png",
    time: "03/2020 - 08/2020",
    desp: "<li>Google Summer of Code is a global program focused on introducing students to open source software development.</li><hr /><li>It is a great platform to explore new areas, maybe discover a new career path!</li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
