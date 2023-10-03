import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Users from "./pages/users/Users"
import Products from "./pages/products/Products"
import Navbar from "./components/navbar/Navbar"
import Menu from "./components/menu/Menu"
import Footer from "./components/footer/Footer"
import './styles/global.scss'
function App() {

  return (
    <div className="main">

      <Navbar />


      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Routes>
            <Route path="/" element={<Home />}>
              
            </Route>
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default App
