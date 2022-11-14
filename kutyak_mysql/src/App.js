import Header from "./components/Header";
import KutyanevLista from './components/KutyanevLista';
import Fooldal from './components/Fooldal';
import Navbar from './components/Navbar';
import KutyanevForm from './components/KutyanevForm';
import KutyafajtaForm from "./components/Kutyafajtak/KutyafajtaForm";
import { KutyafajtaProvider } from "./components/context/KutyfajtaContext";
import KutyafajtaLista from "./components/Kutyafajtak/KutyafajtaLista";

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="text-3xl font-bold">
      <KutyafajtaProvider>
      <Header />
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Fooldal />}/>
          <Route path='/kutyanevek' element={<KutyanevLista />} />
          <Route path='/ujkutyanev' element={<KutyanevForm />}/>
          <Route path='/kutyafajtak' element={<KutyafajtaLista />}/>
          <Route path='/ujkutyafajta' element={<KutyafajtaForm />} />

        </Routes>
      
      </Router>
      </KutyafajtaProvider>
    </div>
  );
}

export default App;
