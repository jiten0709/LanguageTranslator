// import axios from "axios";

var sourceLanguageCode = 'en'; // English
var targetLanguageCode = 'hi';

var speechContent;

var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var resultElement = document.getElementById('resultElement');
var inputElement = document.getElementById('inputElement');



const apiUrl = 'https://api.mymemory.translated.net/get';

const languages = [
    "English", "French", "Hindi", "Gujarati", "Arabic",
];



var recognition = new webkitSpeechRecognition();

function langpairFind() {
    console.log('checking');
    var il = document.getElementById("inputLanguage");
    var ol = document.getElementById("outputLanguage");

    switch (il) {
        case 'English':
            sourceLanguageCode = 'en';
            break;
        case 'French':
            sourceLanguageCode = 'fr';
            break;
        case 'Gujarati':
            sourceLanguageCode = 'gu';
            break;
        case 'Hindi':
            sourceLanguageCode = 'hi';
            break;
        case 'Marathi':
            sourceLanguageCode = 'ma';
            break;
        case 'Arabic':
            sourceLanguageCode = 'ar';
            break;

        default:
            break;
    }
    switch (ol) {
        case 'English':
            targetLanguageCode = 'en';
            break;
        case 'French':
            targetLanguageCode = 'fr';
            break;
        case 'Gujarati':
            targetLanguageCode = 'gu';
            break;
        case 'Hindi':
            targetLanguageCode = 'hi';
            break;
        case 'Marathi':
            targetLanguageCode = 'ma';
            break;
        case 'Arabic':
            targetLanguageCode = 'ar';
            break;

        default:
            break;
    }
    translateText(inputElement.textContent, il, ol);
}


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
// const textToTranslate = 'translated text will be displayed here';







recognition.lang = window.navigator.language;
recognition.interimResults = true;

startButton.addEventListener('click', startSpeech);
stopButton.addEventListener('click', stopSpeech)

function startSpeech() {



    // alert('MIC IS NOW LISTENING')
    console.log('start btn clicked')
    recognition.start();
    // var classes = startButton.classList;
    startButton.classList.add('hidden');
    stopButton.firstChild.classList.remove('hidden');
    // startButton.innerHTML  = '<svg  class=" self-center px-2 text-sm text-gray-800 dark:text-black cursor-pointer" height="2.54em" width="2.54em" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="m400 32h-352c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-352c0-26.5-21.5-48-48-48z"/></svg>';
    // console.log(startButton.attributes);
    // startButton.set;
    // console.log(startButton.id);



}

// function start() {
//         console.log('start btn clicked');
//         recognition.start(); 

// }

function stopSpeech() {
    console.log('stop btn clicked')
    recognition.stop();
    console.log(speechContent);

    translateText(speechContent, sourceLanguageCode, targetLanguageCode)
        .then((translatedText) => {
            console.log(`Original Text: ${speechContent}`);
            console.log(translatedText);
            resultElement.innerHTML = translatedText;
        })
        .catch((error) => {
            console.error('Translation error:', error.message);
        });

    startButton.classList.remove('hidden');
    stopButton.firstChild.classList.add('hidden');
}

// stopButton.addEventListener('click', () => {
//     // alert('MIC IS NOW OFF')

// });

recognition.addEventListener('result', (event) => {
    const result = event.results[event.results.length - 1][0].transcript;
    inputElement.textContent = result;
    speechContent = result;
    // console.log('i listened: ', result)
});


// await SpeechToText()


// ----------------- SPEECH TO TEXT ------------------------