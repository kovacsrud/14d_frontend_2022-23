//Készítsen egy függvényt, amely adott határok között
// hoz létre véletlen egész számot

//Kiindulási alap: Math.random()
class Szemely{
    constructor(vezeteknev,keresztnev,lakhely,kor){
        this.vezeteknev=vezeteknev;
        this.keresztnev=keresztnev;
        this.lakhely=lakhely;
        this.kor=kor;
    }
}

console.log(Math.floor(Math.random()*50)+10);

function randomSzam(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

console.log(randomSzam(10,90));

//Lista generálás és megjelenítés
let vezetekNevek=["Kiss","Nagy","Boldog","Kovács","Szekeres","Kertész","Zsiga"];
let keresztNevek=["Alex","Éva","Zsombor","Ubul","Zénó","Tünde","Iván"];
//életkor 0-120
let lakhelyek=["Gyula","Mezőhegyes","Orosháza","Nagyszénás","Ózd","Lenti"];

//készítsen listát olyan objektumokból, amelyek ilyen személyek adatait
//tartalmazzák
let szemelyLista=[];
//szemelyLista.push();
for (let i = 0; i < 100; i++) {
    
    let vezeteknev=vezetekNevek[randomSzam(0,vezetekNevek.length)];
    let keresztnev=keresztNevek[randomSzam(0,keresztNevek.length)];
    let lakhely=lakhelyek[randomSzam(0,lakhelyek.length)];
    let kor = randomSzam(1,100);
    
    let szemely=new Szemely(vezeteknev,keresztnev,lakhely,kor);
    szemelyLista.push(szemely);
    
}

for (let i = 0; i < szemelyLista.length; i++) {
    let p=document.createElement('p');
    p.textContent=szemelyLista[i].vezeteknev+" "+szemelyLista[i].keresztnev;
    let ul=document.createElement('ul');

    let li_lakhely=document.createElement('li');
    let li_kor=document.createElement('li');

    li_lakhely.textContent=szemelyLista[i].lakhely;
    li_kor.textContent=szemelyLista[i].kor;

    ul.appendChild(li_lakhely);
    ul.appendChild(li_kor);
    p.appendChild(ul);
    main.appendChild(p);
    
}
