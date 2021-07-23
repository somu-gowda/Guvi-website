import React from 'react';
import './App.css';
import {Route  ,Switch ,BrowserRouter as Router } from 'react-router-dom';

import IitCourses from './Components/NavBar/IitCourse';
import Courses from './Components/NavBar/Courses';
import Practies from './Components/NavBar/Practies';
import Zenclass from './Components/NavBar/Zenclass';
import Hyre from './Components/NavBar/Hyre';
import Pricing from './Components/NavBar/Pricing';
import Login from './Components/NavBar/Login';
import Signup from './Components/NavBar/Signup';
class App extends React.Component {
   render() {
      return (
         
         <div className='tonav'>
            
            <Router >
               <Switch >
               <Route exact path='/IitCourse' component={IitCourses}></Route>
               <Route exact path='/Courses' component={Courses}></Route>
               <Route exact path='/Practies' component={Practies}></Route>
               <Route exact path='/Zenclass' component={Zenclass}></Route>
               <Route exact path='/Hyre' component={Hyre}></Route>
               <Route exact path='/Pricing' component={Pricing}></Route>
               <Route  exact path='/Login' component={Login}></Route>
               <Route exact path='/Signup' component={Signup}></Route>
            </Switch>
           </Router>
         </div>
         
      )
   }
}
export default App;