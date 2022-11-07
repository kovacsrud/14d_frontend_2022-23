import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Main from './components/Main';
import Kutyafajtak from './components/Kutyafajtak';
import Kutyanevek from './components/Kutyanevek';
import Rendeles from './components/Rendeles';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container">
      <h1>React App Tailwind Css-el és DaisyUI-al</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/rendeles' element={<Rendeles />} />
          <Route path='/kutyanevek' element={<Kutyanevek />} />
          <Route path='/kutyafajtak' element={<Kutyafajtak />} />
          <Route path='*' element={<Navigate to='/' />} />

        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
