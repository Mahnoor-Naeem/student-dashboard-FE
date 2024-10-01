import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "./services/service";

const Login = () =>{
    const navigate = useNavigate();

    const [login, setLogin] = useState({
        email:"",
        password:""
    });

    const handlerChange=(event, inputProperty)=>{
        setLogin({...login,[inputProperty]: event.target.value});
    }

    const resetLoginData=()=>{
        setLogin({
            email:"",
            password:""
        })
    }

    const handlerLogin=(event)=>{
        event.preventDefault()
        console.log(login)

        if(login.email.trim() == '' || login.password.trim() == '')
            alert("Email Or Password Can Not Be Empty!")

        //Server API For Sending Data
        userLogin(login).then((resp) => {
            console.log(resp);
            alert("You Are Logedin");
            navigate("/student-dashboard")
            // resetLoginData();
            
        }).catch((error)=>{
            console.log(error)
            alert(error)
        })

    }

    return (
        <div class="container">
    
            <div class="row justify-content-center">
    
                <div class="col-xl-10 col-lg-12 col-md-9">
    
                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">
                            {/* <!-- Nested Row within Card Body --> */}
                            <div class="row">
                                <div class="col-lg-6 d-none d-lg-block bg-login-image">
                                    <img src="img/image.png"/>
                                </div>
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form class="user" onSubmit={handlerLogin}>
                                            <div class="form-group">
                                                <input type="email" class="form-control form-control-user"
                                                    id="email" aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..."
                                                    onChange={(e)=>handlerChange(e,'email')}
                                                    value={login.email}/>
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control form-control-user"
                                                    id="password" placeholder="Password"
                                                    onChange={(e)=>handlerChange(e,'password')}
                                                    value={login.password}/>
                                            </div>
                                            <button  class="btn btn-primary btn-user btn-block">Login</button>
                                        </form>
                                        <div class="text-center">
                                            <Link to="/" class="small">Create an Account!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
    
            </div>
    
        </div>
    );
}
export default Login;