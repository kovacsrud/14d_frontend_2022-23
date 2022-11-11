import Header from "./components/Header";
import KutyanevLista from './components/KutyanevLista';
import Fooldal from './components/Fooldal';
import Navbar from './components/Navbar';
import KutyanevForm from './components/KutyanevForm';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="text-3xl font-bold">
      
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Fooldal />}/>
          <Route path='/kutyanevek' element={<KutyanevLista />} />
          <Route path='/ujkutyanev' element={<KutyanevForm />}/>

        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
