const Globe = GlobeGl();

const container = document.getElementById('globe');

const globe = new Globe(container, {
  baseColor: '#000',
  markerColor: '#f00',
  markerType: 'dot',
  markers: [
    {
      lat: 37.7749,
      lng: -122.4194,
      label: 'San Francisco'
    },
    {
      lat: 40.7128,
      lng: -74.0060,
      label: 'New York'
    }
  ]
});

globe.animate();
