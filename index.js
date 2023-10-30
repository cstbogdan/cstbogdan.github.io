
function hidePage (id) {
  console.info("hide",id);
  document.getElementById(id).style.display = "none";
}

function showPage (id) {
  console.warn("show",id);
   document.getElementById(id).style.display ="block";

  

}

function hideAllPages(id) {

console.warn("Hidden All Pages")

  hidePage("Skills");
  hidePage("Languages");
  hidePage("Projects");
  hidePage("Home");

}

function showHomePage() {
  console.info("Home PAGE!");

// document.getElementById("Skills").style.display = "none";
// document.getElementById("Languages").style.display = "none";
// document.getElementById("Projects").style.display = "none";
 
// hidePage("Skills");
// hidePage("Languages");
// hidePage("Projects");

// document.getElementById("Home").style.display = "block";

hideAllPages();

showPage("Home");

}

showHomePage();

function showSkillsPage() {
 
  console.info("Skills PAGE");

//  document.getElementById("Projects").style.display = "none";
//  document.getElementById("Languages").style.display = "none";

// hidePage("Languages");
// hidePage("Projects");
// hidePage("Home");

// document.getElementById("Skills").style.display = "block";

hideAllPages();

showPage("Skills");

}

showSkillsPage();

function showLanguagesPage() {

  console.info("Languages Page Loaded");

// hidePage("Projects");
// hidePage("Home");
// hidePage("Skills");

// document.getElementById("Languages").style.display = "block";

hideAllPages();

showPage("Languages");

}

showLanguagesPage();

function showProjectsPage() {
  
console.info("Projects Page Loaded");

// document.getElementById("Skills").style.display = "none";
// document.getElementById("Languages").style.display = "none";

// hidePage("Languages");
// hidePage("Skills");
// hidePage("Home");

// document.getElementById("Projects").style.display = "block";

hideAllPages();

showPage("Projects");

}

showProjectsPage();

function display(Skills) {

  var ul = document.querySelector("#Skills ul");
  Skills.sort(function (a, b) {

     return b.endorcements - a.endorcements;

  });
  console.info(Skills);
  for (var i = 0; i< Skills.length; i++) {

     ul.innerHTML += `<li>${Skills[i].name} - ${Skills[i].endorcements}</li>`;

  }  
}

function loadSkills() {
  fetch("Skills.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (serverSkills) {
    displaySkills(serverSkills);
  });
  
}

loadSkills();
  
  
  


  
  
  
  
  
  

