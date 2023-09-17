import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name+'Child Constructor called')
    this.state = {
      count: 0,
    };
  }
  componentDidMount(){
    //We make API calls here
    console.log(this.props.name+'Child Component Did Mount called');
}
  render() {
    console.log(this.props.name+'Child Render called')
    const { name, location } = this.props;
    return (
      <div className="user">
        <h2>Name:{name} Class</h2>
        <h3>Location:{location}</h3>
        <h3>Count:{this.state.count}</h3>
        <button
        //Never update state variables directly
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Add
        </button>
        <div className="outer">
            <div className="inner"></div>
        </div>
      </div>
    );
  }
}

export default UserClass;
