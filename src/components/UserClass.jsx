import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        company: "",
        location: "",
        img: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Logi257");
    const json = await data.json();

    this.setState({

        userInfo:json

    });
  }
  componentDidUpdate(){
    console.log("Component Did update");
    
  }
  componentWillUnmount(){
     console.log("Component will be Unmounted");
  }
  render() {
    const { name, location, company, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <div>
          <img src={avatar_url} alt="" />
        </div>
        <div>
        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
        <h4>Company : {company}</h4>
        
        </div>
      </div>
    );
  }
}

export default UserClass;


/***
 * ----- Mounting ----
 * 
 * Constructor (no data)
 * Render  (no data)
 *          <Html no data>
 * Compount did mount
 * <api call>
 * <this.setstate -> State variable is updated
 * 
 * 
 * --- Update 
 * 
 * render(API data)
 *  <Html new api data>
 * componentdid update
 * 
 * 
 * 
 */