import React from 'react'
import styled from 'styled-components'
import notifyDefault from './notifyDefault'
import { Button, notification } from 'antd';
import _ from 'lodash'

const ButtonNotification = styled(Button)`
   ${ props => props.stylebutton }
`

export default class Notification extends React.Component {
    constructor (props) {
      super()
      _.defaultsDeep(props.config, notifyDefault)
    }

    openNotification = () => {
      const {
        props: {
            config
        }
      } = this
      notification[`${config.type}`]({
       ...config
      });
    };

    render () {
        const { 
            openNotification,
            props: {
                config
            }
        } = this
        return <ButtonNotification onClick={openNotification} stylebutton={config.styleButton}>{config.content}</ButtonNotification>
    }
}