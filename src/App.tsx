import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Beers from './pages/Beers';
import Breweries from './pages/Breweries';
import Infos from './pages/Infos';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import { FavoritesProvider } from './context/FavoritesContext';
import './styles/global.css';

function App() {
  return (
    <Router>
      <FavoritesProvider>
        <div className="app">
          <Navbar />
          <main className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/beers" element={<Beers />} />
              <Route path="/breweries" element={<Breweries />} />
              <Route path="/infos" element={<Infos />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reset-password" element={<ResetPassword />} />
            </Routes>
          </main>
        </div>
      </FavoritesProvider>
    </Router>
  );
}

export default App;
