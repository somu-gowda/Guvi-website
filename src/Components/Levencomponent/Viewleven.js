import React from "react";
import Color from "./Viewleven.module.css";

function Viewleven() {
  return (
    <div  style={{textAlign:'center'}}>
      <h1>Become a Pro user and get unlimited access</h1> 
      <div  style={{boxShadow: '10px'}}>
      <table className={Color.table}>
        <tbody className={Color.radius}>
        <tr >
          <th className={Color.shadow} style={{backgroundColor: '#7a17eb',margin : '10px',}}>
            <h2 className={Color.h1}>Basic</h2>
          </th>
          <th></th>
          <th className = {Color.th2} style = {{width : '50%'}}>
            <h2 className={Color.h2}>Pro</h2>
          </th>
      </tr>
      
      <tr>
        <th className={Color.shadow}>
          <div style={{margin : '35px'}}>
          <table style={{width : '100%'}}>
            <tr>
              <th style={{textAlign: "left"}}>
              Codekata
              </th>
              <th style={{textAlign: "right"}}>
              Limited Access
              </th>
            </tr>
            <tr>
            <th style={{textAlign: "left"}}>MicroARC
                </th>
                <th style={{textAlign: "right"}}>
                Limited Access
                </th>
            </tr>
          </table>
          </div>
        </th>
        <th> </th>
        <th className={Color.shadow}>
          <div style={{margin : '35px'}}>
            <table style={{width : '100%'}}>
            <tr>
              <th style={{textAlign: "left"}}>
              Codekata
              </th>
              <th style={{textAlign: "right"}}>
                Unlimited Access
              </th>
            </tr>
            <tr>
            <th style={{textAlign: "left"}}>MicroARC
                </th>
                <th style={{textAlign: "right"}}>
                  Unlimited Access
                </th>
            </tr>
          </table>
          </div>
          
        </th>
      </tr>
      </tbody>
      
      </table>
      <button className={Color.courseButton} > Go to course </button>
    </div>
    
    </div>
    
  );
}

export default Viewleven;
