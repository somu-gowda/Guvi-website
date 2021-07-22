import React from 'react';
import {Route , Link ,Switch ,BrowserRouter as Router } from 'react-router-dom';
import Color from'./Navlist.module.css'
import IitCourses from './IitCourse';
import Courses from './Courses';
import Practies from './Practies';
import Zenclass from './Zenclass';
import Hyre from './Hyre';
import Pricing from './Pricing';
import Login from './Login';
import Signup from './Signup';

class Home extends React.Component {
   render() {
      return (
         <div>
         <Router >
         <div className={Color.tonav } >
            <b style={{marginRight:'20px'}}>
           <Link to='/IitCourse.js' className={Color.link}>IIT-COURSES</Link>
           <Link to='/Courses.js' className={Color.link}>COURSES</Link>
           <Link to='/Practies.js' className={Color.link}>PRACTIES</Link>
           <Link to='/Zenclass.js' className={Color.link}>ZEN CLASS</Link>
           <Link to='/Hyre.js' className={Color.link}>HYRE</Link>
           <Link to='/Practies.js' className={Color.link}>PRICING</Link>|
            <Link  to='/Login.js' className={Color.link} >LOGIN</Link> 
            <button className={Color.link}> SIGNUP </button> 
            </b>
           <Switch >
              <Route exact path='/IitCourse.js' component={IitCourses}></Route>
              <Route exact path='/Courses.js' component={Courses}></Route>
              <Route exact path='/Practies.js' component={Practies}></Route>
              <Route exact path='/Zenclass.js' component={Zenclass}></Route>
              <Route exact path='/Hyre.js' component={Hyre}></Route>
              <Route exact path='/Pricing.js' component={Pricing}></Route>
              <Route  exact path='/Login.js' component={Login}></Route>
              <Route exact path='/Signup' component={Signup}></Route>
           </Switch>
         </div>
         </Router>
         </div>
         
      )
   }
}
export default Home;