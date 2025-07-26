import express from 'express';
import axios from 'axios';
import cors from 'cors';
import 'dotenv/config'
import https from 'https';

const app = express();
const port = process.env.BACKEND_PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all requests

// Translation Function
const apiUrl = process.env.TRANSLATOR_API_KEY;

// Home Route
app.get('/', (req, res) => {
  res.send('Language Translator API is running!');
});

async function translateText(text, sourceLanguage, targetLanguage) {
  try {
    const httpsAgent = new https.Agent({
      rejectUnauthorized: false, // Disable SSL certificate verification
    });

    const params = {
      q: text,
      langpair: `${sourceLanguage}|${targetLanguage}`,
    };

    // Construct the full URL for logging
    const url = `${apiUrl}?q=${encodeURIComponent(params.q)}&langpair=${encodeURIComponent(params.langpair)}`;
    console.log(`Generated URL: ${url}`); // Log the generated URL

    const response = await axios.get(apiUrl, {
      params,
      httpsAgent, // Add the custom HTTPS agent
    });

    return response.data.responseData.translatedText;
  } catch (error) {
    console.error('Error translating text:', error.message);
    throw new Error('Translation failed');
  }
}

// API Endpoint for Translation
app.post('/translate', async (req, res) => {
  const { text, sourceLanguage, targetLanguage } = req.body;

  if (!text || !sourceLanguage || !targetLanguage) {
    return res.status(400).send({ error: 'Missing required fields: text, sourceLanguage, or targetLanguage' });
  }

  try {
    const translatedText = await translateText(text, sourceLanguage, targetLanguage);
    res.status(200).send({ translatedText });
  } catch (error) {
    console.error('Error during translation:', error.message);
    res.status(500).send({ error: 'Failed to translate text' });
  }
});

// Test Route for Translation
app.get('/test', async (req, res) => {

  const text = "Hello, how are you?";
  const sourceLanguage = "en";
  const targetLanguage = "hi";

  if (!text || !sourceLanguage || !targetLanguage) {
    return res.status(400).send({ error: 'Missing required query parameters: text, sourceLanguage, or targetLanguage' });
  }

  try {
    const translatedText = await translateText(text, sourceLanguage, targetLanguage);
    res.status(200).send({ translatedText });
  } catch (error) {
    console.error('Error during translation:', error.message);
    res.status(500).send({ error: 'Failed to translate text' });
  }
});

// Start the Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});