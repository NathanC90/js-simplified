const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoibmF0ZWZsaXhhbmRjb2RlIiwiYSI6ImNsdzdobXhyeTFnY3kyanFlNnkwOXU4ZnoifQ.nX_ssZ4QjYUGrdv0-CL0Dg";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: centerPosition, // starting position [lng, lat]
    zoom: 9, // starting zoom
  });

  map.addControl(
    new MapboxDirections({
      accessToken: MAPBOX_ACCESS_TOKEN,
    }),
    "top-left"
  );

  map.addControl(new mapboxgl.FullscreenControl());
}

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
  console.log(position);
}

function errorLocation() {
  console.log("Error");
}
