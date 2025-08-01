import { useParams } from "react-router-dom";
import "./Show.css";
export default function Show(){
    let {id}=useParams();
    return(
        <h1>this is show product {id}</h1>
    )
}