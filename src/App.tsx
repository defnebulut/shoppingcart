import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home} from "./pages/Home"
import { ProductList } from "./pages/ProductList"
import { Cart } from "./pages/Cart"
import {Navbar} from "./components/Navbar"
import {ShoppingCartProvider} from "./contx/shopcartcontext"



function App() {
  return (
    <ShoppingCartProvider>
    <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Container>
      </ShoppingCartProvider>
  )
}

export default App