function App(){
    
    

    return (
        <div>
            <h1>Üdvözöllek</h1>
            <Box hatterszin={"red"} kezdo={10} />
            <Box hatterszin={"blue"} kezdo={20} />
            <Box hatterszin={"yellow"} kezdo={30} />
          
        </div>
    );
}

function Box({hatterszin,kezdo}){

    const[szamlalo,setSzamlalo]=React.useState(kezdo);

    return (
        <div className="p-2 m-5 rounded" style={{width:"200px",height:"200px",backgroundColor:hatterszin}}>
            <div  onClick={()=>setSzamlalo(prev=>prev+1)} >
                <h1>{szamlalo}</h1>
             </div>
           <div>
               <button onClick={()=>setSzamlalo(0)}>Reset</button>
            </div>
        </div>
    );
}




ReactDOM.render(React.createElement(App),document.getElementById('app'));