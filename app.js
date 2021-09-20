var translationURL = "https://api.funtranslations.com/translate/minion.json";
var input_text = document.querySelector("#textarea-input");
var output_div = document.querySelector("#output");
var btn_translate = document.querySelector("#translate_button");

function triggerTranslate(){
    fetchTranslatedData(input_text.value);
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time");
}

function fetchTranslatedData(input_text){
    var fetchUrl = translationURL + "?text=" + input_text;

    fetch(fetchUrl)
    .then(response => response.json())
    .then(json=> {
        var translated_text = json.contents.translated;
        output_div.innerText = translated_text;
    })
    .catch(errorHandler)
}

btn_translate.addEventListener("click", triggerTranslate)