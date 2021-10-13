var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#txt-output");


var serverURL = "https://api.funtranslations.com/translate/shakespeare.json"


function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something went wrong with the server! try again later")
}

function clickHandler(){
    
    var inputText = txtInput.value; //taking input

    //calling server for processing
    fetch(getTranslationURL(inputText)).then(Response => Response.json()).then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText; //output
    }).catch(errorHandler)
    
};

btnTranslate.addEventListener("click",clickHandler);


