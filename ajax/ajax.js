let db=50;
let request=new XMLHttpRequest();

request.open('GET',`https://randomuser.me/api/?results=${db}`,true);

request.onload=function (){
    var data=JSON.parse(this.response);
    console.log(data);

}

request.send();

fetch(`https://randomuser.me/api/?results=${db}`).then(res=>res.json()).then(adat=>{
    console.log(adat.results);
    adat.results.forEach(elem => {
        console.log(elem.name.first);
    });
});

async function letolt(){
    const request=await fetch(`https://randomuser.me/api/?results=${db}`);

    const {results,info}=await request.json();

    console.log(info);
    console.log(results);

}

letolt();

