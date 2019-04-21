import React from 'react'
import { Input, InputError, Wrapper } from './styled'

export { Input as InputTag }

export default ({ name, placeholder, type, onChange, error }) => (
  <Wrapper>
    <Input name={name} onChange={onChange} placeholder={placeholder} type={type} />
    <InputError>{error}</InputError>
  </Wrapper>
)
