
document.getElementById('fetchButton').addEventListener('click', fetchData);

let apiUrl = "https://data.novascotia.ca/resource/w64p-5ue3.json?geography=Nova%20Scotia%20[12]";

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

function drawChart(data) {

    let labelArray = [];
    let dataArray = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        labelArray.push(item.year);
        dataArray.push(item.total_crime_severity_index);
    }

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labelArray,
            datasets: [{
                label: 'Violent Crime Index',
                data: dataArray,
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