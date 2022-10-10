import Header from "./components/Header";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="container">
      <Header szoveg={"Első React app"}/>
      <UserList />
     
    </div>
  );
}

export default App;
