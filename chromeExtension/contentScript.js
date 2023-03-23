const promptPrefix = '/prompt:';
const generatePrefix = '/gen';

document.addEventListener('input', async (event) => {
  const target = event.target;
  if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
    const value = target.value;
    const promptIndex = value.lastIndexOf(promptPrefix);
    
    if (promptIndex !== -1) {
      const genIndex = value.indexOf(generatePrefix, promptIndex + promptPrefix.length);
      
      if (genIndex !== -1) {
        const prompt = value.slice(promptIndex + promptPrefix.length, genIndex).trim();
        if (prompt) {
          const generatedText = await callLLMApi(prompt);
          const newValue = value.slice(0, promptIndex) + generatedText + value.slice(genIndex + generatePrefix.length);
          target.value = newValue;
        }
      }
    }
  }
});

async function callLLMApi(prompt) {
  // Replace this function with the actual implementation for calling the LLM API
  // For now, it simply returns the prompt as the generated text
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(prompt);
    }, 500);
  });
}
