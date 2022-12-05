import {TelepulesProvider} from './context/TelepulesContext';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <div className="bg-gray-900 h-screen">
      
      <TelepulesProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='*' element={<Navigate to={'/'} />} />
          </Routes>
        </Router>
      </TelepulesProvider>
    </div>
  );
}

export default App;
