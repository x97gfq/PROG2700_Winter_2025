

async function fetchWeatherData(lat, lon) {
    const apiKey = 'API_KEY_HERE';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayWeatherData(data);
        initMap(lat, lon);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function displayWeatherData(data) {
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = `
        <p>Location: ${data.location.name}, ${data.location.region}, ${data.location.country}</p>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Condition: ${data.current.condition.text}</p>
    `;
}

function initMap(lat, lon) {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: lat, lng: lon },
        zoom: 10
    });
    new google.maps.Marker({
        position: { lat: lat, lng: lon },
        map: map
    });
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            fetchWeatherData(lat, lon);
        }, error => {
            console.error('Geolocation error:', error);
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
}

// Get the user's location when the page loads
window.onload = getLocation;

