import OrderItem from "./OrderItem";
import {Logo} from "../utils/ItemList";
import {useState} from "react";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Navbar2=()=>{
    const [logName,setlogName]= useState("LOGIN")
    const onlineStatus=useOnlineStatus()
    return(
        <nav className="w-full bg-white shadow-md border-b border-gray-200">
            <div className="w-full px-4 sm:px-6 lg:px-8 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">

                {/* Left Section */}
                <div className="flex items-center gap-8">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-16 h-16 md:w-20 md:h-20 object-cover"
                    />

                    <OrderItem />
                </div>

                {/* Middle Section */}
                <div className="flex w-full lg:w-auto items-center gap-2">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="flex-1 lg:w-80 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />

                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg">
                        Search
                    </button>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-6">
                    <p className="font-medium">
                        Status :
                        <span
                            className={`ml-1 ${
                                onlineStatus ? "text-green-600" : "text-red-600"
                            }`}
                        >
          {onlineStatus ? "🟢 Online" : "🔴 Offline"}
        </span>
                    </p>

                    <button
                        onClick={() =>
                            logName === "LOGIN"
                                ? setlogName("LOGOUT")
                                : setlogName("LOGIN")
                        }
                        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg"
                    >
                        {logName}
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default Navbar2