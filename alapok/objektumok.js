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


console.log(opel);
console.log(kia);
console.log(VolksWagen);
console.log(nevek);