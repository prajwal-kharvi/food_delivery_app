import {useState, useEffect, useCallback} from "react";
import {SwiggyApiCall} from "./ItemList";
import {data} from "react-router";
import {SwiggyCard} from "./SwiggyComponents";
import useOnlineStatus from "./useOnlineStatus";



const HomePage=()=>{
    const[SwiggyData, setSwiggyData] = useState([]);

    useEffect(()=>{MakeApiCall(SwiggyApiCall)},[])


    const MakeApiCall=async(url)=>{
        const response = await fetch(url);
        const Data = await response.json();
        // console.log(Data);
        const filterSwiggy=Data.data.cards.slice(3)
        // console.log(filterSwiggy)
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