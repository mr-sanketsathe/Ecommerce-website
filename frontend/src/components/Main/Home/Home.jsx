import ProductTab from "../../ProductTab/ProductTabe"
import "./Home.css"
export default function Home(){
    let categories=[{name:"Men's  fashion",
        icon:<i className="fa-solid fa-person"></i>
    },{name:"Women's Wear",
        icon:<i className="fa-solid fa-person-dress"></i>
    },{name:"Electronics",
        icon:<i className="fa-solid fa-mobile-screen-button"></i>
    }]
    return(
        <div className="home-section">
         <div className="hero-section">
            <i class="fa-solid fa-angle-left"></i>
            <img src="./heroImage2.jpg" alt="heroimage" className="hero-image" />
            <i class="fa-solid fa-chevron-right"></i>
         </div>
         <h3 className="category-heading">Shop by Category</h3>
        <div className="categories"> 
            {
             categories.map((category,idx)=>(
                <div key={idx} className="category">
                   <span  className="category-icon">{category.icon}</span>
                   <span className="category-name">{category.name}</span>
                </div>
             ))
            }
        </div>
        <ProductTab/>
        <ProductTab/>
       </div>
    )
}