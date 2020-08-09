import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";
import "./sider.style.scss";
import { ReactComponent as Family } from "../../../assets/images/family.svg";
import { ReactComponent as ContentUs } from "../../../assets/images/customer-service.svg";
const { SubMenu } = Menu;

class MainMenu extends Component {
  render() {
    return (
      <Menu
        className="globalMenu"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link to="/home">
            <Icon type="home" />
            હોમ
          </Link>
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon component={Family} />
              ફેમિલી ડિરેક્ટરી
            </span>
          }
        >
          <Menu.Item key="setting:2">
            <Link to="/ahmedabad">અમદાવાદ ઝોન</Link>
          </Menu.Item>
          <Menu.Item key="setting:4">વડોદરા ઝોન</Menu.Item>
          <Menu.Item key="setting:5">ભરૂચ ઝોન</Menu.Item>
          <Menu.Item key="setting:6">કરજણ ઝોન</Menu.Item>
          <Menu.Item key="setting:8">પાદરા ઝોન</Menu.Item>
        </SubMenu>
        <Menu.Item key="setting:3">
          <Link to="/history">
            <Icon component={ContentUs} />
            અમારા વિશે
          </Link>
        </Menu.Item>
        <Menu.Item key="setting:9">
        <Link to="/gallery">
        <span className="gallery-container">
            <Icon component={ContentUs} />
            ગેલેરી
            </span>
          </Link>
        </Menu.Item>
        <Menu.Item key="setting:1">
          <Link to="/contact-us">
            <Icon component={ContentUs} />
            કમીટી સંપર્ક
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default MainMenu;
