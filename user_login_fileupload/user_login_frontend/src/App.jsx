import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import Userdata from "./components/Userdata";
import Fileupload from "./components/Fileupload";
import Images from "./components/Images";
import { UserProvider } from "./components/context/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";

function App() {

  return (
    <div className="mx-10">
      <Header headerText={"User login frontend"} />
      <UserProvider>
      <Router>
      <Menu />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userdata" element={<Userdata />} />
          <Route path="/upload" element={<Fileupload />} />
          <Route path="/images" element={<Images />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Router>
      </UserProvider>
      <ToastContainer />
      
      
    </div>
  )
}

export default App
