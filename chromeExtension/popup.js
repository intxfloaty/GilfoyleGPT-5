const OPENAI_API_KEY = "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"
const apiUrl = 'https://api.openai.com/v1/chat/completions';


document.getElementById('generate').addEventListener('click', async () => {
  const prompt = document.getElementById('prompt').value;
  if (!prompt) {
    alert('Please enter a prompt.');
    return;
  }

  // Call the LLM API and get the generated text
  const generatedText = await callLLMApi(prompt);
  document.getElementById('result').value = generatedText;
});


async function callLLMApi(prompt) {

  const requestBody = {
  model: 'gpt-3.5-turbo',
  messages: [{role: 'user', content: prompt}],
  max_tokens: 150,
  temperature: 0.7
};

  const response = await fetch("https://api.openai.com/v1/chat/completions", 
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    
    body: JSON.stringify(requestBody),
  });

  if (response.ok) {
    const data = await response.json();
    return data.choices[0].message.content;
  } else {
    throw new Error("An error occurred while generating text.");
  }
}
