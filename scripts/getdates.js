const lastModified = document.getElementById("lastModified");
const currentYear = document.getElementById("currentyear");

const dateLastModified = document.lastModified;

lastModified.style.color='yellow'
lastModified.textContent = `Last Modification: ${dateLastModified}`;

currentYear.textContent += new Date().getFullYear();
