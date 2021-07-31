var btnTranslate_english = document.querySelector("#btn-translate-english");
// var btnTranslate_morse = document.querySelector("#btn-translate-morse");
// var btnTranslate_audio = document.querySelector("#btn-translate-audio");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURLtranseng = "https://api.funtranslations.com/translate/morse.json"
// var serverURLtransmorse = "http://api.funtranslations.com/translate/morse2english.json"
// var serverURLa = "http://api.funtranslations.com/translate/morse2english.json"

function getTranslationURL(input) {
    // if((input > 47 && input < 58) || (input > 64 && input < 91) ||  (input > 96 && input < 123))
    // {
        return serverURLtranseng + "?" + "text=" + input
    // }
    // else{
    //     return serverURLtransmorse + "?" + "text=" + input
    // }
    
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something wrong with server! Try again after some time")
}


function clickHandler() {
    var inputText = txtInput.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
           })
        .catch(errorHandler)
};

btnTranslate_english.addEventListener("click", clickHandler)
// btnTranslate_morse.addEventListener("click", clickHandler)