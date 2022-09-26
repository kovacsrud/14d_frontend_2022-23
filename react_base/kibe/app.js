function App(){
    const [isAktiv,setAktiv]=React.useState(false);

    return (
        React.createElement('div',{
           
            className:"border"
        },
        "App szintű state:"+(isAktiv ? "Aktív":"Nem aktív"),
        React.createElement(Box,{isAktiv:isAktiv},"Box"),
        React.createElement(Buttons,{isAktiv:isAktiv,setAktiv:setAktiv},"")
        
        
    ));
}

function Box(props){
      
    return(React.createElement('div',{
        style:{
            width:"200px",
            height:"200px",
            backgroundColor:(props.isAktiv? "green":"red")
        },
        className:"p-2 m-5 rounded",
    

    },"")
)};

function Buttons({isAktiv,setAktiv}){
    return (
        React.createElement('div',{
            style:{
                width:"200px",
                height:"200px"
            }
        },
        React.createElement('button',{
            className:"btn btn-success m-2",
            disabled:isAktiv,
            onClick:()=>setAktiv(true)
        },"Aktiválás"),
        React.createElement('button',{
            className:"btn btn-danger m-2",
            disabled:!isAktiv,
            onClick:()=>setAktiv(false)
        },"Deaktiválás")
        )
    );
}



ReactDOM.render(React.createElement(App),document.getElementById('app'));