let szamok=[12,26,78,967,1022,516];

let szemely={
    vezeteknev:"Kiss",
    keresztnev:"Ubul",
    kor:29
}

let ul=document.createElement('ul');

for (let i = 0; i < szamok.length; i++) {
    let li=document.createElement('li');
    li.textContent=szamok[i];
    ul.appendChild(li);
}

main.appendChild(ul);

for (let i of szamok) {
    //console.log(i);
}

ul=document.createElement('ul');
for (let i in szemely) {
    let li=document.createElement('li');
    li.textContent=i+":"+szemely[i];
    ul.appendChild(li);    
}

main.appendChild(ul);

//while
//do while

let i=0;
while(szamok[i]){
   // console.log(szamok[i]);
    i++;
}

i=0;
do {
    console.log(szamok[i]);
    i++;
} while(szamok[i]);

ul=document.createElement('ul');

szamok.forEach(function(elem,index){
    let li=document.createElement('li');
    li.textContent=index+"=>"+elem;
    ul.appendChild(li);    
    
});
main.appendChild(ul);