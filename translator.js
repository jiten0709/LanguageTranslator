const axios = require('axios');

const apiUrl = 'https://api.mymemory.translated.net/get';

async function translateText(text, sourceLanguage, targetLanguage) {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        q: text,
        langpair: `${sourceLanguage}|${targetLanguage}`,
      },
    });

    const translatedText = response.data.responseData.translatedText;
    return translatedText;
  } catch (error) {
    if (axios.isAxiosError(error)) {
        const axiosError = error;
        console.error('Error translating text: ', axiosError.message);
    } else {
        console.error('Unexpected error: ', error);
    }
    throw error;
  }
}

// Example usage
const textToTranslate = 'translated text will be displayed here';
const sourceLanguageCode = 'en'; // English
const targetLanguageCode = 'gu'; 

translateText(textToTranslate, sourceLanguageCode, targetLanguageCode)
  .then((translatedText) => {
    console.log(`Original Text: ${textToTranslate}`);
    console.log(`Translated Text: ${translatedText}`);
  })
  .catch((error) => {
    console.error('Translation error:', error.message);
  });
