const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibmF0ZWZsaXhhbmRjb2RlIiwiYSI6ImNsdzdobXhyeTFnY3kyanFlNnkwOXU4ZnoifQ.nX_ssZ4QjYUGrdv0-CL0Dg'

    const map = new mapboxgl.Map({
        accessToken: MAPBOX_ACCESS_TOKEN,
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9, // starting zoom
    });