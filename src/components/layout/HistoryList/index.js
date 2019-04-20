import React from 'react'

import {
  Wrapper,
  Title,
  List,
  HeaderRow,
  Row,
  Item,
  Important,
  Purpose,
  Money,
} from './styled'

export default () => (
  <Wrapper>
    <Title>History List</Title>
    <List style={{ maxWidth: '100%' }}>
      <HeaderRow>
        <Item>Money</Item>
        <Purpose>Purpose</Purpose>
        <Item>Time</Item>
        <Item>Important</Item>
      </HeaderRow>

      <Row>
        <Money increased>+30.000vnđ</Money>
        <Purpose>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and
        </Purpose>
        <Item>{Date.now()}</Item>
        <Important type="high">
          <span>Medium</span>
        </Important>
      </Row>
      <Row>
        <Money>-30.000vnđ</Money>
        <Purpose>Lorem</Purpose>
        <Item>{Date.now()}</Item>
        <Important type="medium">
          <span>Medium</span>
        </Important>
      </Row>
      <Row>
        <Money increased>+30.000vnđ</Money>
        <Purpose>Lorem</Purpose>
        <Item>{Date.now()}</Item>
        <Important type="low">
          <span>Medium</span>
        </Important>
      </Row>
    </List>
  </Wrapper>
)
