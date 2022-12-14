var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function App() {

    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "\xDCdv\xF6z\xF6llek"
        ),
        React.createElement(Box, { hatterszin: "red", kezdo: 10 }),
        React.createElement(Posts, null)
    );
}

function Box(_ref) {
    var hatterszin = _ref.hatterszin,
        kezdo = _ref.kezdo;

    var _React$useState = React.useState(kezdo),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        szamlalo = _React$useState2[0],
        setSzamlalo = _React$useState2[1];

    React.useEffect(function () {
        document.title = "Számláló értéke:" + szamlalo;
    }, [szamlalo]);

    return React.createElement(
        "div",
        { className: "p-2 m-5 rounded", style: { width: "200px", height: "200px", backgroundColor: hatterszin } },
        React.createElement(
            "div",
            { onClick: function onClick() {
                    return setSzamlalo(function (prev) {
                        return prev + 1;
                    });
                } },
            React.createElement(
                "h1",
                null,
                szamlalo
            ),
            React.createElement(
                "button",
                { onClick: function onClick(e) {
                        setSzamlalo(0);
                        e.stopPropagation();
                    } },
                "Reset"
            )
        )
    );
}

function Posts() {
    var _React$useState3 = React.useState([]),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        posts = _React$useState4[0],
        setPosts = _React$useState4[1];

    React.useEffect(function () {
        fetch('https://jsonplaceholder.typicode.com/posts/').then(function (res) {
            return res.json();
        }).then(function (adatok) {
            return setPosts(adatok);
        }).catch(function (err) {
            return console.log(err);
        });
    }, []);

    return React.createElement(
        "div",
        null,
        React.createElement(
            "h2",
            null,
            "Adatok sz\xE1ma:",
            posts.length
        ),
        posts.map(function (elem, index) {
            return React.createElement(
                "div",
                { key: index, className: "p-2 m-4", style: { backgroundColor: "green" } },
                React.createElement(
                    "p",
                    null,
                    elem.title
                ),
                React.createElement(
                    "p",
                    null,
                    elem.body
                )
            );
        })
    );
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));