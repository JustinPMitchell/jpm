function setViewport(){
  var meta = document.createElement('meta');
  meta.name= "viewport";
  meta.content = "width=device-width, initial-scale=1, shrink-to-fit=no";
  document.getElementsByTagName('head')[0].appendChild(meta);
}
// window.onload = setViewport;

$(document).ready(function() {

  setViewport();

  var projects = [
                {
                  title: "Dino-Dynasty",
                  img: "./images/dino-dynasty.png",
                  demo: "https://justinpmitchell.github.io/Dino-Dynasty/",
                  code: "https://github.com/JustinPMitchell/Dino-Dynasty",
                  description: "Two players try to knock each other out of the ring by bumping and kicking each other using a single keyboard.",
                  technology: "<button class='skills'>Phaser</button><button class='skills'>Javascript</button><button class='skills'>jQuery</button>"
                },
                {
                  title: "Chomper",
                  img: "./images/chomper.png",
                  demo: "https://chomper-macro-count.herokuapp.com/",
                  code: "https://github.com/JustinPMitchell/chomper",
                  description: "Make a meal plan for a week with a few clicks. Discover your recommended macronutrient levels, by entering in your personal information.",
                  technology: "<button class='skills'>Mongo</button><button class='skills'>Express</button><button class='skills'>React</button><button class='skills'>Node</button><button class='skills'>Edamam API</button>"                      
                },
                {
                  title: "MathyMathy",
                  img: "./images/mathymathy.png",
                  demo: "https://mathymathy.herokuapp.com/",
                  code: "https://github.com/JustinPMitchell/mathapp",
                  description: "If you are a teacher, MathyMathy was designed for you. Spice up some of your lesson plans with our handy quiz-making app. Or have your students login and create their own quizzes.",
                  technology: "<button class='skills'>jQuery</button><button class='skills'>Bootstrap</button><button class='skills'>Node</button><button class='skills'>Express</button><button class='skills'>YouTube API</button>"
                },
                {
                  title: "IZI Node Module",
                  img: "./images/izi-example.png",
                  demo: "",
                  code: "https://github.com/JustinPMitchell/izi-travel-api",
                  description: "A small node module that makes the izi-travel-api a little easier.<br><a href='https://github.com/JustinPMitchell/izi-travel-api-example' target='_blank'>Example</a> | <a href='https://www.npmjs.com/package/izi-travel-api' target='_blank'>NPM</a>",
                  technology: "<button class='skills'>Javascript</button><button class='skills'>NPM</button><button class='skills'>Node</button><button class='skills'>Express</button>"
                }
                ];

  title = document.getElementsByClassName("projects-title")[0];
  image = document.getElementsByClassName("project-image")[0];
  demo = document.getElementsByClassName("projects-demo")[0];
  code = document.getElementsByClassName("projects-code")[0];
  summary = document.getElementsByClassName("projects-summary")[0];
  skills = document.getElementsByClassName("skills-container")[0];
  projectContainer = document.getElementsByClassName("project-container")[0];

  dinoDynasty = document.getElementsByClassName("dino-dynasty")[0];
  chomper = document.getElementsByClassName("chomper")[0];
  mathymathy = document.getElementById("mathymathy");
  izi = document.getElementsByClassName("izi")[0];

  function clearBorders() {
    dinoDynasty.style.border = "none";
    chomper.style.border = "none";
    mathymathy.style.border = "none";
    izi.style.border = "none";
  }

  dinoDynasty.addEventListener("click", function() {
    projectContainer.style.transition = "opacity 0.5s linear";
    projectContainer.style.opacity = "0";

    setTimeout(function() {
      image.src = projects[0].img;
      projectContainer.style.transition = "opacity 0.5s linear";
      projectContainer.style.opacity = "1";
      title.innerHTML = projects[0].title;
      demo.style.display = "inline-block";
      demo.href = projects[0].demo;
      code.href = projects[0].code;
      summary.innerHTML = projects[0].description;
      skills.innerHTML = projects[0].technology;
    }, 600);

    clearBorders();
    dinoDynasty.style.border = "1px solid #aaa";
    dinoDynasty.style.boxShadow = "0 10px 6px -6px #777";
    chomper.style.boxShadow = "none";
    mathymathy.style.boxShadow = "none";
    izi.style.boxShadow = "none";

    window.location.href = '#projects';

  });

  chomper.addEventListener("click", function() {
    projectContainer.style.transition = "opacity 0.5s linear";
    projectContainer.style.opacity = "0";

    setTimeout(function() {
      image.src = projects[1].img;
      projectContainer.style.transition = "opacity 1s linear";
      projectContainer.style.opacity = "1";
      title.innerHTML = projects[1].title;
      demo.style.display = "inline-block";
      demo.href = projects[1].demo;
      code.href = projects[1].code;
      summary.innerHTML = projects[1].description;
      skills.innerHTML = projects[1].technology;
    }, 600);

    clearBorders();
    chomper.style.border = "1px solid #aaa";
    chomper.style.boxShadow = "0 10px 6px -6px #777";
    dinoDynasty.style.boxShadow = "none";
    mathymathy.style.boxShadow = "none";
    izi.style.boxShadow = "none";

    window.location.href = '#projects';

  });

  mathymathy.addEventListener("click", function() {
    projectContainer.style.transition = "opacity 0.5s linear";
    projectContainer.style.opacity = "0";
    setTimeout(function() {
      image.src = projects[2].img;
      projectContainer.style.transition = "opacity 1s linear";
      projectContainer.style.opacity = "1";
      title.innerHTML = projects[2].title;
      demo.style.display = "inline-block";
      demo.href = projects[2].demo;
      code.href = projects[2].code;
      summary.innerHTML = projects[2].description;
      skills.innerHTML = projects[2].technology;
    }, 600);


    clearBorders();
    mathymathy.style.border = "1px solid #aaa";
    mathymathy.style.boxShadow = "0 10px 6px -6px #777";
    dinoDynasty.style.boxShadow = "none";
    chomper.style.boxShadow = "none";
    izi.style.boxShadow = "none";

    window.location.href = '#projects';

  });

  izi.addEventListener("click", function() {
    projectContainer.style.transition = "opacity 0.5s linear";
    projectContainer.style.opacity = "0";

    setTimeout(function() {
      image.src = projects[3].img;
      projectContainer.style.transition = "opacity 1s linear";
      projectContainer.style.opacity = "1";
      title.innerHTML = projects[3].title;
      demo.style.display = "none";
      code.href = projects[3].code;
      summary.innerHTML = projects[3].description;
      skills.innerHTML = projects[3].technology;
    }, 600);

    clearBorders();
    izi.style.border = "1px solid #aaa";
    izi.style.boxShadow = "0 10px 6px -6px #777";
    dinoDynasty.style.boxShadow = "none";
    chomper.style.boxShadow = "none";
    mathymathy.style.boxShadow = "none";

    window.location.href = '#projects';
  });



});