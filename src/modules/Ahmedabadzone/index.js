import React, { Component } from "react";
import ContainerLayout from "globals/components/ContainerLayout";
import { Button, Table, Collapse } from "antd";
import { withRouter } from "react-router-dom";
const { Panel } = Collapse;

const columns = [
  {
    title: "કુટુંબના મુય યિ તથા પિરવારના સયોનું નામ",
    dataIndex: "person_name",
    key: "person_name",
    render: text => text
  },
  {
    title: "જન્મ તારીખ",
    dataIndex: "dob",
    key: "dob"
  },
  {
    title: "ભણતર",
    dataIndex: "education",
    key: "education"
  },
  {
    title: "મૂળ વતન",
    dataIndex: "native place",
    key: "native place"
  },
  {
    title: "લગ્ન સ્થિતિ",
    dataIndex: "married_status",
    key: "married_status"
  },
  {
    title: "સાસરી",
    dataIndex: "wife_address",
    key: "wife_address"
  },
  {
    title: "મોબાઇલ નં",
    dataIndex: "mobile_number",
    key: "mobile_number"
  },
  {
    title: "વ્ય નું સરનામું",
    dataIndex: "office_address",
    key: "office_address"
  },
  {
    title: "સરનામું",
    dataIndex: "address",
    key: "address"
  }
];
 class Ahmedabadzone extends Component {
  constructor() {
    super();
    this.state = {
      cityList: [],
      familyList: [],
      familyDataList: [],
      currenCity: {}
    }
  }
  
  componentDidMount = () => {
    this.callAllQuestionAPi()
  }
  callAllQuestionAPi = (values={}) => {
    const paramsData = this.props && this.props.match && this.props.match.params
    values.zone_id = Number(paramsData.zone_id)
    return fetch('http://localhost:4444/city/list', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((response) => response.json())
      .then((responseJson) => {
        // console.log(",responseJson", responseJson)
        this.setState({ cityList: responseJson })
        return responseJson;
      }).catch((error) => {
        console.error(error);
      });
  }
  getUseDetails(values, curren_City) {
    this.setState({ currenCity: curren_City })
    return fetch('http://localhost:4444/city/getFamilybyCity', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(",responseJson", responseJson)
        this.setState({ familyList: responseJson })
        return responseJson;
      }).catch((error) => {
        console.error(error);
      });
  }
  getFamilyData(values) {
    return fetch('http://localhost:4444/city/getUserbyCity', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(",responseJson", responseJson)
        this.setState({ familyDataList: responseJson })
        return responseJson;
      }).catch((error) => {
        console.error(error);
      });
  }
  // static getDerivedStateFromProps(props, state) {
  //  console.log("sdfsdf",props)
  //  console.log("sdfoooosdf",state)
  //  const {params={}}=props.match;
  //   const values={zone_id : Number(params.zone_id)}
  //  this.callAllQuestionAPi(values)
  // }
  render() {
    const { cityList = [], familyList = [], familyDataList = [], currenCity = {} } = this.state;
    console.log(",jjkjkjj",this.props && this.props.match && this.props.match.params)
    return (
      <ContainerLayout>
        <span>
          {cityList.map((city, index) =>
            <Button key={index} style={{ marginRight: 10, fontSize: 20, marginTop: 10 }}
              type="primary" onClick={() => this.getUseDetails({ city_id: city.city_id }, city)}>
              {city.city_name}
            </Button>)}
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10
          }}
        >
          <h1 style={{ color: "red", fontSize: 35 }}>{currenCity.city_name}</h1>
        </div>
        {/* <div style={{ backgroundColor: "orange" }}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ position: "none" }}
          />
        </div> */}
        <div style={{ marginTop: 30 }}>
          <Collapse accordion expandIconPosition={"right"} onChange={(key) => this.getFamilyData({ family_id: key })}>
            {familyList.map((familyItem, index) =>
              <Panel header={familyItem.family_name} key={familyItem.family_id} >
                <div style={{ backgroundColor: "gray" }}>
                  <Table
                    columns={columns}
                    dataSource={familyDataList}
                    pagination={{ position: "none" }}
                  />
                </div>
              </Panel>
            )}

          </Collapse>
        </div>
      </ContainerLayout>
    );
  }
}
export default withRouter(Ahmedabadzone)