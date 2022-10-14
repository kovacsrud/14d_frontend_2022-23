import Header from "./components/Header";
import UserList from "./components/UserList";
import "bootstrap-icons/font/bootstrap-icons.css"

function App() {
  return (
    <div className="container">
      <Header szoveg={"Első React app"}/>
      <UserList />
     
    </div>
  );
}

export default App;
