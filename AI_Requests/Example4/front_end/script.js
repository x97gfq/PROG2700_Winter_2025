
document.getElementById('submitBtn').addEventListener('click',function(){

    let msg = document.getElementById('message').value;

    document.getElementById('message').value = '';

    if (msg === '') {
        alert('you must enter a message');
        return;
    }
    
    fetch('http://localhost:3001/chatbot', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ message : msg })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').textContent = data.message.content;
    })

});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('message').value = '';
    document.getElementById('response').textContent = '';
});