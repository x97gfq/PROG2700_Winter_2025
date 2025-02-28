
var office_locations = [];

class OfficeLocation {
    constructor(region, office_address, service) {
        this.region = region;
        this.office_address = office_address;
        this.services = [];
        this.services.push(service);
    }
}

function getOfficeLocations() {

    //https://data.novascotia.ca/Public-Service/Access-Centres-Office-Locations/f35v-t3mg
    var officesUrl = "https://data.novascotia.ca/resource/f35v-t3mg.json";
    
    $.ajax(
        {
            url: officesUrl, 
            success: function(result){

                for (var i = 0; i < result.length; i++) {
                    var office = result[i];
                    var foundInList = office_locations.filter((off) => off.region == office.region);
                    if (foundInList.length != 0) {
                        foundInList[0].services.push(office.service);
                    } else {
                        var oL = new OfficeLocation(office.region, office.office_address, office.service);
                        office_locations.push(oL);
                    }
                }

                var office_data_string = "<ul>";
                for (var i = 0; i < office_locations.length; i++) {
                    office_data_string += "<li><b>" + office_locations[i].region + "</b><br/>";
                    office_data_string += office_locations[i].services.toString() + "</li>"
                }
                office_data_string += "</ul>";
                $("#office_data").html(office_data_string);

            }
        }
    );
}

$(document).ready(function() {
    getOfficeLocations();
});
