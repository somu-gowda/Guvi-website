import React from "react";
// import Color from './Signup.css';
import Imges from "../Assets/art-new-account.webp";
function Signup() {
  const homePage = () => {
    window.location.href = "/";
  };
  return (
    <div style={{ backgroundColor: "green" }}>
      <div>
        <table>
          <tr>
            <th>
              <img src={Imges} alt="hbasfgnsdj" width="450px"></img>
            </th>
            <th style={{ width: "150px" }}></th>
            <th>
              <form style={{ textAlign: "left" }}>
                <label>First Name</label> <br />
                <input
                  type="text"
                  style={{
                    borderRadius: "5px",
                    width: "250px",
                    height: "30px",
                  }}
                />
                <br />
                <br />
                <label>Last Name</label> <br />
                <input
                  type="text"
                  style={{
                    borderRadius: "5px",
                    width: "250px",
                    height: "30px",
                  }}
                />
                <br />
                <br />
                <label>Email Address</label> <br />
                <input
                  type="text"
                  style={{
                    borderRadius: "5px",
                    width: "250px",
                    height: "30px",
                  }}
                />
                <br />
                <br />
                <label>Password</label> <br />
                <input
                  type="text"
                  style={{
                    borderRadius: "5px",
                    width: "250px",
                    height: "30px",
                  }}
                />
                <br />
                <br />
                <label>Mobile Number</label> <br />
                <input
                  type="number"
                  style={{
                    borderRadius: "5px",
                    width: "250px",
                    height: "30px",
                  }}
                />
                <br />
                <br />
                <button
                  type="button"
                  style={{
                    borderRadius: "5px solid black",
                    width: "250px",
                    height: "30px",
                    backgroundColor: "gray",
                  }}
                >
                  SIGNUP
                </button>{" "}
                <br />
                <br /></form>
                <div style={{ float: "right" }}>
                  <button
                    onClick={homePage}
                    style={{
                      borderRadius: "5px solid black",
                      width: "250px",
                      height: "30px",
                      backgroundColor: "indigo",
                    }}
                  >
                    
                    Back
                  </button>
                </div>
              
            </th>
          </tr>
        </table>
      </div>
      <br />
    </div>
  );
}

export default Signup;
