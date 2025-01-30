const express = require('express');
const axios = require('axios');
const app = express();

app.get('/chatbot/:message', async (req, res) => {

    //get the prompt from the querystring
    var msg = req.params.message;
    console.log(msg);

    const url = 'https://api.openai.com/v1/chat/completions';
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

    //const url = "https://chat.freedomgpt.com/api/v1/chat/completions"
    //const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

    const requestBody = {
        //model: 'deepseek-r1',
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
        //console.log('Answer:', data.choices[0].message.content.trim());
        res.json(data.choices[0]);

    } catch (error) {
        console.error('Error:', error);
    }

});

app.listen(3001, () => {
  console.log('Server running at http://localhost:3001/');
});

