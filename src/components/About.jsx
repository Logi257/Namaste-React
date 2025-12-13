import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor");
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About Us</h1>
        LoggedIn User:
        <UserContext.Consumer>
          {({ loggedUser }) => (
            <h1 className="text-lg font-bold">{loggedUser}</h1>
          )}
        </UserContext.Consumer>
        <UserClass />
      </div>
    );
  }
}

export default About;
