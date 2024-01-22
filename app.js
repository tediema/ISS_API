// window.addEventListener('DOMContentLoaded', (event) => {

//     function fetchISSData() {
//         fetch('iss_data.json')
//             .then(response => response.json())
//             .then(data => {
//                 // Преобразувайте Latitude и Longitude в числа (ако не са)
//                 const lat = parseFloat(data.Latitude);
//                 const lon = parseFloat(data.Longitude);

//                 // Обновете HTML елементите
//                 document.getElementById('lat').textContent = lat.toFixed(4);
//                 document.getElementById('lon').textContent = lon.toFixed(4);
//             })
//             .catch(error => {
//                 console.error('Грешка при зареждането на JSON данните:', error);
//             });
//     }

//     // Извикайте функцията веднага при зареждане на страницата
//     fetchISSData();

//     // Обновете данните на всеки 10 секунди (10,000 милисекунди)
//     setInterval(fetchISSData(), 1000);
// });



window.addEventListener('DOMContentLoaded', () => {
    const map = L.map('issmap').setView([0, 0], 1); //L comes from leaflet library in index.html //0-lat 0-long 1-zoom level
    const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
    const tileURL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = L.tileLayer(tileURL, { attribution });
    tiles.addTo(map);

    const issIcon = L.icon({
        iconUrl: 'issImage.png',
        iconSize: [50, 32],
        iconAnchor: [25, 16]
    });

    const marker = L.marker([0, 0], { icon: issIcon }).addTo(map);
    let firstTime = true;
    
   async function fetchISSData() {
    
       await fetch('iss_data.json')
            .then(response => response.json())
            .then(data => {
               
                const latitude = parseFloat(data.Latitude);
                const longitude = parseFloat(data.Longitude);

                marker.setLatLng([latitude,longitude]);
                if (firstTime) {
                    map.setView([latitude, longitude], 2);
                    firstTime = false;
                }
                document.getElementById('lat').textContent = latitude.toFixed(4);
                document.getElementById('lon').textContent = longitude.toFixed(4);
                                
                
            })
            .catch(error => {
                console.error('Грешка при зареждането на JSON данните:', error);
            });
    }

    fetchISSData();

    // Обновявайте данните на всеки 5 секунди (5000 милисекунди)
    setInterval(fetchISSData, 5000);
});




