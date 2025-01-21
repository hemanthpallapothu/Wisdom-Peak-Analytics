import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

import ThemeContext from '../../context/ThemeContext';
import {NavBarContainer,NavBarTitle,NavBarThemeAndFilter,NavBarThemeButton,Select } from './styledComponents';

const Navbar=(props)=>{
  const {sortOption,onChangeSort,showDropDown}=props
  return (
    <ThemeContext.Consumer >
      {value=>{
        const {isDarkTheme,toggleTheme}=value
        return <NavBarContainer isDarkTheme={isDarkTheme}>
            <NavBarTitle isDarkTheme={isDarkTheme}>User Details</NavBarTitle>
            <NavBarThemeAndFilter>
                <NavBarThemeButton onClick={toggleTheme}>{isDarkTheme?<MdSunny color="#ffffff" size={25}/>:<FaMoon size={25}/>}</NavBarThemeButton>
                {showDropDown && <Select isDarkTheme={isDarkTheme} value={sortOption} onChange={onChangeSort}>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </Select>}

            </NavBarThemeAndFilter>
        </NavBarContainer>
      }}
    </ThemeContext.Consumer>
  );
}

export default Navbar;