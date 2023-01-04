function onGeoOk(position) {
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
}
function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
