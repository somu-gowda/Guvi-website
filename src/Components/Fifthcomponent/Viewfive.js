import React from 'react'
import Color from './Viewfive.module.css'


function Viewfive (){
    return(
        <table className={Color.table}>
            <tr>
                <th>
                   <div className={Color.img1} ></div>
                </th>
                <th>
                <div className={Color.img2} ></div>
                </th>
                <th>
                <div className={Color.img3} ></div>
                </th>
            </tr>
            <tr className={Color.secondtr}>
                <th>
                   <p><b> 72% </b>of Learners<pre/>
complete their course within 3 month duration</p>
                </th>
                <th>
                <b> 78% </b>  of Learners<pre/>
able to recollect & relate faster
                </th>
                <th>
                <b> 84% </b> of Learners<pre/>
have better understanding over complex concepts
                </th>
            </tr>
        </table>
    )
}


export default Viewfive;