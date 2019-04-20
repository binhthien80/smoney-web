import React from 'react'
import { Input, Menu, Dropdown, Icon, message, Avatar, Badge } from 'antd'
import styled from 'styled-components'
import theme from "./../../theme";

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

const Search = styled(Input.Search)`
    width: 350px !important;
    & > input {
        background: transparent;
        border: 1px solid ${theme.button.borderSearch};
        color: ${theme.color.subText};
    }
    & > span > i {
        color: ${theme.color.subText};
        float: right;
    }
`

const TopNav = styled.div`
    width: calc(100% / 6 * 5);
    background: ${theme.color.primary};
    position: fixed;
    top: 0;
    right: 0;
    height: 4rem;
    padding: 0 1rem;
    ${theme.flex('row', 'space-between', 'center')};
`

const DropdownTopNav = styled(Dropdown)`
    margin: 0 1rem;
    color: ${theme.color.subText};
`

const ButtonTopNav = styled(Dropdown)`
    margin: 0 1rem;
    color: ${theme.color.subText};
`

const ButtonProfile = styled(Dropdown)`
    margin: 0 1rem;
    color: ${theme.color.subText};
    padding: .6rem .5rem;
`

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
