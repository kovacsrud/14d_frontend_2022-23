function App(){
    
    

    return (
        <div>
            <h1>Üdvözöllek</h1>
            <Box hatterszin={"red"} kezdo={10} />
            <Posts />
          
        </div>
    );
}

function Box({hatterszin,kezdo}){

    const[szamlalo,setSzamlalo]=React.useState(kezdo);

    React.useEffect(()=>{
        document.title="Számláló értéke:"+szamlalo;
    },[szamlalo]);

    

    return (
        <div className="p-2 m-5 rounded" style={{width:"200px",height:"200px",backgroundColor:hatterszin}}>
            <div  onClick={()=>setSzamlalo(prev=>prev+1)} >
                <h1>{szamlalo}</h1>
                <button onClick={(e)=>{
                    setSzamlalo(0);
                    e.stopPropagation();
                }}>Reset</button>
             </div>
          
             
          
        </div>
    );
}

function Posts(){

    const[posts,setPosts]=React.useState([]);

    React.useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(res=>res.json())
        .then(adatok=>setPosts(adatok))
        .catch(err=>console.log(err));
    },[]);

    

    return (
        <div>
            <h2>Adatok száma:{posts.length}</h2>
            {
                posts.map((elem,index)=>(<div key={index} className="p-2 m-4" style={{backgroundColor:"green"}}>
                    <p>{elem.title}</p>
                    <p>{elem.body}</p>
                    </div>))
            }
        </div>
    );
}


ReactDOM.render(React.createElement(App),document.getElementById('app'));