import React, { Component } from "react";
import { Modal,Button,Form,Input,Select } from "antd";
const formItemLayout = {
    labelCol: { xs: 24, sm: 24, md: 24, lg: 8 },
    wrapperCol: { xs: 24, sm: 24, md: 24, lg: 16 }
  };
 class Admin extends Component {
  constructor() {
    super();
    this.state = {
      cityList:[],
      familyList: [],
      familyDataList: [],
      currenCity: {}
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
  render() {
    const {
        form,
        zoneList=[]
      } = this.props;
      console.log(this.props)
    const FormItem = Form.Item;
    const { Option } = Select;
    const { getFieldDecorator } = form;
    return (
        <Modal
        visible={true}
        destroyOnClose={true}
        // onCancel={() => equipment.handleBrandModalCancel(false)}
        title={
          'Family Name'
        }
        footer={[
          <Button
            // disabled={equipment.isBtnLoading}
            key="cancel"
            title="Cancel"
            // onClick={() => equipment.handleBrandModalCancel(form)}
          >
            {"cancel" }
          </Button>,
          <Button
            // loading={equipment.isBtnLoading}
            key="submit"
            type="primary"
            htmlType="submit"
            title="Submit"
            // onClick={(e) => equipment.handleSaveBrand(e, form)}
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
            {getFieldDecorator("person_name", {
              initialValue: "",
              rules: [
                {
                  whitespace: true,
                  required: true,
                  message: "please"
                }
              ]
            })(<Input placeholder={"Enter name"}  />)}
          </FormItem>
       
         
        </Form>
      </Modal>
    );
  }
}
export default Form.create()(Admin);