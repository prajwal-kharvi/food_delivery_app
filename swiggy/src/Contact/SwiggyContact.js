const SwiggyContact=()=>{
    return(
        <div className="max-w-4xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-xl">

            <h1 className="text-4xl font-bold text-center text-orange-500 mb-8">
                Customer Support
            </h1>

            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                    📧 Email
                </h2>

                <a
                    href="mailto:support@swiggy.in"
                    className="text-blue-600 hover:underline"
                >
                    support@swiggy.in
                </a>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    🏢 Corporate Office
                </h2>

                <p className="text-gray-600 leading-7">
                    No. 55, Sy No. 8-14, Ground Floor, I & J Block,
                    Embassy TechVillage, Outer Ring Road,
                    Devarbisanahalli, Bengaluru – 560103,
                    Karnataka, India.
                    <br /><br />
                    <span className="font-medium">
        Corporate Identity Number:
      </span>{" "}
                    U74110KA2013PLC096530
                    <br />
                    <span className="font-medium">
        Registration Number:
      </span>{" "}
                    096530
                </p>
            </div>

        </div>
    )
}

export default SwiggyContact;