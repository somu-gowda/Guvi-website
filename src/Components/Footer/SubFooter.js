import React from "react";
// import MainFooterCss from "./MainFooter.css";
// import Copyright from './Copyright';
import GuviIcon from '../Assets/guvi-logo-full.webp'
import Gplay from '../Assets/gplay.webp'
import Instagram from '../Assets/instagram.svg'
import FaceBook from '../Assets/facebook_green.svg'
import Twitter from '../Assets/twitter_green.svg'
import Youtube from '../Assets/youtube_green.svg'
import LinkDIn from '../Assets/linkedin_green.svg'

function SubFooter() {
  return (
        <div style={{width:'100%', paddingBottom : '50px'}}>
            <table style={{width:'100%', textAlign:'left'}}  >
                <tr>
                    <th><img src={GuviIcon} alt="Icon "></img></th>
                    <th >FEATURED COURSES</th>
                    <th>PLATFORM</th>
                    <th>SOLUTION</th>
                    <th>COMPANY</th>
                    <th><img src={Gplay} alt='Gplay Icon '></img></th>
                </tr>
                <tr>
                    <td></td>
                    <td style={{paddingBottom:'10px'}} >Subscription</td>
                    <td >Affiliates</td>
                    <td >Corporate</td>
                    <td >About</td>
                </tr>
                <tr>
                    <td></td>
                    <td style={{paddingTop:'10px',paddingBottom:'10px'}}>Blackchain</td>
                    <td >Codekata</td>
                    <td >hackerkid</td>
                    <td >Blog</td>
                </tr>
                <tr>
                    <td></td>
                    <td style={{paddingTop:'10px',paddingBottom:'10px'}}>C</td>
                    <td>Course Library</td>
                    <td>Personal</td>
                    <td>Contact Us</td>
                </tr>
                <tr>
                    <td></td>
                    <td style={{paddingTop:'10px',paddingBottom:'10px'}}>C++</td>
                    <td>Forum</td>
                    <td>Zen class</td>
                    <td>FAQ</td>
                </tr>
                <tr>
                    <td></td>
                    <td style={{paddingTop:'10px',paddingBottom:'10px'}}>Machine Learning</td>
                    <td>MicroARC</td>
                    <td>Corporate</td>
                    <td>Refund Policy</td>
                </tr>
            </table>
            <div>
                <div style = {{float : 'right'}} >
                    <a href='fghj' style={{marginRight : '20px'}}><img src={Instagram} alt='nsnf'></img></a>
                    <a href='asdfgh' style={{marginRight : '20px'}}><img src={Twitter}alt='nsnf'></img></a>
                    <a href='dfgh' style={{marginRight : '20px'}}><img src={FaceBook}alt='nsnf'></img></a>
                    <a href='fgh' style={{marginRight : '20px'}}><img src={Youtube}alt='nsnf'></img></a>
                    <a href='fgh' style={{marginRight : '20px'}}><img src={LinkDIn}alt='nsnf'></img></a>
                </div>
            </div>
        </div>
  )}

export default SubFooter;