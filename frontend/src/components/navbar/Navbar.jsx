import './Navbar.css';
import Navpanel from './Navpanel';
export default function Navbar() {
    return ( 
        <>
       <div className="navbar-section">
        <h1 className="logo"><span className="firstword">S</span><span className="nextword">Shop</span></h1>
        <div className="search-section">
            <div className="search-box">
            <input type="text" className="search-input" placeholder='Search Products..' />
            <button className="search-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
          <p className="whitelist"><i className="fa-regular fa-heart"></i></p>
        </div>
            <p className="user"><i className="fa-regular fa-user"></i></p>
       </div>
       <Navpanel/>
        </>
    )
}