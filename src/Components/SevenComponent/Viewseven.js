import React from 'react';
import Color  from './Viewseven.module.css'
import Image from './product-screen-microarc.webp';

function Viewseven(){

    return (
            <table className={Color.table} >
                    <tr>
                        <th>
                            <img src={Image} alt='imagebs'/>  
                        </th>
                        <th>
                            <div className={Color.img}> </div>
                            <h2>MicroARC</h2>
                            <p>MicroARC is a standardised skill assessment platform
                                <pre/> powered by Artificial Intelligence with a huge question<pre/> library.</p>
                        </th>
                    </tr>
                </table>
    )
}

export default Viewseven;