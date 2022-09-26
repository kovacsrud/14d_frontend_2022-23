let p=new Promise((resolve,reject)=>{
    let a=100;
    if(a>50){
        resolve(a);
    } else {
        reject("A szám nem megfelelő!");
    }
});

function p2(szam1,szam2){
    return new Promise((resolve,reject)=>{
        if(szam1>szam2){
            resolve(szam1+szam2);
        } else {
            reject("Az első számnak nagyobbnak kell lennie!");
        }
   })
}

function novel(szam){
    return szam+20;
}

p2(30,10).then(d=>p2(d,25)).then(d=>novel(d)).then(d=>console.log(d)).catch(err=>console.log(err));

async function promiseHivas(a,b){
    try {
        let elso=await p2(a,b);
        let masodik=await p2(elso,20);
        console.log(masodik);
        
    } catch (error) {
        console.log(error);
    }
    
}

promiseHivas(60,35);

