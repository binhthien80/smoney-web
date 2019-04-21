import React from 'react'
import * as STYLE from './style'
import logo from './../../../assets/images/logo02.svg'

export default class UserInfo extends React.Component {
    render () {
        return <div>
        <STYLE.Logo>
            <img src={logo} alt="logo"/>
            <span>Manage Smoney</span>
        </STYLE.Logo>
        <STYLE.UserInfo>
            <img src="http://www.urbanui.com/equinox/template/images/faces/face28.jpg" alt="avt"/>
            <p>Edwin Ballard</p>
        </STYLE.UserInfo>
        </div>
    }
}