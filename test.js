const apiUrl = 'https://api.mymemory.translated.net/get';
const sourceLanguageCode = 'en'; // English
const targetLanguageCode = 'gu'; // Gujarati

var speechContent = '';
var resultElement = document.getElementById('result');

var recognition = new webkitSpeechRecognition();
recognition.lang = window.navigator.language;
recognition.interimResults = true;

recognition.addEventListener('result', (event) => {
    const result = event.results[event.results.length - 1][0].transcript;
    resultElement.textContent = result;
    speechContent = result;
});

document.getElementById('start').addEventListener('click', () => {
    console.log('Start button clicked');
    recognition.start();
});

document.getElementById('stop').addEventListener('click', () => {
    console.log('Stop button clicked');
    recognition.stop();
    console.log('Speech Content:', speechContent);

    translateText(speechContent, sourceLanguageCode, targetLanguageCode)
        .then((translatedText) => {
            console.log(`Original Text: ${speechContent}`);
            console.log(`Translated Text: ${translatedText}`);
        })
        .catch((error) => {
            console.error('Translation error:', error.message);
        });
});

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