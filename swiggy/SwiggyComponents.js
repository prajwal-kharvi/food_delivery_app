import {useState} from "react";
import {BImageUrl} from "./ItemList";
import Shimmer2 from "./Shimmer2";
import {Link} from "react-router";


const SwiggyComponents=({title,text,image_url})=>{
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top"  alt="Swiggy-img" src={BImageUrl+image_url}/>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{text}</p>
                </div>
            </div>

        </div>
    )
}

export const SwiggyCard=({DataCard})=>{
    const ApiResult=DataCard.map((item,index)=>{
        let itemSwiggy=item?.card?.card?.info;
        return(
         <Link  key={itemSwiggy?.id} to={"/restaurants/"+itemSwiggy?.id}>  <SwiggyComponents  title={itemSwiggy?.name} text={"area: " +
             itemSwiggy?.areaName +
             "\n" +
             "rating: " +
             itemSwiggy?.avgRatingString
         } image_url={itemSwiggy?.cloudinaryImageId}/></Link>


        )

    })
    if(ApiResult.length===0) {
        return (
            <div className="row row-cols-3">{new Array(10).fill(<Shimmer2/>)}</div>
        )
    } else{
        return (<div className="row row-cols-3 g-4">{ApiResult}</div>
        )
    }
    }