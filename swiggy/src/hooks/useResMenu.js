import {MenuApi} from "../utils/ItemList";
import {useEffect, useState} from "react";


const useResMenu=(resid)=> {
    const [resInfo, setresInfo] = useState(null)

    useEffect(()=> {fetchMenu()},[])


    const fetchMenu = async () => {
        const dataMenu = await fetch(MenuApi+resid);
        const menu = await dataMenu.json()
        const ResData = menu.data.cards
        setresInfo(ResData)


    }
    return resInfo;
}

export default useResMenu;