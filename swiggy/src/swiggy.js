import React ,{lazy,Suspense}from "react";
import Reactdom from "react-dom/client";
import "./swiggy.css"
import Navbar2 from "./components/Navbar2";
import HomePage from "./components/HomePage";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router";
import SwiggyError from "./Error/SwiggyError";
import SwiggyContact from "./Contact/SwiggyContact";
import SwiggyRestaurantMenu from "./components/SwiggyRestaurantMenu";

const SwiggyAbout= lazy(() => import("./About/SwiggyAbout"));


const AppLayOut=()=>{
    return(
        <div>
            <Navbar2/>
            <Outlet/>
        </div>
        


    )
}

const SwiggyRouter=createBrowserRouter([{
    path: "/",element:<AppLayOut />,children:[
        {path:"/",element:<HomePage/>},{
        path:"/about",element:<Suspense fallback={<h1>loading......</h1>}><SwiggyAbout/></Suspense>
        },{path:"/contact",element:<SwiggyContact/>},{path:"/restaurants/:resid",element:<SwiggyRestaurantMenu/>},{path:"/restaurants",element:<SwiggyRestaurantMenu/>}
    ],errorElement:<SwiggyError/>
}])

const root = Reactdom.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={SwiggyRouter}/>);