//Függvények

//Klasszikus function
function osszead(a,b=1,c=1){
    return a+b+c;
}

function mindentosszead(){

    let osszeg=0;
    for (let i = 0; i < arguments.length; i++) {
        
        osszeg+=arguments[i];
    }
    return osszeg;

}

//Max függvény

//console.log(osszead(10,20,30));
//console.log(osszead(10));

//Arrow function
const osszead_=(a,b,c)=>{
    return a+b+c;
}

const kivon=(a,b,c)=>a-b-c;

//console.log(osszead_(10,30,45));
//console.log(kivon(30,10,5));

console.log(mindentosszead(10,10,20,35));
console.log(mindentosszead(100,10,200,35,68,482,551));

