if (navigator && navigator.language || navigator.browserLanguage) {
  var language = navigator.language || navigator.browserLanguage;

  // We use the window.location.origin because certain links will
  // have query string parameters attached.
  // For example, we want hogarjesusdenazaret.org?fbclid=<fb_id>
  // to redirect successfully to our site in English or Spanish
  if (language === 'es' || language.indexOf('es-') !== -1) {
    window.location.replace(window.location.origin + '/es');
  }

  if (language === 'en' || language.indexOf('en-') !== -1) {
    window.location.replace(window.location.origin + '/en');
  }
}
