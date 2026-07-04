import {BImageUrl} from "../utils/ItemList";
import Shimmer2 from "../Shimmer/Shimmer2";
import {Link} from "react-router";


const SwiggyComponents=({title,text,image_url})=>{
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer">
            <img
                className="w-full h-52 object-cover"
                src={BImageUrl + image_url}
                alt="Restaurant"
            />

            <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>

                <p className="text-gray-600 mt-2 whitespace-pre-line">
                    {text}
                </p>
            </div>
        </div>
    )
}

export const SwiggyCard = ({ DataCard }) => {
    if (DataCard.length === 0) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({ length: 10 }).map((_, index) => (
                    <Shimmer2 key={index} />
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {DataCard.map((item) => {
                const itemSwiggy = item?.info;

                return (
                    <Link
                        key={itemSwiggy?.id}
                        to={"/restaurants/" + itemSwiggy?.id}
                    >
                        <SwiggyComponents
                            title={itemSwiggy?.name}
                            text={`Area: ${itemSwiggy?.areaName}
                            Rating: ${itemSwiggy?.avgRatingString}`}
                            image_url={itemSwiggy?.cloudinaryImageId}
                        />
                    </Link>
                );
            })}
        </div>
    );
};