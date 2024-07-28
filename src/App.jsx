import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { getAll } from "./services/items"

import ScrollToTop from "./components/ScrollToTop"
import Header from "./components/Header"
import Home from "./components/Home"
import Cart from "./components/Cart"
import ItemsGrid from "./components/ItemsGrid"
import ProductDetails from "./components/ProductDetails"
// import Footer from './components/Footer';

const App = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    getAll().then((response) => {
      setItems(response.data)
    })
  }, [])

  return (
    <>
      <ScrollToTop />
      <Header items={items} />

      <Routes>
        <Route path="/" element={<Home items={items} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:section" element={<ItemsGrid items={items} />} />
        <Route path="/product/:id" element={<ProductDetails items={items} />} />
        <Route
          path="/:section/:id"
          element={<ProductDetails items={items} />}
        />
      </Routes>

      {/* <Footer /> */}
    </>
  )
}

export default App
