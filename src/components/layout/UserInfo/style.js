import styled from 'styled-components'
import theme from './../../theme'

export const Logo = styled.div`
    ${theme.flex('row', 'space-around', 'center')};
    color: ${theme.color.text};
    height: 2.5rem;
    margin-bottom: 1rem;
    & > img {
        width: 30px;
    }
`

export const UserInfo = styled.div`
    margin: 2.5rem 0;
    & > img {
        width: 130px;
        border-radius: 100%;
        border: 4px solid ${theme.color.green};
        margin-bottom: 1rem;
    }

    & > p {
        color: ${theme.color.text};
        font-size: ${theme.fontSize.large};
    }
`
