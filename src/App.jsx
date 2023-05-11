import Home from "./page/home/Home"
import Popular from "./page/popular/Popular"
import TopRated from "./page/toprated/TopRated"
import UpComing from "./page/upcoming/UpComing"
import ProductDetail from "./page/productdetail/ProductDetail"
import Header from "./components/header/Header"
import Error from "./page/Error"
import { Route , Routes } from "react-router-dom"
function App() {


  return (
    <>
    
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/popular" element={<Popular/>} />
    <Route path="/toprated" element={<TopRated/>}  />
    <Route path="/upcoming" element={<UpComing/>} />
    <Route path="/movie/:id" element={<ProductDetail/>} />
    <Route path="/*" element={<Error/>}/>
   </Routes>
    </>
  )
}

export default App
