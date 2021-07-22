import React from 'react';
import Color  from './Viewnine.module.css'
import Image from './artwork-zenclass.webp';

function Viewnine(){

    return (
            <table className={Color.table} >
                    <tr>

                    <th>
                            <img src={Image} alt='imagebs'/>  

                        </th>
                        <th>
                            <div className={Color.img}> </div>
                            <h2><span>ZEN CLASS</span></h2>
                            <p><span>Coding Bootcamp . New Age<pre/> GURUKULAM</span></p>
                            <p><strong>3 months Intensive Project Based<pre/> Learning program,</strong> where you will learn<pre/> and gain a skill
                                 ( code like wizard from<pre/> Hogwarts ) with mentors from industry<pre/> solving real world problems </p>
                        </th>
                        
                    </tr>
                </table>
    )
}

export default Viewnine;