
var hospital_locations = [];

class HospitalLocation {
    constructor(name, town, latitude, longitude) {
        this.name = name;
        this.town = town;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

function getHospitalLocations() {

    var hospitalsUrl = "https://data.novascotia.ca/resource/tmfr-3h8a.json";

    fetch(hospitalsUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(result => {
            result.forEach(item => {
                // Create an instance of HospitalLocation with the necessary properties
                var hosp = new HospitalLocation(
                    item.facility, 
                    item.town, 
                    item.the_geom.coordinates[0],
                    item.the_geom.coordinates[1]
                );

                // Push the new object onto the global array
                hospital_locations.push(hosp);
            });

            // Map the data
            hospital_locations.forEach(hospital => {
                // Info window popup
                const infowindow = new google.maps.InfoWindow({
                    content: `<p style='color: black;'>${hospital.name}<br/>${hospital.town}</p>`
                });

                // Hospital icon source: https://www.flaticon.com/free-icons/hospital
                var marker = new google.maps.Marker({
                    position: { lat: hospital.longitude, lng: hospital.latitude },
                    icon: 'hospital_icon.png',
                    animation: google.maps.Animation.DROP, // BOUNCE
                    /*label: hospital.town*/
                });

                // Add a click event to the marker for the infowindow
                marker.addListener("click", () => {
                    infowindow.open({
                        anchor: marker,
                        map,
                    });
                });

                // Set the marker on the map
                marker.setMap(map);
            });
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });    
}

var map; 

function initializeMap() {
    
    let lat = 43.8528801;
    let lon = -66.1043946;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
        }, error => {
            console.error('Geolocation error:', error);
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
    
    var mapProperties = {
        center: new google.maps.LatLng(lat, lon),
        zoom: 8
    };

    map = new google.maps.Map(document.getElementById("googleMap"),mapProperties);
}

$(document).ready(function() {
    getHospitalLocations();
});
