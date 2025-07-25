import './TopDeals.css'
export default function TopDeals(){
     let products=[{
        image:"https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Man's fashion",
        price:"2099",
     },
     {
        image:"https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Man's fashion",
        price:"2099",
     },
     {
        image:"https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Man's fashion",
        price:"2099",
     },
     {
        image:"https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Man's fashion",
        price:"2099",
     },
      {
        image:"https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Man's fashion",
        price:"2099",
     },
      {
        image:"https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Man's fashion",
        price:"2099",
     },
    ]
    return(
        <div className="deals-section">
            <h2 className="deals-heading">Top Deals</h2>
            <div className="product-section">
                 {products.map((product,idx)=>(
                <div className="product-card">
                    <img src={product.image} alt={product.name} className="prod-image" />
                    <div className="prod-desc">
                        <p className="prod-name">{product.name}</p>
                        <p className='prod-price'>Rs.{product.price}</p>

                    </div>
                    <button className="Cart-btn">Add to Cart</button>
                   
                </div>
            ))}
            </div>
           
        </div>
    )
}