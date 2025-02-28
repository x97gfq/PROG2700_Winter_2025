//example: https://data.novascotia.ca/resource/2shh-dv8p.json?facility=TIM%20HORTONS&facility_town=YARMOUTH


function getDataFromAPI() {
    //example: https://data.novascotia.ca/resource/2shh-dv8p.json?facility_town=YARMOUTH

    var facility_town = $("#facility_town").val();

    var url = "https://data.novascotia.ca/resource/2shh-dv8p.json?"; 
        url +=  "facility_town=" + facility_town.toUpperCase();

    $.get(url, function(data, status){
        console.log(data, status);
        //alert the user if nothing was found, otherwise show the results.
        if (data.length == 0) {
            alert("no results returned.");
            //empty the results container (in case it contained data from a previous search) - always clean up after yourself
            $("#results_container").html("<br/>");
        } else {
            //iterate over the array of results and brutally construct some HTML and dump it into the container (div)
            var htmlString = "<p>" + data.length + " results found.</p>";
            htmlString += "<ul>";
            for(var i = 0; i < data.length; i++) {
                htmlString += "<li>" + data[i].facility + " (" + data[i].facility_address + ")</li>";
            }
            htmlString += "</ul">

            $("#results_container").html(htmlString);
        }
    });    
}

window.addEventListener("load", (event) => {
    const el = document.getElementById("getdata_btn");
    el.addEventListener("click", getDataFromAPI, false);
});









