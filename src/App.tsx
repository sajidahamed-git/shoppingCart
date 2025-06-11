import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'

function App() {
  const [cart, setCart] = useState<{ [id: number]: number }>({})

  const handleAddToCart = (productId: number, quantity: number) => {
    if (quantity > 0) {
      setCart(prev => ({ ...prev, [productId]: (prev[productId] || 0) + quantity }))
    }
  }

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0)

  return (
    <Router>
      <NavBar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </Router>
  )
}

export default App
