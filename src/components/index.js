import React from 'react';
import { Row, Col } from 'antd';
import Menu from './layout/Menu';
import Main from './layout/Main';

const Layout = props => {
    console.log(11111, typeof props.children);
    return (
      <div>
        <Row>
          <Col xs={24} lg={4}>
            <Menu />
          </Col>
          <Col xs={24} lg={20}>
            <Main />
          </Col>
        </Row>
    </div>
    );
  };

export default Layout;
