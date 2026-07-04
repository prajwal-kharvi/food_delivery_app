import UserClass from '../ClassBase_components/UserClass';

const swiggyAbout = () => {
    return (
        <div className="max-w-5xl mx-auto px-6 py-10">

            {/* Heading */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-orange-500">
                    About Swiggy
                </h1>

                <p className="text-gray-600 mt-4 leading-8 text-lg">
                    Being among the first few entrants, Swiggy has successfully pioneered
                    the hyperlocal commerce industry in India, launching Food Delivery in
                    2014 and Quick Commerce in 2020. Due to its pioneering status,
                    Swiggy is widely recognized as a leader in innovation in hyperlocal
                    commerce and as a brand synonymous with the categories it serves.
                </p>
            </div>

            {/* Developer Card */}
            <div className="bg-white shadow-lg rounded-xl p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    Developer
                </h2>

                <UserClass
                    name={"Prajwal"}
                    location={"Kundapur"}
                />
            </div>

        </div>
    )
}

export default swiggyAbout;