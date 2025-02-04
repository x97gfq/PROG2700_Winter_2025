document.getElementById('submitBtn').addEventListener('click', function() {

    const msg = document.getElementById('message').value;

    if (msg === '') {
        alert('Message cannot be empty.');
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

});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('message').value = '';
    document.getElementById('response').textContent = '';
});