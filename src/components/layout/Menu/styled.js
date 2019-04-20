import { Dropdown, Icon } from  'antd';
import styled from 'styled-components';
import theme from '../../theme';

export const Wrapper = styled.div`
    background-color: ${theme.color.primary}
    text-align: center;
    height: 100%;
    padding: 1rem;
`
export const StyleMenu = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
`
export const StyleA = styled.a`
    color: white;
`
export const StyleIcon = styled(Icon)`
    color: ${theme.color.subText} !important;
    font-size: 20px;

    padding-right: 12px;
`

export const StyleDropDown = styled(Dropdown)`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.color.text} !important;
    padding-right: 5px;
    text-align: left;
    position: relative;
    :before {
        content: '';
        position: absolute;
        top: 100%;
        left: 12px;
        height: 2px;
        width: 0;
        background-color: ${theme.color.red};
        z-index: 1500;
        transition: all .3s ease;
    }
    i {
        transition: all .3s ease;
    }
    :hover {
        font-weight: 500;
        color: #448BFF !important;
    }
    :hover > i {
        transform: rotate(180deg) !important;
    }
    :hover {
        :before {
        content: '';
        position: absolute;
        top: 100%;
        left: 12px;
        height: 2px;
        width: 40%;
        background-color: ${theme.color.red};
        z-index: 1500;
        }
    }
`