import './HeroSection.css'
export default function HeroSection(){

    return(
        <div className="image-box">
             <p className='arrow'><i className="fa-solid fa-angle-left"></i></p>
             <img src={"./heroImage2.jpg"} alt="heroImage" className="hero-image" />
             <p className='arrow'><i className="fa-solid fa-angle-right"></i></p>
        </div>
       
    )
}