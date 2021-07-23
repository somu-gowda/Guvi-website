import React from "react";
import MainFooterCss from "./MainFooter.css";
import Icon from '../Assets/Group 56200.svg'
function Copyright() {
  return (
      <div style={{borderTop: '2px solid',
        borderTopColor: '#6d6d6d',
        paddingTop: '10px'}}>
        <img src ={Icon} alt="icon"/>
        <span> Copyright 2014 - 2021 GUVI Geek Network Pvt Ltd., All rights reserved </span>
      </div>
  )}

export default Copyright;