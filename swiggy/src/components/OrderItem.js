import {Link} from "react-router";
import {SwiggyItems,SwiggyPathMap} from "../utils/ItemList";


const OrderItem=()=>{
    return(
        <ul className="flex flex-col lg:flex-row items-center gap-4 font-medium">
            {SwiggyItems.map((item, index) => (
                <li key={index}>
                    <Link
                        to={SwiggyPathMap[item]}
                        className="hover:text-orange-500 transition-colors"
                    >
                        {item}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
export default OrderItem