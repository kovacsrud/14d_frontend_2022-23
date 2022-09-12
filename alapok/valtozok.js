let main=document.getElementById('main');

//let,var,const
//var - globális változó
//let - az adott scope-ban lesz elérhető
//const - egyszer lehet hozzárendelni

if(true) {
    let elagazas="elágazás"
    let p=document.createElement('p');
    p.textContent=elagazas;
    main.appendChild(p);
}
//console.log(elagazas);

const allando=137;
//allando=737;

console.log(allando);

