//Készítsen egy függvényt, amely adott határok között
// hoz létre véletlen egész számot

//Kiindulási alap: Math.random()

console.log(Math.floor(Math.random()*50)+10);

function randomSzam(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

console.log(randomSzam(10,90));

//Lista generálás és megjelenítés
let vezetekNevek=["Kiss","Nagy","Boldog","Kovács","Szekeres","Kertész","Zsiga"];
let keresztNevek=["Alex","Éva","Zsombor","Ubul","Zénó","Tünde","Iván"];
//életkor 0-120
let lakhely=["Gyula","Mezőhegyes","Orosháza","Nagyszénás","Ózd","Lenti"];

//készítsen listát olyan objektumokból, amelyek ilyen személyek adatait
//tartalmazzák
let szemelyLista=[];
//szemelyLista.push();
