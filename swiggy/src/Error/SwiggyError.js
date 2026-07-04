import {useRouteError} from "react-router";

const SwiggyError=()=>{
    const error=useRouteError()
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-xl rounded-xl p-10 text-center max-w-md">
                <h1 className="text-6xl font-bold text-red-500">Oops!</h1>

                <p className="text-2xl font-semibold text-gray-800 mt-4">
                    Something went wrong
                </p>

                <p className="text-lg text-gray-600 mt-2">
                    Error Code: {error?.status}
                </p>

                <p className="text-gray-500 mt-1">
                    {error?.statusText || "Unexpected Error"}
                </p>

                <button
                    onClick={() => window.location.href = "/"}
                    className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg"
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
}

export default SwiggyError