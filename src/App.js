import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Cart from './pages/Cart';
import Home from './pages/Home'



function App() {
  return (
    <div className="App">
    
    <div>
      <NavBar />
    </div>

    <Routes>
      <Route path='/' element={Home} />
      <Route path='/cart' element={Cart} />
    </Routes>

    </div>
  );
}

export default App;
