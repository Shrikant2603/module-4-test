
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CartContainer from './containers/CartContainer';
import HomeContainer from './containers/HomeContainer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeContainer/>} />
          <Route path="/cart" element={<CartContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
