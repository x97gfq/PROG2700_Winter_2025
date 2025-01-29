/*
download and install NodeJs
set script execution policy if necessary: Set-ExecutionPolicy Unrestricted -Scope CurrentUser
npm install node-fetch
*/

import fetch from 'node-fetch';

const askChatGPT = async () => {
  const url = 'https://api.openai.com/v1/chat/completions';
  const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

  const requestBody = {
    model: 'gpt-3.5-turbo', // Replace with the appropriate model
    messages: [{ role: 'user', content: 'Why did the chicken cross the road?' }],
    max_tokens: 50
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("data.choices", data.choices);
    console.log('Answer:', data.choices[0].message.content.trim());
  } catch (error) {
    console.error('Error:', error);
  }
};

askChatGPT();