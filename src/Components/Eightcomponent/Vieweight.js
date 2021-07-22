import React from 'react';
import Color  from './Vieweight.module.css'
import Image from './product-screen-skillprofile.webp';

function Vieweight(){

    return (
            <table className={Color.table} >
                    <tr>
                        <th>
                            <div className={Color.img}> </div>
                            <h2>Build your Skill profile</h2>
                            <p> Build your personal brand by building your skill profile.Its a<pre/>
                             great way to tell recruiters who you are and what skills you<pre/> have . </p>
                        </th>
                        <th>
                            <img src={Image} alt='imagebs'/>  
                        </th>
                    </tr>
                </table>
    )
}

export default Vieweight;