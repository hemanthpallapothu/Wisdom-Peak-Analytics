import {UserContainer,UserName,UserEmail,UserCity,StyledLink} from './styledComponents'

import ThemeContext from '../../context/ThemeContext';

const HomePageUserCard = (props) => (
    <ThemeContext.Consumer>
    {value=>{
    const {isDarkTheme}=value
    const {userDetails}=props
    const {id,name,address,email}=userDetails
    const {city}=address
    return (
        <UserContainer isDarkTheme={isDarkTheme}>
            <StyledLink to={`/user/${id}`}>
                <UserName>{name}</UserName>
                <UserEmail>{email}</UserEmail>
                <UserCity>{city}</UserCity>
            </StyledLink>
        </UserContainer>

    )
}}
</ThemeContext.Consumer>
)

export default HomePageUserCard;