import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
class About extends React.Component {
    constructor(props) {
        super(props);
        console.log('Parent Constructor called')
    }
    componentDidMount(){
        console.log('Parent Component Did Mount called');
    }
    render(){
        console.log('Parent Render called')
        return(
            <div>
            <h1>About Us</h1>
            <div>
                <UserContext.Consumer>
                    {({LoggedInUser}) => <h1 className="text-lg">{LoggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <UserClass/>
            </div>
        )
    }
}


export default About