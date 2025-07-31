import "./ProductCard.css"
export default function ProductCard({product}){
    return(
        <div className="productCard">
           <img src="./prduct.avif" alt="prdt" className="product-imge"/>
            <div className="product-desc">
                <p className="prod-name">Men's Fashion</p>
                <p className="prod-price">Rs.399 <span className="old-price">Rs.599</span></p>
            </div>
            <button className="Cart-btn">Add to Cart</button> 
        </div>
    )
}