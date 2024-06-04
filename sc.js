let mapContainer = document.getElementById("map-container");
let buttonsContainer = document.getElementById("buttons-container");
let backButton = document.getElementById("back-button");

function showMap(location) {
  buttonsContainer.style.display = "none";
  backButton.style.display = "block";
  switch (location) {
    case "mecanicos":
      mapContainer.innerHTML=""
      break;
    case "hospitales":
      mapContainer.innerHTML
      break;
    case "comisarias":
      mapContainer.innerHTML
      break;
    default:
      mapContainer.innerHTML
  }
}

function goBack() {
  buttonsContainer.style.display = "flex";
  backButton.style.display = "none";
  mapContainer.innerHTML = "";
}

function goBack() {
  buttonsContainer.style.display = "flex";
  backButton.style.display = "none";
  mapContainer.innerHTML = "";
}
