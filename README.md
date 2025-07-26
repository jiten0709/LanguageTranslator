# LinguaFlow - Language Translator

LinguaFlow is a simple yet powerful web-based application that allows users to translate text between multiple languages in real-time. It supports both typed text input and speech-to-text for a seamless translation experience.

## ✨ Features

- **Text Translation**: Instantly translate text between a wide variety of supported languages.
- **Speech Recognition**: Use your microphone to speak and have your words automatically transcribed and translated.
- **Dynamic Language Selection**: Easily select and swap source and target languages from dropdown menus.
- **Copy & Speak**: One-click buttons to copy the translated text to your clipboard or listen to it being spoken.
- **Real-Time**: Get translations as you type or speak.

## 🛠️ Technologies Used

- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript (ES6+)
  - [Font Awesome](https://fontawesome.com/) for icons
- **Backend**:
  - Node.js with Express.js
- **API**:
  - [MyMemory Translation API](https://mymemory.translated.net/) for translation services.
  - Web Speech API (`webkitSpeechRecognition`) for voice input.

## 🚀 Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.
- A modern web browser that supports the Web Speech API (e.g., Google Chrome).

### Installation & Setup

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/jiten0709/LanguageTranslator.git
    cd LanguageTranslator
    ```

2.  **Create a env file in backend dir**

    ```sh
    cp .env.example .env
    ```

3.  **Update the config.js file in frontend/public dir accordingly**

4.  **Set up and run the backend server:**
    Open a terminal window and run:

    ```sh
    cd backend
    npm install
    node api.js
    ```

    The backend server will start, typically on `http://localhost:8080`.

5.  **Set up and run the frontend:**
    Open a **new** terminal window and run:
    ```sh
    cd frontend
    npm install
    npm start
    ```
    This will usually open the application automatically in your default web browser at `http://localhost:3000`.

## Usage

1.  Open the application in your web browser.
2.  Select the source language (the language you are translating from).
3.  Select the target language (the language you want to translate to).
4.  **For text input**: Type your text into the left-hand text area. The translation will appear on the right.
5.  **For speech input**: Click the microphone icon, grant microphone permissions if prompted, and start speaking. Your speech will be converted to text and translated.

## Built with ❤️ by Jiten!
