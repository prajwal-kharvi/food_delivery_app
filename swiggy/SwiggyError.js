import {useRouteError} from "react-router";

const SwiggyError=()=>{
    const error=useRouteError()
    return (
        <div>
            <h1>OPPS!</h1>
            <p>{error.status}</p>
            <p>{error.statusText}</p>
        </div>
    )
}

export default SwiggyError