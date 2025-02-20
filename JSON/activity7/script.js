
document.addEventListener('DOMContentLoaded', function() {
    buildSelectOptions(geography_list);
});

document.getElementById('fetchButton').addEventListener('click', function() {
    let url = buildUrl();
    fetchData(url);
});

let apiUrl = "https://data.novascotia.ca/resource/w64p-5ue3.json";

// Function to build HTML select options and add them to the existing select element
function buildSelectOptions(data) {
    // Get the existing select element by id
    let selectElement = document.getElementById('geography');

    let sortedData = sortOnName(data);

    // Iterate over the data and create option elements
    sortedData.forEach(item => {
        let option = document.createElement('option');
        option.value = item.id;
        option.textContent = item.name;
        selectElement.appendChild(option);
    });
}

// Function to take the table object and add it to the UI
function displayTableOnPage(table) {
    // Append the generated table to the div with id "response"
    let responseDiv = document.getElementById('response');
    responseDiv.appendChild(table);
}

// Function to generate HTML table from an array of CrimeData objects and append to a div with id "response"
function generateDisplayTable(crimeDataArray) {

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    // Create table header
    let headerRow = document.createElement('tr');
    let yearHeader = document.createElement('th');
    yearHeader.textContent = 'Year';
    let indexHeader = document.createElement('th');
    indexHeader.textContent = 'Violent Crime Severity Index';
    headerRow.appendChild(yearHeader);
    headerRow.appendChild(indexHeader);
    thead.appendChild(headerRow);

    // Create table rows
    crimeDataArray.forEach(crimeData => {
        let row = document.createElement('tr');
        let yearCell = document.createElement('td');
        yearCell.textContent = crimeData.year;
        let indexCell = document.createElement('td');
        indexCell.textContent = crimeData.violentCrimeSeverityIndex;
        row.appendChild(yearCell);
        row.appendChild(indexCell);
        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
}

//take an array of data and return an array of CrimeData objects
function buildDataArray(data) {
    let crimeData = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let year = item?.year;
        let vcsi = item?.violent_crime_severity_index;
        crimeData.push(new CrimeData(year, vcsi));
    }
    return crimeData;
}

// Function to get the selected value from the select box with id "geography"
function getSelectedValue() {
    let selectElement = document.getElementById('geography');
    let selectedIndex = selectElement.selectedIndex;
    let selectedValue = selectElement.options[selectedIndex].value;
    return selectedValue;
}

// Function to sort an array of objects in descending order based on year
function sortOnYear(dataArray) {
    return dataArray.sort((a, b) => b.year - a.year);
}

// Function to sort an array of objects in descending order based on year
function sortOnName(dataArray) {
    return dataArray.sort((a, b) => a.name.localeCompare(b.name));
}

// Function to toggle the display of a div
function toggleDisplay(divId, display) {
    let div = document.getElementById(divId);
    if (display === "on") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

// Define the CrimeData constructor function
function CrimeData(year, violentCrimeSeverityIndex) {
    this.year = Number(year);
    this.violentCrimeSeverityIndex = violentCrimeSeverityIndex;
}

function clearResponse() {
    document.getElementById("response").textContent = "";
}

//get the value from the select box on the UI and add it as a URL parameter to the API Url
function buildUrl() {
    return apiUrl + "?geography=" + getSelectedValue();
}

//the main function to fetch and display data
function fetchData(url) {

    clearResponse();
    toggleDisplay('pleaseWait', 'on');
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            let dataObjects = buildDataArray(data);
            let sortedDataObjects = sortOnYear(dataObjects);
            var table = generateDisplayTable(sortedDataObjects);
            displayTableOnPage(table)
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            alert('Failed to fetch data. Check the console for details.');
        })
        .finally(() => {
            console.log("finally");
            toggleDisplay('pleaseWait','off');
        });
}

