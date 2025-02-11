
document.getElementById('fetchButton').addEventListener('click', fetchData);

let apiUrl = "https://data.novascotia.ca/resource/w64p-5ue3.json?geography=Bridgewater,%20Nova%20Scotia,%20municipal%20[12006]";

function fetchData() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);

            let htmlString = "<p>";

            for (let i = 0; i < data.length; i++) {

                let year = data[i].year;
                let crimeIndex = data[i].violent_crime_severity_index;

                htmlString += year + ": " + crimeIndex + "<br/>";
            }

            htmlString += "</p>";

            document.getElementById("response").innerHTML = htmlString;

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            alert('Failed to fetch data. Check the console for details.');
        });
}
