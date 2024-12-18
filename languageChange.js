document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector('.language-change');
    const langs = ['pt','en'];

    var currentLang = langs.indexOf(document.body.lang);
    
    btn.addEventListener('click', () => 
    {
        currentLang = ++currentLang % langs.length
        document.body.lang = langs[currentLang]
    });
});
