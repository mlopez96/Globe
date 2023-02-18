const Globe = GlobeGl();

const container = document.getElementById('globe');
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphereMesh);

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
