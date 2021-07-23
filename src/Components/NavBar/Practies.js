import React from 'react'
import Nav from '../NavBar/Navlist';
import Displaytext  from '../Thirdcomponent/Displaytext';
import View from '../Fourthcomponent/View'
import Viewfive from '../Fifthcomponent/Viewfive';
import Viewsix from '../Sixcomponent/Viewsix';
import Viewseven from '../SevenComponent/Viewseven';
import Vieweight from '../Eightcomponent/Vieweight';
import Viewnine from '../Ninecomponent/Viewnine';
import Viewten from '../Tencomponent/Viewten';
import Viewleven from '../Levencomponent/Viewleven';
import MainFooter from '../Footer/MainFooter';
function Practies(){
 return(    
    <div>
        <Nav/>
          <Displaytext />
          <View />
          <Viewfive />
          <Viewsix />
          <Viewseven/>
          <Vieweight />
          <Viewnine/>
          <Viewten/>
          <Viewleven/>
          <MainFooter/>
    </div>
    )
}


export default Practies;