function App(){
    return (
        React.createElement('div',{
            style:{
                backgroundColor:"yellow"
            },
            className:"border"
        },
        React.createElement(Box,{hatterszin:"green",felirat:"Box1",kezdo:12}),
        React.createElement(Box,{hatterszin:"blue",felirat:"Box2",kezdo:26}),
        React.createElement(Box,{hatterszin:"red",felirat:"Box3",kezdo:45}))
        
    );
}

function Box({hatterszin,felirat,kezdo}){
    
    const [szamlalo,setSzamlalo]=React.useState(kezdo);

    return(React.createElement('div',{
        style:{
            width:"200px",
            height:"200px",
            backgroundColor:hatterszin
        },
        className:"p-2 m-5 rounded",
        onClick:()=>setSzamlalo(prev=>prev+1)

    },szamlalo,React.createElement(Reset,{setSzamlalo:setSzamlalo}))
)};

function Reset({setSzamlalo}){
    return (
        React.createElement('button',{onClick:()=>setSzamlalo(0)},"Reset")
    );
}

ReactDOM.render(React.createElement(App),document.getElementById('app'));