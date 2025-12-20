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
            <div>
                <h1>name:{name}</h1>
                <h3>location:{location}</h3>
            </div>
        )
    }
}
export default UserClass;