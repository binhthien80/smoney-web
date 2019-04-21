import styled from 'styled-components'
import theme from '../theme'
import background from '../../assets/img/auth_page_bg.png'
import { Logo, Input } from '../UICommon'
import { InputTag } from '../UICommon/Input'
import { Link } from 'react-router-dom'

export { Logo, Input }

export const Container = styled.div`
  & > div:first-child {
    margin-right: 16px;
  }
  display: flex;
  width: 100%;
`

export const ContainerItem = styled.div`
  flex-grow: 1;
`

export const Select = styled.select`
  width: 100%;
  margin-bottom: 16px;
  border: 1px solid rgba(100, 100, 100, .2);
  appearance: none;
  -webkit-appearance: none;
  padding: 12px;
  outline: none;
`

export const Submit = styled(InputTag)`
  background-color: ${theme.color.blue}!important;
  color: white;
  cursor: pointer;
`

export const Label = styled.p`
  text-align: left;
  width: 100%;
`

export const Wrapper = styled.div`
  background-color: ${theme.color.secondary};
  width: 100vw;
  min-height: 100vh;
  display: flex;
  mix-width: 16vw;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  background-image: url(${background});
  background-size: cover;
  background-position: center center;
`

export const Form = styled.form`
  & > input {
    width: 100%;
    box-sizing: border-box;
    margin: 0;
  }
  min-width: 25%;
  background-color: white;
  padding: 2rem;
  border-radius: 2px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2`
  margin: 1rem 0;
  color: ${theme.color.blue};
  text-transform: uppercase;
`

export const StyledLink = styled(Link)`
  font-size: ${theme.fontSize.tiny};
  margin-top: 16px;
`
