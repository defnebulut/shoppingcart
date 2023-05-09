import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home} from "./pages/Home"
import { ProductList } from "./pages/ProductList"
import { Cart } from "./pages/Cart"
import {Navbar} from "./components/Navbar"
import {ShoppingCartProvider} from "./contx/shopcartcontext"
import { Details } from "./pages/Details"



function App() {
  return (
    <ShoppingCartProvider>
    <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/cart/:id" Component={Cart} element={<Cart />} />
          <Route path="/details/:id" Component={Details} element={<Details />} />
        </Routes>
      </Container>
      </ShoppingCartProvider>
  )
}

export default App