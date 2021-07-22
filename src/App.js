import React from 'react';
import './App.css';
import Nav from './Components/NavBar/Navlist';
import Displaytext  from './Components/Thirdcomponent/Displaytext';
import View from './Components/Fourthcomponent/View'
import Viewfive from './Components/Fifthcomponent/Viewfive';
import Viewsix from './Components/Sixcomponent/Viewsix';
import Viewseven from './Components/SevenComponent/Viewseven';
import Vieweight from './Components/Eightcomponent/Vieweight';
import Viewnine from './Components/Ninecomponent/Viewnine';
import Viewten from './Components/Tencomponent/Viewten';
import Viewleven from './Components/Levencomponent/Viewleven'
class App extends React.Component {
   render() {
      return (
         
         <div className='tonav'>
          <Nav/>
          <Displaytext />
          <View />
          <Viewfive />
          <Viewsix />
         < Viewseven/>
         <Vieweight />
         <Viewnine/>
         <Viewten/>
         <Viewleven/>
         </div>
         
      )
   }
}
export default App;