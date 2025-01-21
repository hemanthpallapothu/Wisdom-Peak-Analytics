import styled from 'styled-components'

export const NavBarContainer = styled.div`
    background-color: ${props =>
    props.isDarkTheme === true ? '#000000' : '#ffffff'};
    background-size: cover;
    display: flex;
    flex-directoin: row;
    align-items: center;
    justify-content: space-between;
`

export const NavBarTitle = styled.h1`
    color: ${props =>
    props.isDarkTheme === true ? '#ffffff' : '#000000'};
    padding-right: 10px;
    padding-left: 10px;
`



export const NavBarThemeAndFilter = styled.div`
    display: flex;
    flex-directoin: row;
    justify-content: center;
    align-items: center;
`

export const NavBarThemeButton = styled.button`
   background-color: transparent;
   border: none;
   height: 40px;
   width: 40px;
    margin-right: 10px;
    margin-left: 10px;
`

export const Select = styled.select`
    border-color: ${props =>
    props.isDarkTheme === true ? '#ffffff' : '#000000'};
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    height: 35px;
    width: 75px;
    margin-right: 10px;
    margin-left: 10px;

`