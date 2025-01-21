import { useState } from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom'

import HomePage from './components/HomePage';
import UserDetail from './components/UserDetail';

import ThemeContext from './context/ThemeContext';

import './App.css';

const App=()=>{
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  }
  return(
    <ThemeContext.Provider value={{ isDarkTheme: theme, toggleTheme }}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/user/:id" exact component={UserDetail} />
        </Switch>
      </BrowserRouter>
  </ThemeContext.Provider>
)
}
export default App;
