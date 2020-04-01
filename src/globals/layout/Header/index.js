import React, { Component } from "react";
import { Layout } from "antd";
import Menu from "../Sider";
import Logo from "../../../assets/images/marusamaj8.png";
import "./header.style.scss";
const { Header } = Layout;

class MainHeader extends Component {
  render() {
    return (
      <>
        <Header className="logo-header" style={{ backgroundColor: "white" }}>
          {/* <img
            src="http://www.mehsana42golprajapatisamaj.org/wp-content/uploads/2016/12/final-web-logo.png"
            alt="Mehsana 42 Gol Prajapati Samaj"
          /> */}
          <img
            alt="સમસ્ત મારુ પ્રજાપતિ પ્રગતિ મંડળ વડોદરા"
            src={Logo}
            style={{ height: 138, width: "auto" }}
          />
          <span
            style={{
              marginLeft: 10,
              color: "red",
              fontWeight: "bold",
              fontSize: 60
            }}
          >
            સમસ્ત મારુ પ્રજાપતિ પ્રગતિ મંડળ વડોદરા
          </span>
        </Header>
        <Header className="globalHeader">
          <Menu />
        </Header>
      </>
    );
  }
}

export default MainHeader;
