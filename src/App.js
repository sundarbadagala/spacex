import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import LaunchList from './Components/LaunchList/LaunchList'
import LaunchView from './Components/LaunchView/LaunchView'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/'><LaunchList/></Route>
        <Route path='/launch/:flight_number'><LaunchView/></Route>
      </Switch>
    </Router>
  )
}

export default App
