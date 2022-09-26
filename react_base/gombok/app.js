//Natív javascript

const gomb=document.createElement('button');
gomb.textContent='JS gomb';

gomb.onclick=function(){
    alert("JS gomb");
}
const jsgomb=document.getElementById("js-gomb");
jsgomb.appendChild(gomb);

//React gomb 

const rgomb=React.createElement('button',{
    onClick:function(){
        alert("React gomb");
    }
},"React button");

const kontener=React.createElement('div',{
    style:{
        backgroundColor:"green",
        width:"100px",
        height:"100px"
    },
    

},rgomb,rgomb,rgomb);

ReactDOM.render(kontener,document.getElementById('react-gomb'));