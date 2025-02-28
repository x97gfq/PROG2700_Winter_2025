//https://data.novascotia.ca/Business-and-Industry/Tourism-Nova-Scotia-Fixed-Roof-Accommodations/458x-qn7p


function getDataFromAPI() {

    var region = $("#region").val();
    
    /*
    var url = "https://data.novascotia.ca/resource/458x-qn7p.json?"; 
        url +=  "region=" + region;
    */
    
    var url = "https://data.novascotia.ca/resource/458x-qn7p.json?"; 
    url +=  "$where=region%20like%20%27%25" + region + "%25%27";

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
                htmlString += "<li>" + data[i].region + " (" + data[i].month_year.substring(0,10) + ") " + data[i].occupancy_rate + "</li>";
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









