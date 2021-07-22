import React from 'react';
import Color from './Displaytext.module.css';
import Image from './thirddisplay.webp';
function Displaytext (){

    return(
<div>
<table className={Color.td}>
<tr >
<th className={Color.firstth}>
   <b> <h1>Learn. Practise. Get Hired.</h1></b>
    <p>Join over 12.1 lakh+ programmers.</p>
    <p>Trusted by 200+ top companies and 100+ colleges.</p><br></br>
    <button> To Learn  </button>
    <button> To   </button>


</th>
<th className={Color.secondth}>
   <img src={Image} alt='Learning images'   />
</th>
</tr>





</table>


</div>
        
    )

}


export default Displaytext;