import './App.scss'
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Product from "./pages/Product"
import AboutPage from "./pages/AboutPage"
import NotFoundPage from "./pages/NotFoundPage"
import Contract from "./pages/ContractPage"
import ProductDetail from './pages/ProductDetail'
import ProductAdd from './pages/admin-pages/ProductAdd'


function App() {
  
  return (
    <>
   <Header />

   <main>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contract" element={<Contract />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/product-add" element={<ProductAdd />} />
    </Routes>
   </main>
    <Footer />
    </>
  )
}

export default App
