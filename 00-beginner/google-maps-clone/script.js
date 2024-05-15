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
    attributionControl: false,
  });

  map.addControl(
    new MapboxDirections({
      accessToken: MAPBOX_ACCESS_TOKEN,
    }),
    "top-left"
  );

  map.addControl(new mapboxgl.FullscreenControl());

  map.addControl(
    new mapboxgl.AttributionControl({
      customAttribution: "Map design by Nateflix&Code",
    })
  );

  // Create a new marker.
  const marker = new mapboxgl.Marker().setLngLat([30.5, 50.5]).addTo(map);

  // Navigation control
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav, "top-right");
}

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
  console.log(position);
}

function errorLocation() {
  console.log("Error");
}
