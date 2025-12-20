import {Link} from "react-router";
import {SwiggyItems,SwiggyPathMap} from "./ItemList";


const OrderItem=()=>{
    return(
        <ul className="navbar-nav">
            {SwiggyItems.map((item,index)=>(<li key={index} className="nav-link"><Link to={SwiggyPathMap[item]}>{item}</Link></li>))}
        </ul>
    )
}
export default OrderItem