import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import CatalogPage from './components/pages/CatalogPage/CatalogPage';
import OrderPage from './components/pages/OrderPage/OrderPage';
import HomePage from './components/pages/HomePage/HomePage';
import CartPage from './components/pages/CartPage/CartPage';
import Footer from './components/layout/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
