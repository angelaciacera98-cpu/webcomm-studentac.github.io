/* map between senago and bollate */
const map = L.map('map').setView([45.5450, 9.1200], 13);

// map graphic
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Array with 6 bib
const biblioteche = [
    { nome: "Biblioteca di Bollate", coords: [45.5428, 9.1170] },
    { nome: "Biblioteca di Senago", coords: [45.5727, 9.1257] },
    { nome: "Biblioteca di Arese", coords: [45.5532, 9.0768] },
    { nome: "Biblioteca di Novate Milanese", coords: [45.5305, 9.1315] },
    { nome: "Biblioteca di Cesate", coords: [45.5947, 9.0825] },
    { nome: "Biblioteca di Baranzate", coords: [45.5255, 9.1128] }
];

// Add markers to the map with a loop
biblioteche.forEach(loc => {
    L.marker(loc.coords)
     .addTo(map)
     .bindPopup(`<b>${loc.nome}</b><br>Biblioteca Comunale`);
});