
document.getElementById('submitBtn').addEventListener('click',function(){

    let msg = document.getElementById('message').value;

    document.getElementById('message').value = '';

    if (msg === '') {
        alert('you must enter a message');
        return;
    }
    
    document.getElementById('pleasewait').style.display = "inline";

    fetch('http://localhost:3001/chatbot', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ message : msg, clientId: document.getElementById('clientId').value })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').textContent = data.message.content;
        document.getElementById('pleasewait').style.display = "none";
    })
    .catch(error => {
        let errorMessage = error.message;
        document.getElementById('error').textContent = errorMessage;
        document.getElementById('pleasewait').style.display = "none";
    });

});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('message').value = '';
    document.getElementById('response').textContent = '';
});

document.addEventListener('DOMContentLoaded', function(){
    let randomNumber = Math.floor(Math.random() * 1000000) +1;
    document.getElementById('clientId').value = randomNumber;
});