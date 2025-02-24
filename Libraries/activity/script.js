
document.getElementById('fetchButton').addEventListener('click', fetchData);

/*
rework this example using another data source, suggested:
https://data.novascotia.ca/Business-and-Industry/Film-and-Television-Production-Incentive-Fund-Acti/upw3-yx9z/about_data
*/


//https://data.novascotia.ca/Business-and-Industry/Fish-Buyer-Purchase-Data-by-Port/j9j2-cpn4/about_data

let apiUrl = "https://data.novascotia.ca/resource/j9j2-cpn4.json?port=Shelburne";

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
            drawChart(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            alert('Failed to fetch data. Check the console for details.');
        });
}

var ctx = document.getElementById('myChart').getContext('2d');
var myChart;

function drawChart(data) {

    let labelArray = [];
    let dataArrayDollars = [];
    let dataArrayKilograms = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        labelArray.push(item.year);
        dataArrayDollars.push(item.purchase_total);
        dataArrayKilograms.push(item.kgs);
    }

    if (myChart) {
        myChart.destroy();
    }
    
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labelArray,
            datasets: [{
                label: 'Purchase Total',
                data: dataArrayDollars,
                borderWidth: 1
            },
            {
                label: 'Kilograms',
                data: dataArrayKilograms,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}