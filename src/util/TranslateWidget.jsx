import React, { useEffect } from 'react';

const TranslateWidget = () => {
  useEffect(() => {
    // Load the Google Translate script
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en', // Set your default language here
        includedLanguages: 'en,hi', // Include only English and Hindi
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
      }, 'google_translate_element');
    };

    window.googleTranslateElementInit = googleTranslateElementInit;
    addGoogleTranslateScript();
  }, []);

  return (
    <div>
      <div id="google_translate_element"></div>
      {/* <style>
        {`
          #google_translate_element {
            display: inline-block;
            margin: 20px;
          }
        `}
      </style> */}
    </div>
  );
};

export default TranslateWidget;
