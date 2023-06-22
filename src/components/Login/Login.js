import "./Login.css";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const[credentials,setcredentials]=useState({email:"",password:""})
  // User Login info
  // const database = [
  //   {
  //     username: "admin",
  //     password: "testing_admin",
  //   },
  // ];

  // const errors = {
  //   uname: "invalid username",
  //   pass: "invalid password",
  // };

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();
     
  try {
    const response=await fetch("http://localhost:8000/user/login",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email:credentials.email,password:credentials.password})
    });
    const json=await response.json();
    console.log(json);
    
  } catch (error) {
    console.log("Password not Matched")
  }
   
   
  //   if(json.user){
  //     // navigate("/adminDashboard");
  //     console.log("Password Matched")
  //   }
  //   else{
  //     // alert("enter vaild data")
  //     console.log("Password not Matched")
  //   }
   }
  const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]: event.target.value});
  }
  //   var { uname, pass } = document.forms[0];

  //   // Find user login info
  //   const userData = database.find((user) => user.username === uname.value);

  //   // Compare user info
  //   if (userData) {
  //     if (userData.password === pass.value) {
  //       navigate("/adminDashboard");
  //     } else {
  //       setErrorMessages({ name: "pass", message: errors.pass });
  //     }
  //   } else {
  //     // Username not found
  //     setErrorMessages({ name: "uname", message: errors.uname });
  //   }
  // };

  // // Generate JSX code for error message
  // const renderErrorMessage = (name) =>
  //   name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   );
  
  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="input-container">
            <label>Username </label>
            <input type="email" name="email" value={credentials.email} onChange={onChange} required />
            {/* {renderErrorMessage("uname")} */}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="password" value={credentials.password} onChange={onChange} required />
            {/* {renderErrorMessage("pass")} */}
          </div>
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  return (
    <>
      <div className="background">
        <div className="container">
          <div className="login-form">
            <div className="title">Sign In</div>
            {isSubmitted ? <AdminDashboard /> : renderForm}
          </div>
        </div>
      </div>
    </>
  );
}
