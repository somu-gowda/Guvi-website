import  React from 'react';
import Color from './Viewten.module.css';
import imge1 from './artwork-join1.webp'
import image2 from './artwork-explore2.webp';
import image3 from './artwork-personalized3.webp'
import image4 from './artwork-certified4.webp'
import image5 from './artwork-dreamjob5.webp'
function Viewten(){
    return(
        <table className={Color.table}>
            <tr>
                <th>
                    <h2 className={Color.h1}>How it <b><strong> works </strong></b></h2>
                    </th>
            </tr>
            <tr>
                <th>
                    <h2>Join</h2>
                    <p>Create your GUVI account</p>
                </th>
           
                <th>
                   <img src={imge1 }alt='abdsc'/>
                    </th>
            </tr>
            <tr>
            <th>
                   <img src={image2 }alt='abdsc'/>
                    </th>
                <th>
                    <h2>Explore</h2>
                    <p>Explore a variety of courses in different<pre/>
                     languages and technologies and choose one<pre/> to start with.</p>
                </th>
                
            </tr>
            <tr>
            
                <th>
                    <h2>Get Personalised suggestion</h2>
                    <p>Take a pre assessment, Know where you stand<pre/>
                         and get personalised suggestions on<pre/>
                          course topics.</p>
                </th>
                <th>
                   <img src={image3 }alt='abdsc'/>
                    </th>
                
            </tr>
            <tr>
            <th>
                   <img src={image4 }alt='abdsc'/>
                    </th>
            
                <th>
                    <h2>Get Certified</h2>
                    <p>Take a Certification test after learning and get<pre/>
                         certified by GUVI.</p>
                </th>
                
                
            </tr>
            <tr>
                <th>
                    <h2>Land on your dream job</h2>
                    <p>Build your profile, Get interview calls from<pre/>
                         companies and land in your dream job.</p>
                </th>
                <th>
                   <img src={image5 }alt='abdsc'/>
                    </th>
                
            </tr>
        </table>
    )
}


export default Viewten;