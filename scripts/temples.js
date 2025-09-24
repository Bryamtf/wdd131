
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav ul");


function toggleMenu() {
  navigation.classList.toggle("open");
  menuButton.classList.toggle("open");
}


menuButton.addEventListener("click", toggleMenu);


document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navigation.classList.contains("open")) {
      toggleMenu();
    }
  });
});

document.addEventListener("click", (event) => {
  const isClickInsideNav = navigation.contains(event.target);
  const isClickOnMenuButton = menuButton.contains(event.target);

  if (
    !isClickInsideNav &&
    !isClickOnMenuButton &&
    navigation.classList.contains("open")
  ) {
    toggleMenu();
  }
});


document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation.classList.contains("open")) {
    toggleMenu();
    menuButton.focus(); 
  }
});

function updateFooterDates() {
  const currentYearElement = document.getElementById("currentyear");
  const lastModifiedElement = document.getElementById("lastModified");


  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
    lastModifiedElement.style.color = "var(--secondary-color)";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateFooterDates();

  console.log("Temples.js loaded successfully");

  document.body.classList.add("js-loaded");
});

