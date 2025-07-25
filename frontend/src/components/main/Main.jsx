import HeroSection from "./HeroSection"
import BodySection from "./bodySection"
import "./Main.css";
import TopDeals from "./TopDeals";
import TodayDeals from "./TodayDeals";
export default function Main(){
    return(
        <div className="Main">
        <HeroSection/>
        <BodySection/>
        <TopDeals/>
        <TopDeals/>
        <TopDeals/>
        <TodayDeals/>
        </div>
    )
}