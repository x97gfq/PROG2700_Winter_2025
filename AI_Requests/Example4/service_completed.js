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

const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your actual API key

//added this
let chatHistory = [];

//default request
app.get('/', async (req, res) => {
    res.send(new Date());
});

//NEW
app.post('/chatbot', async (req, res) => {
    //console.log("req",req.body);

    //get the prompt from the querystring
    //modified
    var msg = req.body.message;
    var clientId = req.body.clientId;

    var newMsg = { role: "user", content: msg, clientId: clientId };
    //console.log("**************new message:",newMsg);

    const url = 'https://api.openai.com/v1/chat/completions';

    //build the requestBody necessary for openai's api
    const requestBody = {
        model: 'gpt-3.5-turbo', // Replace with the appropriate model
        messages: [],
        max_tokens: 250
    };

    //find previous messages from the same clientId, add them to the reuqestBody.messages
    for (var i = 0; i < chatHistory.length; i++) {
        var history = chatHistory[i];
        if (history.clientId == clientId) {
            //console.log("**********found a match in history");
            requestBody.messages.push(history);
        }
    }

    //add the new message to the history
    chatHistory.push(newMsg);

    //then add the new msg
    requestBody.messages.push(newMsg)
    //console.log("requestBody.messages", requestBody.messages);

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

        //added - add the assistant response to the history, with client id.
        var newHistoryMsg = { 
            role: 'assistant', 
            content: data.choices[0].message.content, 
            clientId: clientId 
        };

        //add the assistant's response to the chat history
        chatHistory.push(newHistoryMsg);

        //response to the client
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

