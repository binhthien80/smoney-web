import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Wrapper, StyleMenu, StyleIcon, StyleDropDown } from './styled';

class SideBar extends Component {
    render() {
        const menu = (
            <Menu>
              <Menu.Item key="1"><StyleIcon type="money-collect" />
                Earn Cash
            </Menu.Item>
              <Menu.Item key="2"><StyleIcon type="down" />
              Spend Cash</Menu.Item>
              <Menu.Item key="3"><StyleIcon type="cloud" />
              Save Cash</Menu.Item>
            </Menu>
        )
        return (
            <Wrapper>
                <StyleMenu>
                    <StyleIcon type="menu-unfold" />
                    <StyleDropDown overlay={menu}>
                        <a className="ant-dropdown-link" href="/#">
                            Options <Icon type="down" />
                        </a>
                    </StyleDropDown>
                </StyleMenu>
            </Wrapper>
        );
    }
}
export default SideBar;
