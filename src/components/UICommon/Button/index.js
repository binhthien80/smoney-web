import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'

const Button = styled.button`
  &:hover {
    background-color: ${props => theme.color[props.color]};
    color: white;
  }
  padding: 1rem;
  border-radius: 2px;
  border-color: rgba(68, 139, 255, 0);
  cursor: pointer;
  margin: 8px 0;
  color: ${props => theme.color[props.color]};
  background-color: ${props => theme.color.blur[props.color]};
  transition: 0.15s ease-in-out;
  outline: none;
  width: 100%;
`

export const BlurButton = ({ color, children, onClick }) => (
  <Button onClick={onClick} color={color}>
    {children}
  </Button>
)
