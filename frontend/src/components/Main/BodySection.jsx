import "./BodySection.css"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Footer from "../footer/Footer"
import Home from "./Home/Home"
import Men from "./Men/Men"
import Women from "./Women/Women"
import Electronics from "./Electronics/Electronics"
import HomeKitchen from "./HomeKitchen/HomeKitchen"
import Offers from "./Offers/Offers"
import NewArrivals from "./New Arrivals/NewArrivals"
export default function BodySection(){
    return(
        <div className="main-section">
           <BrowserRouter>
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/men" element={<Men/>}/>
            <Route path="/women" element={<Women/>}/>
            <Route path="/electronics" element={<Electronics/>}/>
            <Route path="/homekitchen" element={<HomeKitchen/>}/>
            <Route path="/offers" element={<Offers/>}/>
            <Route path="/newarrivals" element={<NewArrivals/>}/>
           </Routes>
           </BrowserRouter>
            <Footer/>
        </div>
    )
}