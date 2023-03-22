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
  const response = await fetch("http://localhost:3000/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  if (response.ok) {
    const data = await response.json();
    return data.generatedText;
  } else {
    throw new Error("An error occurred while generating text.");
  }
}
