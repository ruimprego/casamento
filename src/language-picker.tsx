import React from "react";
import pt from './assets/pt.svg';
import it from './assets/it.svg';
import './language-picker.css';
import translate from "./translate";
import type { TranslationLanguages } from './translate';

function LanguagePicker() {
    function setLanguage<Key extends keyof TranslationLanguages>(lang: Key) {
        translate.setOptions({
            language: lang,
            fallback: 'pt'
        })
    }

    const selectedLanguage = translate.getOptions().language;

    return (
      <div className="localization-container">
        <img className={`country-flag ${selectedLanguage === 'pt' ? 'active' : ''}`} src={pt} alt="Português" onClick={() => setLanguage('pt')} />
        <img className={`country-flag ${selectedLanguage === 'it' ? 'active' : ''}`} src={it} alt="Italiano" onClick={() => setLanguage('it')} />
      </div>
    )
}

export default LanguagePicker;
