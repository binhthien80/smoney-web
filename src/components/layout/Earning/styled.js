import styled from 'styled-components'
import theme from '../../theme'
import { Input, DatePicker, Icon, Button} from 'antd'

export const Card = styled.div`
  flex-grow: 1;
  background-color: ${theme.color.primary};
  color: ${theme.color.text}
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 2px;
  margin: 8px 0;
`
export const InputStyled = styled(Input)`
  border-radius: 0px !important;
  padding: 19px 10px !important;
`
export const DatePickerStyled = styled(DatePicker)`
  & input {
    border-radius: 0px !important;
    padding: 19px 10px !important;
  }
`
export const IconStyled = styled(Icon)`
  font-size: 20px;
  margin: 10px 0px;
`
export const ButtonStyled = styled(Button)`
  margin-top: 20px ;
  padding: 9px 0px!important;
  border-radius: 0px !important;
  height: auto !important;
`
export const UlStyled = styled.ul`
  padding-left: 30px;
  position: relative;
  list-style-type: none;
  &:after {
    content: "";
    border: 1px solid rgba(135, 150, 165, 0.15);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 7px;
}
`
export const LiStyled = styled.li`
  position: relative;
  ${UlStyled} &:before {
    width: 15px;
    height: 15px;
    left: -30px;
    top: 0;
    border: 4px solid #448bff;
    margin-right: 15px;
    background: #ffffff;
  } 
  ${UlStyled} &:before {
    position: absolute;
    border-radius: 100%;
    content: "";
  }
`