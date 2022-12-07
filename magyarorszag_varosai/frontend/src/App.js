import {TelepulesProvider} from './context/TelepulesContext';
import { MegyeProvider } from './context/MegyeContext';
import { TipusProvider } from './context/TipusContext';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Main from './components/Main';
import Telepules from './components/Telepules';
import Megye from './components/Megye';
import MegyeTelepules from './components/MegyeTelepules';
import TelepulesAdat from './components/TelepulesAdat';
import Tipus from './components/Tipus';
import JogallasTelepules from './components/JogallasTelepules';

function App() {
  return (
    <div className="bg-gray-900 h-screen">
      <TipusProvider>
      <MegyeProvider>
      <TelepulesProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/telepules' element={<Telepules />}/>
            <Route path='/telepulesadat' element={<TelepulesAdat />} />
            <Route path='/megyetelepules' element={<MegyeTelepules />} />
            <Route path='/jogallastelepules' element={<JogallasTelepules />} />
            <Route path='/megye' element={<Megye />} />
            <Route path='/tipus' element={<Tipus />} />
            <Route path='*' element={<Navigate to={'/'} />} />
          </Routes>
        </Router>
      </TelepulesProvider>
      </MegyeProvider>
      </TipusProvider>
    </div>
  );
}

export default App;
