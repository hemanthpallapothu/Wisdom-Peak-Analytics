import {styled} from 'styled-components'



export const InProgressContainer = styled.div`
    background-color: ${props =>
    props.isDarkTheme === true ? '#000000' : '#ffffff'};
    height: 100vh;
    background-size: cover;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const FailureContainer = styled.div`
    background-color: ${props =>
    props.isDarkTheme === true ? '#000000' : '#ffffff'};
    height: 100vh;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FailureText = styled.h1`
    color: ${props =>
    props.isDarkTheme === true ? '#ffffff' : '#000000'};
`

export const FailureParagraph = styled.p`
    color: ${props =>
    props.isDarkTheme === true ? '#ffffff' : '#000000'};
`

export const RetryButton = styled.button`
    background-color: ${props =>
    props.isDarkTheme === true ? '#ffffff' : '#000000'};
    color: ${props =>
    props.isDarkTheme === true ? '#000000' : '#ffffff'};
    height: 25px;
    width: 75px;
    border-radius: 5px;
    border: 0px;
`

export const SuccessContainer = styled.div`
    background-color: ${props =>
    props.isDarkTheme === true ? '#000000' : '#ffffff'};
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
`

export const UsersContainer = styled.ul`
    background-color: ${props =>
    props.isDarkTheme === true ? '#000000' : '#ffffff'};
    background-size: cover;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;    
    flex-wrap: wrap;
    @media (min-width: 767px) {
        height: 100vh;
    }    
`


export const UserContainer = styled.div`
    background-color: ${props =>
    props.isDarkTheme === true ? '#212121' : '#1e293b'};
    color: white;
    height: 250px;
    width: 250px;
    display: flex;
    flex-grow: 0;
    flex-shrink: 1;
    border-radius: 15px;
    margin: 10px;
    @media (max-width: 767px) {
        flex-grow: 1;
    }
`

export const SuccessContainerAlinement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const SearchAlinementContainer = styled.div`
    background-color: ${props =>
        props.isDarkTheme === true ? '#000000' : '#ffffff'};
    height: 100vh;
    background-size: cover;
    border-color: green;
    border-style: solid;
    border-width: 1px;
`

export const SearchContainer = styled.input`
    height: 35px;
    width: 300px;
    background-size: cover;
    background-color: ${props =>
    props.isDarkTheme === true ? '#000000' : '#ffffff'};
    border-color: black;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    margin-top: 10px;
`