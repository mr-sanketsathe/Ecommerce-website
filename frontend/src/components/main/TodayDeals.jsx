import './TodayDeals.css'
export default function TodayDeals(){
    let discount=[
        {   image:"https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?q=80&w=786&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name:"smartwatch",
            price:"120"
        },
         {   image:"https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name:"Headphones",
            price:"350"
        },
         {   image:"https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name:"TV",
            price:"190"
        },
         {   image:"https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name:"Shoes",
            price:"500"
        }

    ]
    return(
        <div className="today-deal">
            <h2 className="today-deal-heading">Today's Deals ends in <span>12:00:00</span></h2>
            <div className="todaydeal-section">
                {discount.map((item,idx)=>(
                    <div key={idx} className="discount-prod">
                        <img src={item.image} alt={item.name} className="todaydeal-image" />
                        <div className="todaydeal-desc">
                            <p className="todaydeal-name">{item.name}</p>
                             <p className="todaydeal-price">Rs.{item.price}</p>
                        </div>
                        <button className="todaydeal-btn">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}