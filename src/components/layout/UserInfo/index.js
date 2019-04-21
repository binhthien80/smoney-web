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
            <img src="https://avatars1.githubusercontent.com/u/22871320?s=460&v=4" />
            <p>Duc Mon</p>
        </STYLE.UserInfo>
        </div>
    }
}