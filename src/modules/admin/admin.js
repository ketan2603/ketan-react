import React, { Component } from "react";
import ContainerLayout from "globals/components/ContainerLayout";
import AddeditPerson from "./modal/addEditPersion.js";
import AddEditFamilyMember from "./modal/addEditFamilyMember";
import {  Button  } from "antd";
export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
      zoneList: [],
      cityList:[],
      familyList: [],
      familyDataList: [],
      currenCity: {},
      isFamilyNameModalVisible:false,
      isFamilyMemberModalVisible:false
    }
  }
  componentDidMount = () => {
    this.callAllZonelist()
  }
  callAllZonelist = (values={}) => {
    return fetch('http://localhost:4444/zone/list', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(",responseJson", responseJson)
        this.setState({ zoneList: responseJson })
        return responseJson;
      }).catch((error) => {
        console.error(error);
      });


  }
  modalVisibleFunc = (visible) => {
    this.setState({ isFamilyNameModalVisible: visible });
   
  };
  modalVisibleFamilyMemberFunc = (visible) => {
    this.setState({ isFamilyMemberModalVisible: visible });
   
  };
  
  render() {
    return (
      <ContainerLayout>
        <div className="home">
        <span
            style={{
              display: "flex",
              // justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Button
              icon="plus"
              size="large"
              type="primary"
              marginleft="15px"
              onClick={(e) => {
                this.modalVisibleFunc(true);
              }}
            >
              ADD Family Name
            </Button>
            <Button
              icon="plus"
              size="large"
              type="primary"
              marginleft="15px"
              onClick={(e) => {
                this.modalVisibleFamilyMemberFunc(true);
              }}
            >
              ADD Family Member
            </Button>
           
          </span>
       <AddeditPerson 
       {...this.state}
         modalVisibleFunc={this.modalVisibleFunc}
       />
       <AddEditFamilyMember 
       {...this.state}
       modalVisibleFamilyMemberFunc={this.modalVisibleFamilyMemberFunc}
       />
        </div>
      </ContainerLayout>
    );
  }
}