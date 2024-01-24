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

const sourceLanguageCode = 'en';
const targetLanguageCode = 'gu';

var speechContent;

var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var resultElement = document.getElementById('result');

var recognition = new webkitSpeechRecognition();

recognition.lang = window.navigator.language;
recognition.interimResults = true;

startButton.addEventListener('click', () => {
    console.log('start btn clicked')
    recognition.start();
});

stopButton.addEventListener('click', () => {
    console.log('stop btn clicked')
    recognition.stop();
    console.log(speechContent);

    translateText(speechContent, sourceLanguageCode, targetLanguageCode)
        .then((translatedText) => {
            console.log(`Original Text: ${speechContent}`);
            console.log(`Translated Text: ${translatedText}`);
        })
        .catch((error) => {
            console.error('Translation error:', error.message);
        });
});

recognition.addEventListener('result', (event) => {
    const result = event.results[event.results.length - 1][0].transcript;
    resultElement.textContent = result;
    speechContent = result;
});
