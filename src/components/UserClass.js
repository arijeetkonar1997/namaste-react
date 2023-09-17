import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    console.log("Child Constructor called")
    super(props);
    this.state = {
      name: "",
      location: "",
      bio: "",
      avatar_url: "",
    };
  }
  async componentDidMount() {
    //We make API calls here
    const data = await fetch("https://api.github.com/users/arijeetkonar1997");
    const json = await data.json();
    console.log("Child ComponentDidMount called")
    this.setState({
      name: json.name,
      location: json.location,
      bio: json.bio,
      avatar_url: json.avatar_url,
    });
  }

  componentDidUpdate(){
    console.log("Child Component Did Update")
  }

  componentWillUnmount(){
    console.log("Child Component unmount called")
   }
  render() {
    return (
      <div className="user">
        <img src={this.state.avatar_url} alt="Dummy-Photo" />
        <h2>Name: {this.state.name}</h2>
        <h3>Location: {this.state.location}</h3>
        <h3>Bio: {this.state.bio}</h3>
      </div>
    );
  }
}

export default UserClass;


/*
* ---MOUNTING---
*  constructor(dummy)
*  Render(dummy)
*  DOM <HTML Dummy>
* Component Did Mount
*   <API Call>
*   <this.setState> -> State variable is updated
*
* ---UPDATE---
*   render(API Data)
*   DOM <HTML API Data>
*   Component DidUpdate
*/