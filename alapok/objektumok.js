//Objektumok

//Osztály deklaráció
class Auto {
    constructor(marka,tipus,gyartasiEv,rendszam) {
        this.marka=marka
        this.tipus=tipus
        this.gyartasiEv=gyartasiEv
        this.rendszam=rendszam
    }
}

let opel=new Auto("Opel","Astra",2008,"RKF-144");

let kia={
    marka:"Kia",
    tipus:"Rio",
    gyartasiEv:2019,
    rendszam:"TGH-789",
    markaEsTipus(){
        return this.marka+" "+this.tipus;
    }

}

console.log(kia.marka);
console.log(kia.markaEsTipus());

//objektumok,tömbök destruktúrálása
const {marka:Marka,tipus:Tipus}=kia;

console.log("Des:"+Marka);
console.log("Des:"+Tipus);






let marka="VolksWagen";
let tipus="Passat";
let gyartasiEv=2011;
let rendszam="GWG-026";

let VolksWagen={
    marka,
    tipus,
    gyartasiEv,
    rendszam
}

let nevek=
    [
        {
            vezeteknev:"Kiss",
            keresztnev:"Ubul"
        },
        {
            vezeteknev:"Nagy",
            keresztnev:"Zénó"
        },
        {
            vezeteknev:"Korcsok",
            keresztnev:"Pál"
        }

    ]

let ujnev={
    vezeteknev:"Zakál",
    keresztnev:"Egon"
}

ujnev={...ujnev,kor:36};

nevek=[...nevek,ujnev];

console.log(nevek);
console.log(ujnev);

delete ujnev.kor;
console.log(ujnev);

nevek=nevek.filter(x=>x.vezeteknev!="Kiss");

console.log(nevek);

//console.log(opel);
//console.log(kia);
//console.log(VolksWagen);
//console.log(nevek);
