import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Wrapper, StyleMenu, StyleIcon, StyleDropDown, StyleA } from './styled';

class SideBar extends Component {
    render() {
        const menu = (
            <Menu>
              <Menu.Item key="1">1st menu item</Menu.Item>
              <Menu.Item key="2">2nd memu item</Menu.Item>
              <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>
        )
        return (
            <Wrapper>
                <StyleMenu>
                    <StyleIcon type="menu-unfold" />
                    <StyleDropDown overlay={menu}>
                        <a className="ant-dropdown-link" href="/#">
                            Hover me <Icon type="down" />
                        </a>
                    </StyleDropDown>
                </StyleMenu>
                <StyleMenu><StyleIcon type="profile" />
                    <StyleA href="profile">Profile</StyleA>
                </StyleMenu>
                <StyleMenu><StyleIcon type="logout" />
                    <StyleA href="logout">Logout</StyleA>
                </StyleMenu>
            </Wrapper>
        );
    }
}


export default SideBar;
