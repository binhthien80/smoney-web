import React from 'react'
import { Menu, Icon, message, Avatar, Badge } from 'antd'
import { Search, TopNav, DropdownTopNav, ButtonTopNav, ButtonProfile } from './style'
const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
};
  
const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd memu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
);

export default () => {
    return (
      <TopNav>
        <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
                />
        <div>
        <DropdownTopNav overlay={menu}>
            <a className="ant-dropdown-link" href="/">
            Projects<Icon type="down" />
            </a>
        </DropdownTopNav>
        <DropdownTopNav overlay={menu}>
            <a className="ant-dropdown-link" href="/">
            Projects<Icon type="down" />
            </a>
        </DropdownTopNav>
        <DropdownTopNav overlay={menu}>
            <a className="ant-dropdown-link" href="/">
            Projects<Icon type="down" />
            </a>
        </DropdownTopNav>
        <ButtonTopNav overlay={menu}>
            <a className="ant-dropdown-link" href="/">
            <span style={{ marginRight: 24 }}>
            <Badge dot> <Icon type="mail" /></Badge>
            </span>
            </a>
        </ButtonTopNav>
        <ButtonTopNav overlay={menu}>
            <a className="ant-dropdown-link" href="/">
            <span style={{ marginRight: 24 }}>
            <Badge dot> <Icon type="bell" /></Badge>
            </span>
            </a>
        </ButtonTopNav>
        <ButtonProfile overlay={menu}>
            <a className="ant-dropdown-link" href="/">
            <Avatar src="http://www.urbanui.com/equinox/template/images/faces/face28.jpg" /> Edwin Ballard <Icon type="down" />
            </a>
        </ButtonProfile>
        </div>
      </TopNav>  
    )
}
