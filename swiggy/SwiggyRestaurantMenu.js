import {useParams} from "react-router";
import Shimmer2 from "./Shimmer2";
import useResMenu from "./useResMenu";


const SwiggyRestaurantMenu=()=>{

    const {resid} = useParams();

    const resInfo = useResMenu(resid);

    if(resInfo===null)return <Shimmer2/>

    const {name,cuisines}= resInfo[0]?.card?.card?.info
    const {cards}=resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR
    const itemCard=[]
    if(cards && cards.length>1){
    for(let i=0; i<cards.length; i++){
        const currentCard=cards[i]?.card?.card
        if(currentCard?.itemCards){
            for(let j=0;j<currentCard.itemCards.length;j++){
                itemCard.push(currentCard.itemCards[j])
                // console.log(itemCard)
            }

        }
    }
    // const {itemCards}=resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    // console.log(itemCards);
}


    return (
        <div className="">
            <h1>{name}</h1>
             <p>{cuisines.join(",")}</p>
            <h2>{name} Menu</h2>
            <ul>
                {
                    itemCard.map((item)=>(<li>{item.card.info.name}-{"Rs."}{item.card.info.price/100}</li>))
                }
            </ul>


    </div>
    )
}

export default SwiggyRestaurantMenu;