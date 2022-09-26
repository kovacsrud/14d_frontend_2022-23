function App(){
    
    const nev="Egon";

    return (
        <div>
            <Header szoveg={"Jsx használata"} masikszoveg={"Jsx szintaktika használata"} />
            <h2>Üdvözöllek:{nev}</h2>
        </div>
    );
}

function Header(props){
    return (
        <div className="border">
        <h1 className="p-2 m-5">{props.szoveg}</h1>
        <h3 className="p-2 m-2">{props.masikszoveg}</h3>
        </div>
    );
}

ReactDOM.render(React.createElement(App),document.getElementById('app'));