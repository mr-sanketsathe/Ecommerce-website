import './Navbar.css';
import Navpanel from './Navpanel';
export default function Navbar() {
    return (
        <>
        <nav className="navbar">
            <div className="logo"><span className='logo-firstword'>S</span><span className='logo-lastword'>SHOP</span></div>
            <div className="search-section">
                <div className="search-box">
                    <input type="text" placeholder='Search products...' className='search-input' />
                    <button className="search-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div className="like-product"><i className="fa-regular fa-heart"></i></div>
            </div>
            <div className="user-acc"><i className="fa-regular fa-user"></i></div>
        </nav>
        <Navpanel/>
        </>
    )
}