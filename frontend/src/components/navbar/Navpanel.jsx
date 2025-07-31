import './Navpanel.css'
import { Link } from 'react-router-dom';
export default function Navpanel(){
    return(
       <div className="navpanel-section">
        <ul className='navpanel-items'>
            <li className='item'><Link to="/">Home</Link></li>
            <li className='item'><Link to="/men">Men</Link></li>
            <li className='item'><Link to="/women">Women</Link></li>
            <li className='item'><Link to="/electronics">Electronics</Link></li>
           <li className='item'><Link to="/homekitchen">Home & Kitchen</Link></li>
           <li className='item'><Link to="/offers">Offers</Link></li>
           <li className='item'><Link to="/newarrivals">New Arrivals</Link></li>
        </ul>
       </div>

    )
}