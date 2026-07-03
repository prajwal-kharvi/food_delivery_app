import {useState, useEffect} from "react";
import {SwiggyApiCall} from "./ItemList";
import {SwiggyCard} from "./SwiggyComponents";
import useOnlineStatus from "./useOnlineStatus";



const HomePage=()=>{
    const[SwiggyData, setSwiggyData] = useState([]);

    useEffect(()=>{MakeApiCall(SwiggyApiCall)},[])


    const MakeApiCall=async(url)=>{
        const response = await fetch(url);
        const Data = await response.json();
        const filterSwiggy= Data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        console.log(filterSwiggy)
        setSwiggyData(filterSwiggy);

    }

    const onlineStatus =useOnlineStatus();

    if(onlineStatus===false)return <h1>Internet Connection Error</h1>
    return (
        <div>
            <SwiggyCard key={1} DataCard={SwiggyData}/>


        </div>
    )
}



export default HomePage