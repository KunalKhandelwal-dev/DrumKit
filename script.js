const instruments = [['tom1'],['tom2'], ['tom3'], ['tom4'], ['crash'],['snare'], ['kick']];
const sounds = {
    tom1:'./sounds/tom1.mp3',
    tom2:'./sounds/tom2.mp3',
    tom3:'./sounds/tom3.mp3',
    tom4:'./sounds/tom4.mp3',
    crash:'./sounds/crash.mp3',
    kick:'./sounds/kick.mp3',
    snare:'./sounds/snare.mp3',
}
const keyMapwithaudio = {
    g:'./sounds/tom3.mp3',
    d:'./sounds/tom1.mp3',
    j:'./sounds/crash.mp3',
    a:'./sounds/kick.mp3',
    s:'./sounds/snare.mp3',
    f:'./sounds/tom2.mp3',
    h:'./sounds/tom4.mp3',
}
const keyMapwithclass = {
    a: 'kick',     
    s: 'snare',   
    d: 'tom1',     
    f: 'tom2',     
    g: 'tom3',     
    h: 'tom4',     
    j: 'crash'     
};

document.addEventListener("keypress", (event)=>{
    const pressedKey = event.key
    // console.log(key)
    const audioSrc = keyMapwithaudio[pressedKey];
    if(audioSrc){
        const audio = new Audio(audioSrc);
        audio.play();
        
        const btnClass = keyMapwithclass[pressedKey]
        const btn = document.querySelector(`.${btnClass}`) 
        // console.log(btn)
        if(btn){
            btn.classList.add("active")
            setTimeout(()=>{btn.classList.remove('active')},200)
        }
    }
})
function audiofun (button){
    const cls = button.className;
    // console.log(cls)
    const instrument = instruments.find(c=>c==cls);
    // console.log(instrument)
    if(instrument){
        const audio = new Audio(sounds[instrument])
        audio.play();
    }
}

