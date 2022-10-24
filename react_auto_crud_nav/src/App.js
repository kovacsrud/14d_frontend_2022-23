import Main from "./components/Main";
import NavBar from "./components/NavBar";
import AutoList from "./components/AutoList";
import AutoForm from "./components/AutoForm";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <h1>Autó nyilvántartás</h1>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/autolist' element={<AutoList />} />
          <Route path='/autoform' element={<AutoForm />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
