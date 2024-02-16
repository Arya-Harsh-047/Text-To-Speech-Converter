//The SpeechSynthesisUtterance interface of the Web Speech API represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)

let speech = new SpeechSynthesisUtterance();  

let SpeakButton = document.querySelector('#speakBtn');
let textArea = document.querySelector('textarea');
let langOption  =document.querySelector('select');
let voices = [];

SpeakButton.addEventListener('click',()=>{

    //connect text in select to speech
    speech.text = textArea.value;

    //convert text in textarea into  speech 
    window.speechSynthesis.speak(speech);
})

//Language option in Speech Voice

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();  //this getVoices provide all the voices available on the device into the voices array

    // default value of text speech 
    speech.voice = voices[0]; 

    //for all option in voices[] we put it in dropdown

    voices.forEach((voice, idx) => (langOption.options[idx] = new Option(voice.name , idx)));
    
    /*
    // voices.forEach((voice, idx) => {
    //    return (langOption.options[idx] = new Option(voice.name , idx))
    // });

    // console.log(langOption);
    */
};

// now on select any language change  the voice of speech

langOption.addEventListener('change', ()=>{
    speech.voice = voices[langOption.value];
});
