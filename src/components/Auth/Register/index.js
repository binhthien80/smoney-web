import React from 'react'
import {
  Wrapper,
  Form,
  Title,
  Logo,
  Input,
  Submit,
  StyledLink,
  Label,
  Select,
} from '../styled.common'

export default ({ onChange, onSubmit }) => (
  <Wrapper>
    <div>
      <Form onSubmit={onSubmit}>
        <Logo width="60px" height="60px" />
        <Title>Login</Title>
        <Input
          name="username"
          placeholder="Full Name"
          // error=""
          onChange={onChange}
        />
        <Input name="email" placeholder="Email" error="" onChange={onChange} />
        <Input
          name="new-password"
          placeholder="New password"
          type="password"
          // error=""
          onChange={onChange}
        />
        <Input
          name="confirm-password"
          placeholder="Confirm password"
          type="password"
          error=""
          onChange={onChange}
        />
        <Select name="gender" onChange={onChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
        <Label>Salary</Label>
        <Input name="salary" type="number" error="" onChange={onChange} />
        <Label>Salary Date</Label>
        <Input name="salary-date" type="date" error="" onChange={onChange} />
        <Label>Birthday</Label>
        <Input name="birthday" type="date" error="" onChange={onChange} />
        <Submit type="submit" />
        <StyledLink to="/login">Already have account?</StyledLink>
      </Form>
    </div>
  </Wrapper>
)
