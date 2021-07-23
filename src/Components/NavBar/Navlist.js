import React from 'react';
// import {browserHistory} from 'react-router';
import {Route , Link ,Switch ,BrowserRouter as Router } from 'react-router-dom';
import Color from'./Navlist.module.css'

class Home extends React.Component {
  
   render() {
      const signup = () =>{
         window.location.href='/Signup'
         // browserHistory.push('/Signup');
      }
      return (
         <div>
            <Router>
         <Route>
         <div className={Color.tonav } >
            <b style={{marginRight:'20px'}}>
           <Link to='/IitCourse' className={Color.link}>IIT-COURSES</Link>
           <Link to='/Courses' className={Color.link}>COURSES</Link>
           <Link to='/Practies' className={Color.link}>PRACTIES</Link>
           <Link to='/Zenclass' className={Color.link}>ZEN CLASS</Link>
           <Link to='/Hyre' className={Color.link}>HYRE</Link>
           <Link to='/Practies' className={Color.link}>PRICING</Link>|
            <Link  to='/Login' className={Color.link} >LOGIN</Link> 
            <button className={Color.link} onClick={signup}> SIGNUP </button> 
            </b>
         </div>
         </Route>
         </Router>
         </div>
         
      )
   }
}
export default Home;