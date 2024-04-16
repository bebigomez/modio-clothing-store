import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import ItemsGrid from './components/ItemsGrid';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://gist.githubusercontent.com/bebigomez/19a2a2a461051227d61e15ffd7738203/raw/3795535b7bc56a2f89da21d6f1c35293463c53f5/modioItems.json').then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <>
      <Header items={items} />

      <Routes>
        <Route path="/" element={<Home items={items} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:section" element={<ItemsGrid items={items} />} />
        <Route path="/product/:id" element={<ProductDetails items={items} />} />
        <Route path="/search/:id" element={<ProductDetails items={items} />} />
        <Route path="/women/:id" element={<ProductDetails items={items} />} />
        <Route path="/men/:id" element={<ProductDetails items={items} />} />
        <Route path="/kids/:id" element={<ProductDetails items={items} />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
};

export default App;
