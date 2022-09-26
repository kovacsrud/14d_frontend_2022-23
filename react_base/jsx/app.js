function App() {

    var nev = "Egon";

    return React.createElement(
        "div",
        null,
        React.createElement(Header, { szoveg: "Jsx használata", masikszoveg: "Jsx szintaktika használata" }),
        React.createElement(
            "h2",
            null,
            "\xDCdv\xF6z\xF6llek:",
            nev
        )
    );
}

function Header(props) {
    return React.createElement(
        "div",
        { className: "border" },
        React.createElement(
            "h1",
            { className: "p-2 m-5" },
            props.szoveg
        ),
        React.createElement(
            "h3",
            { className: "p-2 m-2" },
            props.masikszoveg
        )
    );
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));