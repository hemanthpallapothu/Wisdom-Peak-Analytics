import {useState, useEffect} from 'react'
import { Puff } from 'react-loader-spinner';

import Navbar from '../Navbar';
import HomePageUserCard from '../HomePageUserCard';
import ThemeContext from '../../context/ThemeContext';

import {InProgressContainer,FailureContainer,FailureText,FailureParagraph,RetryButton,SuccessContainer,SearchContainer,UsersContainer} from './styledComponents'

const apiStatusConstants = {
    initial: 'INITIAL',
    inProgress: 'IN_PROGRESS',
    success: 'SUCCESS',
    failure: 'FAILURE',
  }

const HomePage=()=>{
  const [apiResponse, setApiResponse] = useState({
        status: apiStatusConstants.initial,
        data: [],
        errorMsg: null,
    }) 
  const [sortOption, setSortOption] = useState('A-Z')
  const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        const getUserDetails = async () => {
          setApiResponse({
            status: apiStatusConstants.inProgress,
            data: [],
            errorMsg: null,
          })
    
          const url = 'https://jsonplaceholder.typicode.com/users'
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
      }, [])

    const renderInprogressView=()=>(
        <ThemeContext.Consumer >
            {value=>{
            const {isDarkTheme}=value
            return (
              <>
                <Navbar showDropDown={false}/>
                <InProgressContainer isDarkTheme={isDarkTheme}>
                    <Puff type='Rings' color={isDarkTheme? '#ffffff':'#000000' } height={50} width={50} />
                </InProgressContainer>
              </>

            )
        }}
        </ThemeContext.Consumer>
    )

    const FailureView=()=>(
        <ThemeContext.Consumer>
            {value=>{
            const {isDarkTheme}=value
            return (
              <>
                <FailureContainer isDarkTheme={isDarkTheme}>
                  <FailureText isDarkTheme={isDarkTheme}>Something went wrong !</FailureText>
                  <FailureParagraph isDarkTheme={isDarkTheme}>Please try again after some time</FailureParagraph>
                  <RetryButton type="button" isDarkTheme={isDarkTheme}>Retry</RetryButton>
                </FailureContainer>              
              </>

          )
        }}
        </ThemeContext.Consumer>
    )

    const successView=()=>(
      <ThemeContext.Consumer >
        {value=>{
        const {isDarkTheme}=value
        const {data}=apiResponse
        const sortedData=sortOption==='A-Z'?data.sort((a,b)=>a.name.localeCompare(b.name)):data.sort((a,b)=>b.name.localeCompare(a.name))            
        const filterdList=sortedData.filter(eachItem=>eachItem.name.toLowerCase().includes(searchInput.toLowerCase()))
        return (
          <>
            <Navbar sortOption={sortOption} onChangeSort={onSortOptionChange} showDropDown={true}/>
            <SuccessContainer isDarkTheme={isDarkTheme}>
              <SearchContainer value={searchInput} placeholder='Search' type='search' onChange={onSearchInputChange}/>
              <UsersContainer isDarkTheme={isDarkTheme}>
                {filterdList.map(eachItem => (
                  <HomePageUserCard key={eachItem.id} userDetails={eachItem} />
                ))}
              </UsersContainer>

            </SuccessContainer> 
          </>
        )
      }}
      </ThemeContext.Consumer>
    )

    const renderUsers=()=>{
        const {status}=apiResponse
        switch(status){
            case apiStatusConstants.inProgress:
                return renderInprogressView()
            case apiStatusConstants.success:
                return successView()
            case apiStatusConstants.failure:
                return FailureView()
            default:
                return null
        }
    }

    const onSortOptionChange=(event)=>{
      setSortOption(event.target.value)
    }

    const onSearchInputChange=(event)=>{
      setSearchInput(event.target.value)
    }

  return (
    <>
        {renderUsers()}
    </>
  );
}

export default HomePage;