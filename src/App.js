import React from 'react';
import './App.css';
import {Route , Link ,Switch ,BrowserRouter as Router } from 'react-router-dom';
import Nav from './Components/NavBar/Navlist';
import Displaytext  from './Components/Thirdcomponent/Displaytext';
import View from './Components/Fourthcomponent/View'
import Viewfive from './Components/Fifthcomponent/Viewfive';
import Viewsix from './Components/Sixcomponent/Viewsix';
import Viewseven from './Components/SevenComponent/Viewseven';
import Vieweight from './Components/Eightcomponent/Vieweight';
import Viewnine from './Components/Ninecomponent/Viewnine';
import Viewten from './Components/Tencomponent/Viewten';
import Viewleven from './Components/Levencomponent/Viewleven';
import MainFooter from './Components/Footer/MainFooter';
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