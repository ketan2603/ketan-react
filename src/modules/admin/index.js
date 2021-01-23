import React, { Component } from "react";
import ContainerLayout from "globals/components/ContainerLayout";
import AddeditPerson from "./modal/addEditPersion.js";
import AddEditFamilyMember from "./modal/addEditFamilyMember";
import {  Button  } from "antd";
export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
      username : "",
      password : "",
      //history : useHistory()
    }
  }
  // componentDidMount = () => {
  //  // this.callAllZonelist()
  // }
  // callAllZonelist = (values={}) => {
  //   return fetch('http://localhost:4444/zone/list', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(values),
  //   }).then((response) => response.json())
  //     .then((responseJson) => {
  //       console.log(",responseJson", responseJson)
  //       this.setState({ zoneList: responseJson })
  //       return responseJson;
  //     }).catch((error) => {
  //       console.error(error);
  //     });


  // }
  // modalVisibleFunc = (visible) => {
  //   this.setState({ isFamilyNameModalVisible: visible });
   
  // };
  // modalVisibleFamilyMemberFunc = (visible) => {
  //   this.setState({ isFamilyMemberModalVisible: visible });
   
  // };

  usernameChangeHandler = (event) => {
    this.setState({username : event.target.value})
  }

  passwordChangeHandler = (event) => {
    this.setState({password : event.target.value})
  }

  loginFormSubmit = (e) => {
    if(this.state.username == "admin" && this.state.password == "admin@123"){
      this.props.history.push('/Admin/Home')
    } else {
      alert("Please enter valid email & password");
    }
  }
  
  render() {
    return (
      <ContainerLayout>
        <div className="login-admin" style={{marginLeft:10}}>
          <form >
            <div style={{padding:10}}>
                <label style={{paddingRight:10}}>User Name : </label>
                <input type="text" name="username" id="username" onChange={(event) => this.usernameChangeHandler(event)}/>
            </div>
            <br></br>
            <div style={{padding:10}}>
                <label style={{paddingRight:10}}>Password : </label>
                <input type="password" name="password" id="password"onChange={(event) => this.passwordChangeHandler(event)} />
            </div>
            <div style={{padding:10}}>
              <Button
                size="large"
                type="primary"
                onClick={(e) => {
                  this.loginFormSubmit(e);
                }}
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </ContainerLayout>
    );
  }
}