import {useState, useEffect} from 'react'
import Navbar from '../Navbar';
import ThemeContext from '../../context/ThemeContext';
import { Puff } from 'react-loader-spinner';

import {UserDetailsContainer,FailureViewContainer,FailureParagraph,FailureText,RetryButton,InProgressContainer,UserDetailsText} from './styledComponents';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const apiStatusConstants = {
    initial: 'INITIAL',
    inProgress: 'IN_PROGRESS',
    success: 'SUCCESS',
    failure: 'FAILURE',
  }



const UserDetail=(props)=>{
    const {match}=props
    const {params}=match
    const {id}=params
    const [apiResponse, setApiResponse] = useState({
        status: apiStatusConstants.initial,
        data: [],
        errorMsg: null,
    })            
    useEffect(() => {
        const getUserDetails = async () => {
            setApiResponse({
                status: apiStatusConstants.inProgress,
                data: [],
                errorMsg: null,
            })
            const url = `https://jsonplaceholder.typicode.com/users/${id}`
            const options = {
                method: 'GET',
            }
            const response = await fetch(url, options) 
            let responseData=[]
            if (response.ok) {
                responseData = await response.json()
                setApiResponse(prevApiDetails => ({
                    ...prevApiDetails,
                    status: apiStatusConstants.success,
                    data: responseData,
            }))
            } else {
                setApiResponse(prevApiDetails => ({
                ...prevApiDetails,
                status: apiStatusConstants.failure,
                errorMsg: responseData.error_msg,
            }))
            }
        }
        getUserDetails()
    }, [id])

    const successView=()=> (
        <ThemeContext.Consumer>
            {value=>{
                const {isDarkTheme}=value
                const {data}=apiResponse 
                const {name,username,email,phone,website,address,company}=data
                const {street,suite,city,zipcode}=address
                const companyName=company.name
                return (
                    <>
                        <Navbar showDropDown={false}/>
                        <UserDetailsContainer isDarkTheme={isDarkTheme}>
                            <UserDetailsText>Name: {name}</UserDetailsText>
                            <UserDetailsText>Username: {username}</UserDetailsText>
                            <UserDetailsText>Email: {email}</UserDetailsText>
                            <UserDetailsText>Phone: {phone}</UserDetailsText>
                            <UserDetailsText>Website: {website}</UserDetailsText>
                            <UserDetailsText>Address: {street}, {suite}, {city}, {zipcode}</UserDetailsText>
                            <UserDetailsText>Company: {companyName}</UserDetailsText>
                            <Link to="/" style={{textDecoration:'none',color:'white'}}><RetryButton>Go Back</RetryButton></Link>
                        </UserDetailsContainer>
                    </>
                )
            }}
        </ThemeContext.Consumer>
    )
    
    const failureView=()=> (
        <ThemeContext.Consumer>
            {value=>{
                const {isDarkTheme}=value
                return (
                    <>
                        <Navbar/>
                        <FailureViewContainer isDarkTheme={isDarkTheme}>
                            <FailureText isDarkTheme={isDarkTheme}>Something went wrong !</FailureText>
                            <FailureParagraph isDarkTheme={isDarkTheme}>Please try again after some time</FailureParagraph>
                            <RetryButton type="button" isDarkTheme={isDarkTheme}>Retry</RetryButton>
                        </FailureViewContainer>
                    </>
    
                )
            }}
        </ThemeContext.Consumer>
    )
    
    const inProgressView=()=> (
        <ThemeContext.Consumer>
            {value=>{
                const {isDarkTheme}=value
                return (
                    <>
                        <Navbar/>
                        <InProgressContainer isDarkTheme={isDarkTheme}>
                            <Puff type='Rings' color='#ffffff' height={50} width={50} />
                        </InProgressContainer>
                    </>
                )
            }}
        </ThemeContext.Consumer>
    )

    const renderUserDetails=()=>{
        const {status}=apiResponse
        switch(status){
            case apiStatusConstants.inProgress:
                return inProgressView()
            case apiStatusConstants.success:
                return successView()
            case apiStatusConstants.failure:
                return failureView()
            default:
                return null
    }
}   

    return renderUserDetails()
}


export default UserDetail;