if (navigator && navigator.language || navigator.browserLanguage) {
  var language = navigator.language || navigator.browserLanguage;

  if (language === 'es' || language.indexOf('es-') !== -1) {
    window.location.replace(window.location.href + 'es');
  }

  if (language === 'en' || language.indexOf('en-') !== -1) {
    window.location.replace(window.location.href + 'en');
  }
}
