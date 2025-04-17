import React, { useState } from "react";
import axios from "axios";

const Translator = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("[Translated text will be displayed here...]");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("hi");

  const languages = ["English", "French", "Gujarati", "Hindi", "Arabic", "Marathi"];
  const languageCodes = {
    English: "en",
    French: "fr",
    Gujarati: "gu",
    Hindi: "hi",
    Arabic: "ar",
    Marathi: "mr",
  };

  const translateText = async () => {
    try {
      const response = await axios.post("/translate", {
        text: inputText,
        sourceLanguage: languageCodes[sourceLanguage],
        targetLanguage: languageCodes[targetLanguage],
      });
      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error("Error translating text:", error.message);
      setTranslatedText("Error: Unable to translate text.");
    }
  };

  return (
    <div className="App">
      <h1>Language Translator</h1>
      <div>
        <div>
          <label>Source Language:</label>
          <select value={sourceLanguage} onChange={(e) => setSourceLanguage(e.target.value)}>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Target Language:</label>
          <select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
        <textarea
          placeholder="Type something..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <button onClick={translateText}>Translate</button>
        <div>
          <h2>Translated Text:</h2>
          <p>{translatedText}</p>
        </div>
      </div>
    </div>
  );
};

export default Translator;