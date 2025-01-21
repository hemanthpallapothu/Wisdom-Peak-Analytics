import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const UserContainer = styled.li`
    background-color: ${props =>
    props.isDarkTheme === true ? '#212121' : '#1e293b'};
    color: white;
    height: 250px;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
    flex-shrink: 1;
    border-radius: 15px;
    margin: 10px;
    @media (max-width: 767px) {
        flex-grow: 1;
    }
`

export const UserName = styled.h1`
    color: white;
    font-size: 20px;
`

export const UserEmail = styled.h1`
    color: white;
    font-size: 15px;
`

export const UserCity = styled.h1`
    color: white;
    font-size: 10px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`;