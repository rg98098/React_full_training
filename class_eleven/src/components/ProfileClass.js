import React from "react";

class Profile extends React.Component {
  
  constructor(props){
    super(props)
    // console.log("props",this.props)
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Dummy Location"
      }
    }
    // console.log("child constructor.." + this.props.name)
  }
   componentDidMount(){
    this.timer = setInterval(()=>{
      console.log("Hello Rahul..");
    },1000)
    // const data = await fetch("https://api.github.com/users/rg98098");
    // const user = await data.json();
    // console.log(user)
    // this.setState({
    //   userInfo : user
    // })
    // console.log("child compountDidMount"+ this.props.name)
  }

  componentDidUpdate(prevProps,prevState){

    // if(this.state.count != prevState.count){

    // }
    // console.log("child componentDidUpdate"+ this.props.name)
  }

  componentWillUnmount(){
    clearInterval(this.timer)
    // console.log("componentWillUnmount")
  }
  // you can not create class component without a render method
  render() {
    // console.log("child render.."+ this.props.name)
    return (
      <div>
        <h1>Profile class component</h1>
        {/* <img src={this.state.userInfo.avatar_url} alt="profile image"/> */}
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
      </div>
    );
  }
}

export default Profile;
