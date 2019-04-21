import React from 'react'
import {
  Wrapper,
  Form,
  Title,
  Logo,
  Input,
  Submit,
  StyledLink,
} from '../styled.common'

export default ({ onChange, onSubmit }) => (
  <Wrapper>
    <Form onSubmit={onSubmit}>
      <Logo width="60px" height="60px" />
      <Title>Login</Title>
      <Input name="email" placeholder="Enter your email" error="" onChange={onChange} />
      <Input
        name="password"
        placeholder="Enter your password"
        type="password"
        error=""
        onChange={onChange}
      />
      <Submit type="submit" />
      <StyledLink to="/register">Create new account?</StyledLink>
    </Form>
  </Wrapper>
)
