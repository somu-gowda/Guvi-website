import React from 'react';
import Color from './Viewsix.module.css'
import Image from './product-screen-codekata.webp'


function Viewsix (){
    return(
    <table className={Color.table}>
        <tr>
            <th>
                <div className={Color.img}   alt='images' />
                <h2>Codetaka</h2>
            <p>Solve 1000+ programming<pre/> problems through gamified and personalised<pre/> approach.</p>
            </th>
           
            <th>
                <img  src={Image} alt='display'   />
            </th>
        </tr>
    </table>
    )
}


export default Viewsix;