var geography_list = [
    {"name": "Nova Scotia", "id": "Nova Scotia [12]"},
    {"name": "Amherst", "id": "Amherst, Nova Scotia, municipal [12001]"},
    {"name": "Annapolis Royal", "id": "Annapolis Royal, Nova Scotia, municipal [12002]"},
    {"name": "Halifax County", "id": "Halifax County, Nova Scotia, Royal Canadian Mounted Police, rural [12003]"},
    {"name": "Berwick", "id": "Berwick, Nova Scotia, municipal [12004]"},
    {"name": "Bridgewater", "id": "Bridgewater, Nova Scotia, municipal [12006]"},
    {"name": "Eskasoni", "id": "Eskasoni, Nova Scotia, Royal Canadian Mounted Police, rural [12007]"},
    {"name": "Clark's Harbour", "id": "Clark's Harbour, Nova Scotia, municipal [12008]"},
    {"name": "Colchester County", "id": "Colchester County, Nova Scotia, Royal Canadian Mounted Police, rural [12009]"},
    {"name": "Pictou County", "id": "Pictou County, Nova Scotia, Royal Canadian Mounted Police, rural [12010]"},
    {"name": "Digby", "id": "Digby, Nova Scotia, municipal [12012]"},
    {"name": "Glace Bay", "id": "Glace Bay, Nova Scotia, municipal [12014]"},
    {"name": "Richmond County", "id": "Richmond County, Nova Scotia, Royal Canadian Mounted Police, rural [12016]"},
    {"name": "Membertou", "id": "Membertou, Nova Scotia, Royal Canadian Mounted Police, rural [12017]"},
    {"name": "Cape Breton Region", "id": "Cape Breton Region, Nova Scotia, municipal [12018]"},
    {"name": "Halifax", "id": "Halifax, Nova Scotia, municipal [12020]"},
    {"name": "Hantsport", "id": "Hantsport, Nova Scotia, municipal [12021]"},
    {"name": "Kentville", "id": "Kentville, Nova Scotia, municipal [12023]"},
    {"name": "Lunenburg", "id": "Lunenburg, Nova Scotia, municipal [12029]"},
    {"name": "Middleton", "id": "Middleton, Nova Scotia, municipal [12031]"},
    {"name": "North Sydney", "id": "North Sydney, Nova Scotia, municipal [12035]"},
    {"name": "Springhill", "id": "Springhill, Nova Scotia, municipal [12043]"},
    {"name": "Stellarton", "id": "Stellarton, Nova Scotia, municipal [12044]"},
    {"name": "Sydney", "id": "Sydney, Nova Scotia, municipal [12048]"},
    {"name": "Truro", "id": "Truro, Nova Scotia, municipal [12052]"},
    {"name": "Westville", "id": "Westville, Nova Scotia, municipal [12054]"},
    {"name": "Wolfville", "id": "Wolfville, Nova Scotia, municipal [12056]"},
    {"name": "Yarmouth", "id": "Yarmouth, Nova Scotia, municipal [12057]"},
    {"name": "New Glasgow Region", "id": "New Glasgow Region, Nova Scotia, municipal [12058]"},
    {"name": "Trenton", "id": "Trenton, Nova Scotia, municipal [12059]"},
    {"name": "Eskasoni", "id": "Eskasoni, Nova Scotia, municipal [12065]"},
    {"name": "Halifax Metropolitan Area", "id": "Halifax Metropolitan Area, Nova Scotia, municipal [12099]"},
    {"name": "Halifax (offshore)", "id": "Halifax (offshore), Nova Scotia, Royal Canadian Mounted Police, rural [12700]"},
    {"name": "Barrington", "id": "Barrington, Nova Scotia, Royal Canadian Mounted Police, rural [12702]"},
    {"name": "Annapolis County", "id": "Annapolis County, Nova Scotia, Royal Canadian Mounted Police, rural [12703]"},
    {"name": "Lunenburg County", "id": "Lunenburg County, Nova Scotia, Royal Canadian Mounted Police, rural [12704]"},
    {"name": "Cape Breton", "id": "Cape Breton, Nova Scotia, Royal Canadian Mounted Police, rural [12705]"},
    {"name": "Chester", "id": "Chester, Nova Scotia, Royal Canadian Mounted Police, rural [12706]"},
    {"name": "Lower Sackville", "id": "Lower Sackville, Nova Scotia, Royal Canadian Mounted Police, rural [12707]"},
    {"name": "Cole Harbour", "id": "Cole Harbour, Nova Scotia, Royal Canadian Mounted Police, rural [12708]"},
    {"name": "Digby - rural", "id": "Digby, Nova Scotia, Royal Canadian Mounted Police, rural [12709]"},
    {"name": "Digby - municipal", "id": "Digby, Nova Scotia, Royal Canadian Mounted Police, municipal [12711]"},
    {"name": "Parrsboro", "id": "Parrsboro, Nova Scotia, Royal Canadian Mounted Police, municipal [12712]"},
    {"name": "Tantallon", "id": "Tantallon, Nova Scotia, Royal Canadian Mounted Police, rural [12715]"},
    {"name": "Kings County", "id": "Kings County, Nova Scotia, Royal Canadian Mounted Police, rural [12720]"},
    {"name": "Kingston", "id": "Kingston, Nova Scotia, Royal Canadian Mounted Police, rural [12721]"},
    {"name": "Queens County", "id": "Queens County, Nova Scotia, Royal Canadian Mounted Police, rural [12723]"},
    {"name": "Lunenburg", "id": "Lunenburg, Nova Scotia, Royal Canadian Mounted Police, rural [12724]"},
    {"name": "Meteghan (Clare)", "id": "Meteghan (Clare), Nova Scotia, Royal Canadian Mounted Police, rural [12726]"},
    {"name": "Sheet Harbour", "id": "Sheet Harbour, Nova Scotia, Royal Canadian Mounted Police, rural [12735]"},
    {"name": "Shelburne", "id": "Shelburne, Nova Scotia, Royal Canadian Mounted Police, rural [12736]"},
    {"name": "Windsor", "id": "Windsor, Nova Scotia, Royal Canadian Mounted Police, municipal [12744]"},
    {"name": "West Hants", "id": "West Hants, Nova Scotia, Royal Canadian Mounted Police, rural [12745]"},
    {"name": "Yarmouth", "id": "Yarmouth, Nova Scotia, Royal Canadian Mounted Police, rural [12747]"},
    {"name": "Cumberland County", "id": "Cumberland County, Nova Scotia, Royal Canadian Mounted Police, rural [12750]"},
    {"name": "Antigonish County", "id": "Antigonish County, Nova Scotia, Royal Canadian Mounted Police, rural [12751]"},
    {"name": "Antigonish", "id": "Antigonish, Nova Scotia, Royal Canadian Mounted Police, municipal [12752]"},
    {"name": "Guysborough County", "id": "Guysborough County, Nova Scotia, Royal Canadian Mounted Police, rural [12760]"},
    {"name": "Stellarton", "id": "Stellarton, Nova Scotia, Royal Canadian Mounted Police, rural [12770]"},
    {"name": "Parrsboro", "id": "Parrsboro, Nova Scotia, Royal Canadian Mounted Police, rural [12775]"},
    {"name": "Pictou", "id": "Pictou, Nova Scotia, Royal Canadian Mounted Police, municipal [12776]"},
    {"name": "Pugwash", "id": "Pugwash, Nova Scotia, Royal Canadian Mounted Police, rural [12777]"},
    {"name": "Sherbrooke", "id": "Sherbrooke, Nova Scotia, Royal Canadian Mounted Police, rural [12780]"},
    {"name": "Enfield (East Hants)", "id": "Enfield (East Hants), Nova Scotia, Royal Canadian Mounted Police, rural [12782]"},
    {"name": "Tatamagouche", "id": "Tatamagouche, Nova Scotia, Royal Canadian Mounted Police, rural [12785]"},
    {"name": "Bible Hill", "id": "Bible Hill, Nova Scotia, Royal Canadian Mounted Police, rural [12786]"},
    {"name": "Arichat", "id": "Arichat, Nova Scotia, Royal Canadian Mounted Police, rural [12800]"},
    {"name": "Victoria County", "id": "Victoria County, Nova Scotia, Royal Canadian Mounted Police, rural [12802]"},
    {"name": "Chéticamp", "id": "Chéticamp, Nova Scotia, Royal Canadian Mounted Police, rural [12805]"},
    {"name": "Ingonish Beach", "id": "Ingonish Beach, Nova Scotia, Royal Canadian Mounted Police, rural [12812]"},
    {"name": "Inverness County", "id": "Inverness County, Nova Scotia, Royal Canadian Mounted Police, rural [12813]"},
    {"name": "Port Hawkesbury - rural", "id": "Port Hawkesbury, Nova Scotia, Royal Canadian Mounted Police, rural [12820]"},
    {"name": "Port Hawkesbury - municipal", "id": "Port Hawkesbury, Nova Scotia, Royal Canadian Mounted Police, municipal [12821]"},
    {"name": "St. Peters", "id": "St. Peters, Nova Scotia, Royal Canadian Mounted Police, rural [12825]"},
    {"name": "Oxford County", "id": "Oxford County, Nova Scotia, Royal Canadian Mounted Police, municipal [12833]"},
    {"name": "Yarmouth", "id": "Yarmouth, Nova Scotia, Royal Canadian Mounted Police, municipal [12834]"},
    {"name": "Canso", "id": "Canso, Nova Scotia, Royal Canadian Mounted Police, rural [12835]"},
    {"name": "Shelburne", "id": "Shelburne, Nova Scotia, Royal Canadian Mounted Police, municipal [12836]"},
    {"name": "Oxford", "id": "Oxford, Nova Scotia, Royal Canadian Mounted Police, rural [12837]"},
    {"name": "Pictou", "id": "Pictou, Nova Scotia, Royal Canadian Mounted Police, rural [12838]"},
    {"name": "Truro", "id": "Truro, Nova Scotia, Royal Canadian Mounted Police, rural [12840]"},
    {"name": "Sydney", "id": "Sydney, Nova Scotia, Royal Canadian Mounted Police, rural [12841]"},
    {"name": "Halifax", "id": "Halifax, Nova Scotia, Royal Canadian Mounted Police, rural [12843]"},
    {"name": "Elmsdale Hants Co.", "id": "Elmsdale Hants Co., Nova Scotia, Royal Canadian Mounted Police, rural [12844]"},
    {"name": "Musquodoboit", "id": "Musquodoboit, Nova Scotia, Royal Canadian Mounted Police, rural [12845]"},
    {"name": "Indian Brook", "id": "Indian Brook, Nova Scotia, Royal Canadian Mounted Police, rural [12849]"},
    {"name": "Millbrook", "id": "Millbrook, Nova Scotia, Royal Canadian Mounted Police, rural [12850]"},
    {"name": "Halifax (Division Headquarters 1)", "id": "Halifax (Division Headquarters 1), Nova Scotia, Royal Canadian Mounted Police [12959]"},
    {"name": "Halifax (Division Headquarters 2)", "id": "Halifax (Division Headquarters 2), Nova Scotia, Royal Canadian Mounted Police [12970]"},
    {"name": "Port of Halifax", "id": "Port of Halifax, Nova Scotia, Ports Canada Police [12980]"},
    {"name": "Canadian National Railway Police", "id": "Canadian National Railway Police, Nova Scotia [12990]"}
];
