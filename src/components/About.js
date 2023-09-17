import React from "react";
import UserClass from "./UserClass";

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
            <UserClass/>
            </div>
        )
    }
}


export default About