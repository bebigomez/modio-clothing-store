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
    axios.get('https://gist.githubusercontent.com/bebigomez/19a2a2a461051227d61e15ffd7738203/raw/0420534f81c28913fe14e60b155d6e2863603ac0/modioItems.json').then((response) => {
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
        <Route path="/women/:id" element={<ProductDetails items={items} />} />
        <Route path="/men/:id" element={<ProductDetails items={items} />} />
        <Route path="/kids/:id" element={<ProductDetails items={items} />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
};

export default App;
