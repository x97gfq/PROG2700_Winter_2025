//run "npm i" to install all packages
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Use the CORS middleware
app.use(cors());

// Use body-parser middleware
app.use(bodyParser.json());

const apiKey = 'YOUR_API_KEY_GOES_HERE'; // Replace with your actual API key

//default request
app.get('/', async (req, res) => {
    res.send(new Date());
});

let chatHistory = [];

//NEW
app.post('/chatbot', async (req, res) => {
    //console.log("req",req.body);

    //get the prompt from the querystring
    var msg = req.body.message;
    console.log(msg);
    var clientId = req.body.clientId;

    const url = 'https://api.openai.com/v1/chat/completions';

    let newMsg = { role: 'user', content: msg, clientId: clientId };

    const requestBody = {
        model: 'gpt-3.5-turbo', // Replace with the appropriate model
        messages: [],
        max_tokens: 250
    };

    for (let i = 0; i < chatHistory.length; i++) {
        var historyItem = chatHistory[i];
        if (parseInt(clientId) === parseInt(historyItem.clientId)) {
            requestBody.messages.push(historyItem);
        }
    }

    chatHistory.push(newMsg);
    requestBody.messages.push(newMsg);

    console.log("requestBody.messages", requestBody.messages);

    try {
        const response = await axios.post(url, requestBody, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                }
            }
        );

        const data = response.data;
        //console.log("data.choices[0].message.content", data.choices[0].message.content);

        let newResponse = { role: "assistant", content: data.choices[0].message.content, clientId: clientId };
        chatHistory.push(newResponse);

        res.json(data.choices[0]);

    } catch (error) {
        console.error('Error:', error);
    }

});


app.get('/chatbot/:message', async (req, res) => {

    //get the prompt from the querystring
    var msg = req.params.message;
    console.log(msg);

    const url = 'https://api.openai.com/v1/chat/completions';

    const requestBody = {
        model: 'gpt-3.5-turbo', // Replace with the appropriate model
        messages: [{ role: 'user', content: msg }],
        max_tokens: 50
    };

    try {
        const response = await axios.post(url, requestBody, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                }
            }
        );

        const data = response.data;
        //console.log("data.choices", data.choices);

        res.json(data.choices[0]);

    } catch (error) {
        console.error('Error:', error);
    }

});

app.listen(3001, () => {
  console.log('Server running at http://localhost:3001/');
});

