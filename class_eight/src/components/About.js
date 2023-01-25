import React from "react";
// import { Outlet } from 'react-router-dom'
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
class About extends React.Component {
  constructor(props){
    super(props);

    // console.log("Parent constructor")
  }
  // call api inside in this, because this will call after render
 async componentDidMount(){

    // console.log("Parent componentDidMount")
  }

  render() {
    // console.log("Parent render")
    return (
      <div>
        <h1>About us Page</h1>
        <p>This is about us page</p>
        <ProfileFunctionalComponent name={"Rahul"} />
        {/* <Profile name={"First child"} /> */}
        {/* <Profile name={"Second child"} /> */}
      </div>
    );
  }
}

export default About;
