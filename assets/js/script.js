const turnOff=document.getElementById('turnOff');
const turnOn=document.getElementById('turnOn');

const lamp=document.getElementById('lamp')

function verify(){
    return lamp.src.indexOf('quebrada')>-1;
}

function lampOn(){

    lamp.src='./assets/image/ligada.png';
}

function lampOff(){
    lamp.src='./assets/image/desligada.png';

}
function lampBroken(){
    lamp.src='./assets/image/quebrada.png';
}

turnOn.addEventListener('click',lampOn);
turnOff.addEventListener('click',lampOff);
lamp.addEventListener('dblclick', lampBroken);


       
        
   


