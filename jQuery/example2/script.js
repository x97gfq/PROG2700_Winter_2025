
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

    //https://data.novascotia.ca/Health-and-Wellness/Hospitals/tmfr-3h8a/about_data 
    var officesUrl = "https://data.novascotia.ca/resource/tmfr-3h8a.json";
    
    $.ajax(
        {
            url: officesUrl, 
            success: function(result){

                //.forEach() calls a function for each item in the array
                //https://www.w3schools.com/jsref/jsref_foreach.asp
                result.forEach(
                    function(item) {

                        //take the data from the source and create 
                        //an instance of our own class with only the properties that we need
                        //and in a format we can use
                        var hosp = new HospitalLocation(
                            item.facility, 
                            item.town, 
                            item.the_geom.coordinates[0],
                            item.the_geom.coordinates[1]
                            );

                        //push the new object onto the global array
                        hospital_locations.push(hosp);
                    }
                );

                //we have our data, let's map it.
                hospital_locations.forEach(function(hospital) {

                    //info window popup
                    const infowindow = new google.maps.InfoWindow({
                        content: "<p style='color: black;'>" + hospital.name + "<br/>" + hospital.town + "</p>"
                    });

                    //hospital icon source: https://www.flaticon.com/free-icons/hospital
                    var marker = new google.maps.Marker({
                        position: { lat: hospital.longitude, lng: hospital.latitude },
                        icon:'hospital_icon.png',
                        animation: google.maps.Animation.DROP, //BOUNCE
                        /*label: hospital.town*/
                    });

                    //add a click event to the marker for the infowindow
                    marker.addListener("click", () => {
                        infowindow.open({
                            anchor: marker,
                            map,
                        });
                    });

                    //set the marker on the map
                    marker.setMap(map);
                });
            }
        }
    );
}

var map; 

function initializeMap() {

    var mapProperties = {
        center: new google.maps.LatLng(43.8528801,-66.1043946),
        zoom: 8
    };

    map = new google.maps.Map(document.getElementById("googleMap"),mapProperties);
}

$(document).ready(function() {
    getHospitalLocations();
});
