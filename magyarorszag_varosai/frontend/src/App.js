import {TelepulesProvider} from './context/TelepulesContext';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Main from './components/Main';
import Telepules from './components/Telepules';

function App() {
  return (
    <div className="bg-gray-900 h-screen">
      
      <TelepulesProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/telepules' element={<Telepules />}/>
            <Route path='*' element={<Navigate to={'/'} />} />
          </Routes>
        </Router>
      </TelepulesProvider>
    </div>
  );
}

export default App;
