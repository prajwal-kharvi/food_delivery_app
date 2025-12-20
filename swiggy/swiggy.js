import React ,{lazy,Suspense}from "react";
import Reactdom from "react-dom";
import Navbar2 from "./Navbar2";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HomePage from "./HomePage";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router";
import SwiggyError from "./SwiggyError";
import SwiggyContact from "./SwiggyContact";
import SwiggyRestaurantMenu from "./SwiggyRestaurantMenu";

const SwiggyAbout= lazy(() => import("./SwiggyAbout"));


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