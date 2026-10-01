// import React, {useState} from "react";
// import register from"../Auth/register"
// import "../Auth/Login.css"
// import Logo from "../shared/logo";
// import { Link } from "react-router-dom";

// export default function Login_detail() {
//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData((previous) => ({ ...previous, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
//   console.log(loginData);

  

//   return (
//     <div className="main-container">
//       <div className="parent-logo-area">
//         <div className="logo-area">
//           <Logo />
//           <span>
//             <h2>Cine</h2>
//           </span>
//         </div>
//         <h3>Welcome back</h3>
//         <p>Sign in to continue your cinematic journey.</p>
//       </div>

//       <form className="login-form" onSubmit={handleSubmit}>
//         <p>Email</p>
//         <input
//           className="input-btn"
//           type="text"
//           placeholder="Enter your email"
//           name="email"
//           value={loginData.email}
//           onChange={handleChange}
//         />

//         <div className="password-division">
//           <div className="password-forgot-split">
//             <p>Password</p>
//             <p
//               className="forgot
//         "
//             >
//               Forgot password?
//             </p>
//           </div>
//           <input
//             className="input-btn"
//             type="text"
//             placeholder="Enter your password"
//             name="password"
//             value={loginData.password}
//             onChange={handleChange}
//           />
//         </div>
//         <button className="sign-in">Sign In</button>
//         <p>Don't have an account? Sign Up</p>
//       </form>
//     </div>
//   );
// }


// import { useState } from "react";
import Logo from "../shared/logo";
import "./Login.css"
// import Register from "./register";
// import { data, replace } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import useAuthHooks from "../../Hooks/authhooks";
export default function Login() {
    
    const {isLoading, handleChange, handleSubmit, isRegister, loginDate} = useAuthHooks()
  
        
        
    return (
        <div className="login-page">

           <div className="mewam">
             
                
                <div className="login-brand">
                    <div className="logo">
                            <Logo />
                    </div>
                    <span className="login-brand-details">
                        CineScope
                    </span>
                
            </div>

            <div className="login-header">
                    <h1 className="login-title">
                        Welcome back
                    </h1>
                    <p className="login-subtitle">
                        Sign in to continue your cinematic journey.
                    </p>
            </div>

            <form action="login" onSubmit={handleSubmit} >
                
                <div login-field>
                    <label  className="labels" htmlFor="email">
                        Email
                    </label>
                    <br />

                    <input 
                    className="email-input"
                    type="email"
                     name="email"
                      value={loginDate.email} 
                      onChange={handleChange} 
                     placeholder="Enter your email address"
                     required />
                     
                </div>

                <div className="login-field">
                     <span className="password-span">
                        <label className="labels"  htmlFor="password">
                        Password
                        </label> 
                        <a  className="forget-pass"  href="#forget password">
                            Forget password?
                        </a>
                        </span> 

                        <input 
                        className="password-input"
                        type="password" name="password"
                        value={loginDate.password}
                        onChange={handleChange}
                        placeholder="Enter your password"  /> 
                </div>

                <div className="signIn-div">
                     <button className="signIn-btn" type="submit">
                        {isLoading ? "Sign In" : "SignIn in progress"}
                     {isRegister}
                        </button>   
                </div>
                
            </form>

            <div className="login-footer">
                 <span className="dont-have-acct">Don't have an account?</span>  
                 <a
                 className="signUp-login-link"
                 href="#signUp">
                    Sign Up
                    </a> 
            </div>
           </div>
        </div>
    )
}