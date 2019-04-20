import theme from "./../../theme";
import styled from 'styled-components'
import { Input, Dropdown } from 'antd'

export const Search = styled(Input.Search)`
    width: 350px !important;
    & > input {
        background: transparent;
        border: 1px solid ${theme.button.borderSearch};
        color: ${theme.color.subText};
    }
    & > span > i {
        color: ${theme.color.subText};
        float: right;
    }
`

export const TopNav = styled.div`
    width: calc(100% - 200px);
    background: ${theme.color.primary};
    position: fixed;
    top: 0;
    right: 0;
    height: 4rem;
    padding: 0 1rem;
    ${theme.flex('row', 'space-between', 'center')};
`

export const DropdownTopNav = styled(Dropdown)`
    margin: 0 1rem;
    color: ${theme.color.subText};
`

export const ButtonTopNav = styled(Dropdown)`
    margin: 0 1rem;
    color: ${theme.color.subText};
`

export const ButtonProfile = styled(Dropdown)`
    margin: 0 1rem;
    color: ${theme.color.subText};
    padding: .6rem .5rem;
`