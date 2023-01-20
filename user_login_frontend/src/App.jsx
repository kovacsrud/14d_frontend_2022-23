import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";

import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";

function App() {

  return (
    <div className="mx-10">
      <Header headerText={"User login frontend"} />
   
      <Router>
      <Menu />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
