/*
This setup includes:
A basic dark-mode styled HTML page.
A centered gray div for content.
A button that triggers a JavaScript function when clicked.
The JavaScript function uses fetch() to retrieve data from a 
sample URL and handles errors or responses.
*/
document.getElementById('fetchButton').addEventListener('click', fetchData);

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            document.getElementById("response").textContent = data.title;
            //alert('Data fetched successfully! Check the console for details.');
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            alert('Failed to fetch data. Check the console for details.');
        });
}
/*
The fetch() function returns a Promise, which allows you to handle 
asynchronous operations. 

(A Promise in JavaScript is an object representing the eventual 
completion or failure of an asynchronous operation. It allows you 
to attach handlers for the asynchronous operation's success (then) 
or failure (catch), enabling cleaner and more manageable asynchronous code.)

(Asynchronous code allows tasks to run independently of the main program 
flow, enabling other operations to continue without waiting for the task 
to complete. This is useful for tasks like network requests, where waiting 
would otherwise block the execution of other code.)

The two then() methods are used to handle 
the different stages of the Promise:

First then(): This handles the response from the fetch() request. 
When the Promise is resolved, it means the HTTP request has completed, 
and the response is available. The first then() receives the response 
object. Here, you typically check if the response is okay (e.g., response.ok) 
and then parse the response data (e.g., response.json()).

Second then(): This handles the parsed data from the first then(). 
Once the response data is parsed (e.g., converted to JSON), the 
second then() receives this parsed data and allows you to work with it.

By chaining these then() methods, you can handle the different stages 
of the asynchronous operation in a clear and structured way. The first 
then() deals with the raw response, and the second then() deals with 
the processed data.

If there's an error at any stage, the catch() method at the end handles it.
*/