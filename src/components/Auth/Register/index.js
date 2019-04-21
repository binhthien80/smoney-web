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
  Container,
  ContainerItem,
} from '../styled.common'

export default ({ onChange, onSubmit }) => (
  <Wrapper>
    <div>
      <Form onSubmit={onSubmit} style={{ width: '34vw' }}>
        <Logo width="60px" height="60px" />
        <Title>Login</Title>
        <Container>
          <ContainerItem>
            <Label>Fullname</Label>
            <Input
              name="username"
              placeholder="Full Name"
              // error=""
              onChange={onChange}
            />
            <Label>Email</Label>
            <Input
              name="email"
              placeholder="Email"
              error=""
              onChange={onChange}
            />
            <Label>Create password</Label>
            <Input
              name="new-password"
              placeholder="New password"
              type="password"
              // error=""
              onChange={onChange}
            />
            <Label>Confirm Password</Label>
            <Input
              name="confirm-password"
              placeholder="Confirm password"
              type="password"
              error=""
              onChange={onChange}
            />
          </ContainerItem>
          <ContainerItem>
            <Label>Gender</Label>
            <Select name="gender" onChange={onChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
            <Label>Salary</Label>
            <Input
              name="salary"
              type="number"
              placeholder="Enter your salary"
              error=""
              onChange={onChange}
            />
            <Label>Salary Date</Label>
            <Input
              name="salary-date"
              type="date"
              error=""
              onChange={onChange}
            />
            <Label>Birthday</Label>
            <Input name="birthday" type="date" error="" onChange={onChange} />
          </ContainerItem>
        </Container>
        <Submit type="submit" />
        <StyledLink to="/login">Already have account?</StyledLink>
      </Form>
    </div>
  </Wrapper>
)
