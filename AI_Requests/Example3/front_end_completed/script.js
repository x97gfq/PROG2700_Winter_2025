document.getElementById('submitBtn').addEventListener('click', function() {
    const message = document.getElementById('message').value;
    const errorElement = document.getElementById('error');
    errorElement.textContent = '';

    if (!message) {
        errorElement.textContent = 'Message cannot be empty.';
        return;
    }

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
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message.content);
        document.getElementById('response').textContent = data.message.content;
    })
    .catch(error => {
        errorElement.textContent = 'An error occurred: ' + error.message;
    });
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('message').value = '';
    document.getElementById('response').textContent = '';
    document.getElementById('error').textContent = '';
});