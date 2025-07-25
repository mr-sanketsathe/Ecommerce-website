import './BodySection.css'
export default function BodySection() {
    let Category = [{
        name: "Men's Fashion",
        icon: <i class="fa-sharp fa-solid fa-person"></i>
    },
    {
        name: "Women's wear",
        icon: <i class="fa-sharp fa-solid fa-person-dress"></i>
    },
    {
        name: "Electronics",
        icon: <i class="fa-solid fa-mobile-screen"></i>
    },
    {
        name: "Home Essentials",
        icon: <i class="fa-regular fa-house"></i>
    }]
    return (
            <div className="Category-section">
                <h2 className="heading">Shop by Category</h2>
                <div className="categories">
                {
                    Category.map((item, idx) => (
                        <div className="Category-box">
                            <span className='category-icon'>{item.icon}</span>
                            <span className='category-name' >{item.name}</span>
                        </div>
                    ))
                }
                </div>
            </div>

      
    )
}