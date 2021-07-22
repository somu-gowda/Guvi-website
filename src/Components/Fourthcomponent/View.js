import React from 'react';
import Color from './View.module.css'
import Image from './artwork-native.webp'
function View (){
return(
            <table className={Color.table}>
                <tr className={Color.firsttr}>
                <th >
                    <h1>Why Learn/Hire from GUVI?</h1>
                </th>
                </tr>

                <tr className={Color.secondtr}>
                    <th>
                        <div>
                            <h2>Learn and Practise <pre />Programming with <pre />courses created by <pre />industry experts
                        </h2>
                     
                        <p>Learn to code in your own native language <pre/>(English, Tamil, Telugu,Hindi)</p>
                        </div>
                        
                    </th>
                    <th>
                        <img src={Image} alt='imag' />
                    </th>
                </tr>
            </table>
   
)

}

export default View;

