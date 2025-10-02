
function calculateWindChill(temperature, windSpeed) {
  return (
    13.12 +
    0.6215 * temperature -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temperature * Math.pow(windSpeed, 0.16)
  );
}


function updateFooter() {
  const currentYearElement = document.getElementById("current-year");
  const lastModifiedElement = document.getElementById("last-modified");

  currentYearElement.textContent = new Date().getFullYear();
  lastModifiedElement.textContent = document.lastModified;
}


function updateWindChill() {
  const temperature = 15; // °C - static value
  const windSpeed = 12; // km/h - static value
  const windChillElement = document.getElementById("wind-chill");

  if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${Math.round(windChill)}°C`;
  } else {
    windChillElement.textContent = "N/A";
  }
}


document.addEventListener("DOMContentLoaded", function () {
  updateFooter();
  updateWindChill();
});
