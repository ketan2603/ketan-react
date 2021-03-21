import React, { Component } from "react";
import { Modal,Button,Form,Input,Select,Radio,DatePicker } from "antd";
import moment from "moment";
const formItemLayout = {
    labelCol: { xs: 24, sm: 24, md: 24, lg: 8 },
    wrapperCol: { xs: 24, sm: 24, md: 24, lg: 16 }
  };
 class AddEditFamilyMember extends Component {
  constructor() {
    super();
    this.state = {

      cityList:[],
      familyList: [],
      familyNameList: [],
      currenCity: {},
      reletionshiplist:[
        {
          reletionship_id:1,
          reletionship_name:"પોતે"
        },
        {
          reletionship_id:2,
          reletionship_name:"પત્નિ"
        },
        {
          reletionship_id:3,
          reletionship_name:"પુત્ર"
        },
        {
          reletionship_id:4,
          reletionship_name:"પુત્રવધૂ"
        },
        {
          reletionship_id:5,
          reletionship_name:"પોત્ર"
        },
        {
          reletionship_id:6,
          reletionship_name:"પૌત્રી"
        }
      ],
    }
  }
  callAlllist = async(values) => {
    console.log("values",values)
    // await fetch('http://localhost:4444/city/list', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({zone_id:values.zone_id}),
    // }).then((response) => response.json())
    //   .then((responseJson) => {
    //     console.log(",responseJson", responseJson)
    //     this.setState({ cityList: responseJson })
    //     return responseJson;
    //   }).catch((error) => {
    //     console.error(error);
    //   });
    //   const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ ...values })
    // };
    // console.log(requestOptions.body)
    //     const response = await fetch('http://localhost:4444/city/list', requestOptions);
    //     // const data = await response.json();
    //     console.log("dklajsdlfjksdlj",response)
        const response = await fetch(`http://localhost:4444/city/list?zone_id=${values.zone_id}`);
        const data = await response.json();
        console.log("dklajsdlfjksdlj",data)
        this.setState({ cityList: data })

  }
  getFamilyName(values, curren_City) {
    // this.setState({ currenCity: curren_City })
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
        // this.props.modalVisibleFamilyMemberFunc(false)
        this.setState({ familyNameList: responseJson })
        return responseJson;
      }).catch((error) => {
        console.error(error);
      });
  }
  insertFamilyMemberData =async (values)=>{
    return fetch('http://localhost:4444/family/memer/add', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(",responseJson", responseJson)
        this.props.modalVisibleFamilyMemberFunc(false)
        // this.setState({ familyNameList: responseJson })
        return responseJson;
      }).catch((error) => {
        console.error(error);
      });
  }
  handleSaveFamilyMember= async (e, form) => {
    e.preventDefault();
    form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        try {
            if (values.dob) {
                values.dob = moment(values.dob).toISOString(true);
              }
          await this.insertFamilyMemberData(values)
         console.log("ljljljlj",values)
        } catch (error) {
          this.allStore.globals.responseMessageHandler(error);
          this.isBtnLoading = false;
        }
      }
    });
  };
  render() {
    const {
        form,
        zoneList=[],
        isFamilyMemberModalVisible,
      } = this.props;
      console.log(this.props)
    const FormItem = Form.Item;
    const { Option } = Select;
    const { getFieldDecorator } = form;
    return (
        <Modal
        visible={isFamilyMemberModalVisible}
        destroyOnClose={true}
        onCancel={() => this.props.modalVisibleFamilyMemberFunc(false)}
        title={
          'Family Name'
        }
        footer={[
          <Button
            // disabled={equipment.isBtnLoading}
            key="cancel"
            title="Cancel"
            onClick={() => this.props.modalVisibleFamilyMemberFunc(false)}
          >
            {"cancel" }
          </Button>,
          <Button
            // loading={equipment.isBtnLoading}
            key="submit"
            type="primary"
            htmlType="submit"
            title="Submit"
            onClick={(e) => this.handleSaveFamilyMember(e, form)}
          >
            {"submit" }
          </Button>
        ]}
      >
         <Form>
         <FormItem {...formItemLayout} label={"Zone"}>
            {getFieldDecorator("zone_id", {
              initialValue: undefined,
              rules: [
                {
                  required: true,
                  message: "Select Zone" 
                }
              ]
            })(
              <Select
                dropdownMatchSelectWidth={false}
                optionFilterProp="children"
                showSearch
                placeholder={ "Select" }
                onChange={(zode_id) => {
                  const zoneValue={
                    zone_id:zode_id
                  }
                  this.callAlllist(zoneValue);
                }}
              >
                {zoneList.map((item) => {
                  return (
                    <Option key={item.zode_id} value={item.zode_id}>
                      {item.zone_name}
                    </Option>
                  );
                })}
              </Select>
            )}
          </FormItem>
         <FormItem {...formItemLayout} label={"City"}>
            {getFieldDecorator("city_id", {
              initialValue: undefined,
              rules: [
                {
                  required: true,
                  message: "Select city" 
                }
              ]
            })(
              <Select
                dropdownMatchSelectWidth={false}
                optionFilterProp="children"
                showSearch
                placeholder={ "Select" }
                onChange={(city_id) => {
                  const cityValue={
                    city_id:city_id
                  }
                  this.getFamilyName(cityValue);
                }}
              >
                {this.state.cityList.map((item) => {
                  return (
                    <Option key={item.city_id} value={item.city_id}>
                      {item.city_name}
                    </Option>
                  );
                })}
              </Select>
            )}
          </FormItem>
         <FormItem {...formItemLayout} label={"Family Name"}>
            {getFieldDecorator("family_id", {
              initialValue: undefined,
              rules: [
                {
                  required: true,
                  message: "Select Family Name" 
                }
              ]
            })(
              <Select
                dropdownMatchSelectWidth={false}
                optionFilterProp="children"
                showSearch
                placeholder={ "Select" }
                // onChange={(city_id) => {
                //   const cityValue={
                //     city_id:city_id
                //   }
                //   this.getFamilyName(cityValue);
                // }}
              >
                {this.state.familyNameList.map((item) => {
                  return (
                    <Option key={item.family_id} value={item.family_id}>
                      {item.family_name}
                    </Option>
                  );
                })}
              </Select>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label={"Reletionship"}>
            {getFieldDecorator("reletionship_id", {
              initialValue: undefined,
              rules: [
                {
                  required: true,
                  message: "Select reletionship" 
                }
              ]
            })(
              <Select
                dropdownMatchSelectWidth={false}
                optionFilterProp="children"
                showSearch
                placeholder={ "Select" }
                // onChange={(city_id) => {
                //   const cityValue={
                //     city_id:city_id
                //   }
                //   this.getFamilyName(cityValue);
                // }}
              >
                {this.state.reletionshiplist.map((item) => {
                  return (
                    <Option key={item.reletionship_id} value={item.reletionship_id}>
                      {item.reletionship_name}
                    </Option>
                  );
                })}
              </Select>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label={"Native Place"}>
            {getFieldDecorator("nativeplace_name", {
              initialValue: "",
              rules: [
                {
                  whitespace: true,
                  required: true,
                  message: "please Enter native place name"
                }
              ]
            })(<Input placeholder={"Enter nativeplace name"}  />)}
          </FormItem>
          <FormItem {...formItemLayout} label={"Person Name"}>
            {getFieldDecorator("person_name", {
              initialValue: "",
              rules: [
                {
                  whitespace: true,
                  required: true,
                  message: "please Enter person name"
                }
              ]
            })(<Input placeholder={"Enter person name"}  />)}
          </FormItem>
          <FormItem {...formItemLayout} label={"Mobile Number"}>
            {getFieldDecorator("mobile_number", {
              initialValue: "",
              rules: [
                {
                  whitespace: true,
                  required: true,
                  message: "please Enter mobile number"
                }
              ]
            })(<Input type="number" placeholder={"Enter mobile number"}  />)}
          </FormItem>
          <FormItem {...formItemLayout} label={"Education"}>
            {getFieldDecorator("education", {
              initialValue: "",
              rules: [
                {
                  whitespace: true,
                  required: true,
                  message: "please Enter education"
                }
              ]
            })(<Input placeholder={"Enter education"}  />)}
          </FormItem>
          <FormItem {...formItemLayout} label={"Address"}>
            {getFieldDecorator("address", {
              initialValue: "",
              rules: [
                {
                  whitespace: true,
                  required: true,
                  message: "please Enter address"
                }
              ]
            })(<Input placeholder={"Enter address"}  />)}
          </FormItem>
          <FormItem {...formItemLayout} label={"Married status"}>
            {getFieldDecorator("married_status", {
              initialValue: "no",
              rules: [
               
              ]
            })(<Radio.Group >
      <Radio.Button value={'પરણિત'}>પરણિત</Radio.Button>
      <Radio.Button value={'અપરણિત'}>અપરણિત</Radio.Button>
    </Radio.Group>)}
          </FormItem>
          {form.getFieldValue("married_status")==='yes'?<FormItem {...formItemLayout} label={"wife address"}>
            {getFieldDecorator("wife_address", {
              initialValue: "",
              rules: [
                {
                  whitespace: true,
                  required: true,
                  message: "please Enter wife address"
                }
              ]
            })(<Input placeholder={"Enter wife address"}  />)}
          </FormItem>:null}
          <FormItem {...formItemLayout} label={"dob Date"}>
          {getFieldDecorator("dob", {
            initialValue: undefined,
            rules: [
              {
                required: false,
                message: "Please enter dob Date",
              },
            ],
          })(<DatePicker style={{ width: "100%" }} format="DD/MM/YYYY" />)}
        </FormItem>
        </Form>
      </Modal>
    );
  }
}
export default Form.create()(AddEditFamilyMember);