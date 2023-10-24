function showHomePage() {
  console.info("Home PAGE!");

  document.getElementById("Skills").style.display = "none";

  document.getElementById("Languages").style.display = "none";

  document.getElementById("Projects").style.display = "none";

  document.getElementById("Home").style.display = "block";
}

showHomePage();

function showSkillsPage() {
  console.info("Skills PAGE");
  document.getElementById("Projects").style.display = "none";
  document.getElementById("Languages").style.display = "none";
  document.getElementById("Home").style.display = "none";
  document.getElementById("Skills").style.display = "block";
}

showSkillsPage();

function showLanguagesPage() {
  console.info("Languages Page Loaded");

  document.getElementById("Projects").style.display = "none";
  document.getElementById("Home").style.display = "none";
  document.getElementById("Skills").style.display = "none";
  document.getElementById("Languages").style.display = "block";
}

showLanguagesPage();

function showProjectsPage() {
  console.info("Projects Page Loaded");

  document.getElementById("Home").style.display = "none";
  document.getElementById("Skills").style.display = "none";
  document.getElementById("Languages").style.display = "none";
  document.getElementById("Projects").style.display = "block";
}

showProjectsPage();
