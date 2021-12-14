import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderRevieww/OrderReview';
import Shop from './components/Shop/Shop';


function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="shop" element={<Shop></Shop>}/>
          <Route path="inventory" element={<Inventory/>}/>
          <Route path="review" element={<OrderReview></OrderReview>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
