module.exports = function(config) {
    config.set({
      basePath: '', // Specifică calea de bază pentru rezolvarea tuturor modelelor de fișiere
  
      frameworks: ['jasmine'], // Specifică framework-urile de testare utilizate
  
      files: [
        'tests/**.spec.js' // Lista de fișiere sau modele de fișiere care vor fi încărcate în browser
      ],
  
      exclude: [], // Lista de fișiere sau modele de fișiere care trebuie excluse
  
      preprocessors: {}, // Preprocesori care se aplică fișierelor înainte de a fi servite browserului
  
      reporters: ['progress'], // Reporter-ul utilizat pentru a afișa rezultatele testelor
  
      port: 9876, // Portul serverului web Karma
  
      colors: true, // Activează sau dezactivează culorile în output (reportere și loguri)
  
      logLevel: config.LOG_INFO, // Nivelul de logare (LOG_DISABLE, LOG_ERROR, LOG_WARN, LOG_INFO, LOG_DEBUG)
  
      autoWatch: true, // Activează sau dezactivează observarea fișierelor și executarea testelor la fiecare modificare
  
      browsers: ['Chrome'], // Browserele care vor fi lansate pentru rularea testelor
  
      singleRun: false, // Dacă este true, Karma capturează browserele, rulează testele și se închide
  
      concurrency: Infinity // Numărul de instanțe de browser care pot fi pornite simultan
    });
  }
  