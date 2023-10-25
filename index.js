
function hidePage (id) {
  console.info("hide",id);
  document.getElementById(id).style.display = "none";
}

function showPage (id) {
  console.warn("show",id);
  document.getElementById(id).style.display ="block";
}

function showHomePage() {
  console.info("Home PAGE!");

// document.getElementById("Skills").style.display = "none";
// document.getElementById("Languages").style.display = "none";
// document.getElementById("Projects").style.display = "none";
 
hidePage("Skills");
hidePage("Languages");
hidePage("Projects");

// document.getElementById("Home").style.display = "block";

showPage("Home");

}

showHomePage();

function showSkillsPage() {
 
  console.info("Skills PAGE");

//  document.getElementById("Projects").style.display = "none";
//  document.getElementById("Languages").style.display = "none";

hidePage("Languages");
hidePage("Projects");
hidePage("Home");

// document.getElementById("Skills").style.display = "block";

showPage("Skills");

}

showSkillsPage();

function showLanguagesPage() {

  console.info("Languages Page Loaded");

hidePage("Projects");
hidePage("Home");
hidePage("Skills");

// document.getElementById("Languages").style.display = "block";

showPage("Languages");

}

showLanguagesPage();

function showProjectsPage() {
  
console.info("Projects Page Loaded");

// document.getElementById("Skills").style.display = "none";
// document.getElementById("Languages").style.display = "none";

hidePage("Languages");
hidePage("Skills");
hidePage("Home");

// document.getElementById("Projects").style.display = "block";

showPage("Projects");

}

showProjectsPage();
