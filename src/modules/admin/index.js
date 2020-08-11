import React, { Component } from "react";
import ContainerLayout from "globals/components/ContainerLayout";
import AddeditPerson from "./modal/addEditPersion.js";

export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
      zoneList: [],
      cityList:[],
      familyList: [],
      familyDataList: [],
      currenCity: {}
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
  
  render() {
    return (
      <ContainerLayout>
        <div className="home">
       <AddeditPerson {...this.state}/>
        </div>
      </ContainerLayout>
    );
  }
}
