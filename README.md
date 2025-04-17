# Language Translator

A web-based application that allows users to translate text between multiple languages. The application supports both text input and speech recognition for translation.

## Features

- **Text Translation**: Translate text between supported languages.
- **Speech Recognition**: Use your microphone to input text via speech and translate it.
- **Dynamic Language Selection**: Choose source and target languages dynamically.
- **Real-Time Translation**: Translate text or speech input in real-time.

## Technologies Used

- **Frontend**:
  - HTML, CSS, JavaScript
  - [Font Awesome](https://fontawesome.com/) for icons
  - [Axios](https://axios-http.com/) for API requests
- **Backend**:
  - Node.js with Express.js
  - [MyMemory Translation API](https://mymemory.translated.net/) for translation
- **Speech Recognition**:
  - `webkitSpeechRecognition` for capturing speech input

## Installation

### Prerequisites
- Node.js installed on your system
- A modern web browser (e.g., Chrome)

### Steps
1. Clone the repository:
   ```
   git clone <repository-url>
   cd languageTranslator
   ```

2. Install backend dependencies and start the server:
```
cd backend
npm install
node api.js
```

3. Install frontend dependencies and start the server:
```
cd ../frontend
npm install
npm start
```