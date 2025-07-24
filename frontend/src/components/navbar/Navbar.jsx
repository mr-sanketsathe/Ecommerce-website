import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './navbar.css';
export default function Navbar(){
    return(
        <div className="navbar">
            <img src="./amazon_logo.png" alt="amezon" className="amezon-logo" />
            <div className="location">
                <p className='location-user'>Deliver to Demo</p>
                <p className='location-state'>< LocationOnIcon/>Mahad 308402</p>
            </div>
            <div className="search-box">
                <select className='search-select'>
                    <option className="search-select-item"value="all">All</option>
    
                </select>
                <input type="text" className='search-input' placeholder='Search amezon.in'/>
                <button className='search-btn'><SearchIcon/></button>
            </div>
            <div className="account">
                <p className='account-name'>hello demo</p>
                <p className="account-info">Account & lists</p>
            </div>
            <div className="order-status">
                <p>Order</p>
                <p>&Status</p>
            </div>
            <div className="cart">
                <p><ShoppingCartIcon/>cart</p>
            </div>
        </div>
    )
}