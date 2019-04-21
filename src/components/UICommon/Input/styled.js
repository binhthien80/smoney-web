import styled from 'styled-components'
import theme from '../../theme'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  &:focus {
    border-color: ${theme.color.blue};
  }
  &::placeholder {
    color: rgba(100, 100, 100, .4);
  }
  padding: 12px;
  font-size: ${theme.fontSize.small};
  border: 1px solid rgba(100, 100, 100, .2);
  border-radius: 2px;
  outline: none;
  transition: 0.15s ease-in-out;
`

export const InputError = styled.p`
  color: ${theme.color.red};
  margin-top: 8px;
  font-weight: 400;
  width: 100%;
  font-size: ${theme.fontSize.tiny};
`