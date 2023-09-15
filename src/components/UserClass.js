import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
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
      </div>
    );
  }
}

export default UserClass;
