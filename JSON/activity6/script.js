
document.getElementById('fetchButton').addEventListener('click', fetchData);

//
//#1 construct your URL with a basic filter (including ?key=value)
//
let apiUrl = "https://jsonplaceholder.typicode.com/posts";

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
            //
            // #2
            // Parse / process your data response to construct
            // something informative, and display it in the 
            // response div (index.html).
            //
            //

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            alert('Failed to fetch data. Check the console for details.');
        });
}
