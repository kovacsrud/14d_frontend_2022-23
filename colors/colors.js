//Írjunk függvényt, amely 10-es számrendszerbeli
//RGB színkódot 16-osra vált át!

function colorToHex(red,green,blue){

 return "#"+red.toString(16)+green.toString(16)+blue.toString(16);

}

function kattint(e){
    let elem=e.target;
    let selected=document.getElementById('selected');
    selected.setAttribute('style','background-color:'+elem.style.backgroundColor);
    selected.textContent=elem.textContent;
}

let main=document.getElementById('main');

for (let i = 0; i < 255; i++) {
    let negyzet=document.createElement('div');
    negyzet.textContent=colorToHex(i,255,i);
    negyzet.setAttribute('class','negyzet');
    negyzet.setAttribute('style','background-color:'+colorToHex(i,255,i));
    negyzet.addEventListener('click',kattint);
    main.appendChild(negyzet);
    
}