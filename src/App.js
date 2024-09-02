import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProductPage from './pages/ProductPage';
import Payment from './pages/Payment';
import Checkout from './pages/Checkout';
import Bag from './pages/Bag';
import Address from './pages/Address';

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/productpage" element={<ProductPage/>} />
            <Route path="/bag" element={<Bag/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/address" element={<Address/>} />
            <Route path="/payment" element={<Payment/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
