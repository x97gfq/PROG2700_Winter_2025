
document.getElementById('submitBtn').addEventListener('click', function() {
    const message = document.getElementById('message').value;
    //added
    const clientId = document.getElementById('clientId').value;

    //added error handling
    const errorElement = document.getElementById('error');
    errorElement.textContent = '';

    //modified this
    if (!message) {
        errorElement.textContent = 'Message cannot be empty.';
        return;
    }

    //added this
    if (message.length > 1000) {
        errorElement.textContent = 'Message cannot exceed 1000 characters.';
        return;
    }

    document.getElementById('message').value = '';

    fetch('http://localhost:3001/chatbot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        //modified this
        body: JSON.stringify({ message: message, clientId: clientId })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message.content);
        document.getElementById('response').textContent = data.message.content; //formatting?
    })
    //added this
    .catch(error => {
        errorElement.textContent = 'An error occurred: ' + error.message;
    });
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('message').value = '';
    document.getElementById('response').textContent = '';
    //added this
    document.getElementById('error').textContent = '';
});

//added this
document.addEventListener('DOMContentLoaded', function() {

    var clientId = Math.floor(Math.random() * 1000000) + 1;
    document.getElementById("clientId").value = clientId;

});
