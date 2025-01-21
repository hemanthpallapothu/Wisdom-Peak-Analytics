import styled from 'styled-components'

export const UserDetailsContainer=styled.div`
    background-color: ${props =>
    props.isDarkTheme === true ? '#212121' : '#1e293b'};
    height: 100vh;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FailureViewContainer=styled.div`
    background-color: ${props =>
    props.isDarkTheme === true ? '#212121' : '#1e293b'};
    height: 100vh;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FailureText = styled.h1`
    color: #ffffff;
`

export const FailureParagraph = styled.p`
    color: #ffffff;
`

export const RetryButton = styled.button`
    background-color: #ffffff;
    color: #000000;
    height: 25px;
    width: 75px;
    border-radius: 5px;
    border: 0px;
`

export const InProgressContainer = styled.div`
    background-color: ${props =>
    props.isDarkTheme === true ? '#212121' : '#1e293b'};
    height: 100vh;
    background-size: cover;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const SuccessContainer = styled.div`
    background-color: ${props =>
    props.isDarkTheme === true ? '#212121' : '#1e293b'};
    height: 100vh;
    background-size: cover;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const UserDetailsText = styled.h1`
    color: #ffffff;
    font-size: 24px;
`