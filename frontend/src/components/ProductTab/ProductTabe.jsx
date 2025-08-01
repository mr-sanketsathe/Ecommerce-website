import ProductCard from "../ProductCard/ProductCard"
import "./ProductTab.css"
export default function ProductTab({Products}){
    return(
        <>
        <h2 className="productTab-head">Top Deals</h2>
        <div className="productTab">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
        </>
    )
}