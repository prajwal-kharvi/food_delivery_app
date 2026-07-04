import {useParams} from "react-router";
import {BImageUrl} from "../utils/ItemList";
import Shimmer2 from "../Shimmer/Shimmer2";
import useResMenu from "../hooks/useResMenu";


const SwiggyRestaurantMenu=()=>{

    const {resid} = useParams();

    const resInfo = useResMenu(resid);
    if(resInfo===null)return <Shimmer2/>
    const {name,cuisines}= resInfo[2]?.card?.card?.info ||{}
    const {cards}=resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR ||[]
    const itemCard=[]
    if(cards && cards.length>1){
        for(let i=0; i<cards.length; i++){
            const currentCard=cards[i]?.card?.card
            if(currentCard?.itemCards){
                for(let j=0;j<currentCard.itemCards.length;j++){
                    itemCard.push(currentCard.itemCards[j])
                }

            }
        }
    }


    return (
        <div className="max-w-5xl mx-auto px-6 py-8">
            {/* Restaurant Info */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">{name}</h1>

                <p className="text-lg text-gray-500 mt-2">
                    {cuisines.join(", ")}
                </p>

                <h2 className="text-2xl font-semibold mt-6 border-b pb-2">
                    🍽️ Menu
                </h2>
            </div>

            {/* Menu Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {itemCard.map((item) => (
                    <div
                        key={item.card.info.id}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-5 flex justify-between items-center"
                    >
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                {item.card.info.name}
                            </h3>

                            <p className="text-green-600 font-medium mt-2">
                                ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
                            </p>
                        </div>

                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
                            Add
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SwiggyRestaurantMenu;