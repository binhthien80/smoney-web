import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import UserInfo from './../UserInfo'
import { Wrapper, StyleMenu, StyleIcon, StyleDropDown, StyleA } from './styled'

class SideBar extends Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="1">
          <StyleIcon type="money-collect" />
          Earn Cash
        </Menu.Item>
        <Menu.Item key="2">
          <StyleIcon type="down" />
          Spend Cash
        </Menu.Item>
        <Menu.Item key="3">
          <StyleIcon type="cloud" />
          Save Cash
        </Menu.Item>
      </Menu>
    )
    return (
      <Wrapper>
        <UserInfo />
        <StyleMenu>
          <StyleIcon type="menu-unfold" />
          <StyleDropDown overlay={menu}>
            <a
              className="ant-dropdown-link"
              onMouseOver={this.handleMouseOver}
              onMouseOut={this.handleMouseOut}
              href="/#"
            >
              Options <Icon type="down" />
            </a>
          </StyleDropDown>
        </StyleMenu>
        <StyleMenu className="profileB">
          <StyleIcon type="profile" />
          <StyleA href="profile">Profile</StyleA>
        </StyleMenu>
        <StyleMenu className="logoutB">
          <StyleIcon type="logout" />
          <StyleA href="logout">Logout</StyleA>
        </StyleMenu>
      </Wrapper>
    )
  }
}

export default SideBar
