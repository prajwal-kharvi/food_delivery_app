import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    render() {
        const{name,location}=this.props;

        return (
            <div className="bg-gray-100 rounded-xl shadow-md p-6 max-w-sm mx-auto">
                <h1 className="text-2xl font-bold text-orange-500 mb-3">
                    {name}
                </h1>

                <h3 className="text-lg text-gray-700">
                    📍 {location}
                </h3>
            </div>
        );
    }
}
export default UserClass;