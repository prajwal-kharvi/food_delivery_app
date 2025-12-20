
const lat=12.9628669
const lng=77.57750899999999

export const SwiggyItems = ["Home", "About", "Contact"];

export const SwiggyPathMap = {Home: "/", About: "/about", Contact: "/contact"}

export  const BImageUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

export const SwiggyApiCall= `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null`

export const MenuApi= `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId={resid}&catalog_qa=undefined&query=Biryani&submitAction=ENTER`