/// Declaration des different ellement selectioner dans le fichier html
///pour afficher les donner reçu de l'esp32


let labelTEMP = document.querySelector("#temperature") ;
let labelHUM = document.querySelector("#humidity") ;

let temperature = 0 ; //variable pour stoker la temperature receuilli par l'esp32
let humidity = 0 ;//variable pour stoker l'humidité receuilli par l'esp32

function sendData(){
fetch('http://localhost:3000/mesure')
.then(response => response.json())
.then(mesure =>{
    temperature = mesure.temperature ;
    humidity = mesure.humidity ;

    labelHUM.textContent = humidity ;
    labelTEMP.textContent = temperature ;
})
}

setInterval(sendData , 3000) ;