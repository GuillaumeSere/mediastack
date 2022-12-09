import './App.css';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Bitcoin from './components/Bitcoin';
import Busines from './components/Busines';
import French from './components/French';
import Tech from './components/Tech';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path='/'element={<Home />} />
            <Route path='/bitcoin'element={<Bitcoin />} />
            <Route path='/busines'element={<Busines />} />
            <Route path='/french'element={<French />} />
            <Route path='/tech'element={<Tech />} />
        </Routes>
    </div>
  );
}

export default App;
