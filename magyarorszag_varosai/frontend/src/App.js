import {TelepulesProvider} from './context/TelepulesContext';
import { MegyeProvider } from './context/MegyeContext';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Main from './components/Main';
import Telepules from './components/Telepules';
import Megye from './components/Megye';

function App() {
  return (
    <div className="bg-gray-900 h-screen">
      
      <MegyeProvider>
      <TelepulesProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/telepules' element={<Telepules />}/>
            <Route path='/megye' element={<Megye />} />
            <Route path='*' element={<Navigate to={'/'} />} />
          </Routes>
        </Router>
      </TelepulesProvider>
      </MegyeProvider>
    </div>
  );
}

export default App;
