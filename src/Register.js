import React, { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { register } from "./services/service";

export const getData = null
const Register = () =>{
    const navigate = useNavigate();

    const [data, setData] = useState({
        userName:"",
        email:"",
        password:""
    });

    const [error, setError] = useState({
        errors:{},
        isError:false
    });

    // useEffect(()=>{
    //     console.log(data)
    // },[data])

    //Handler Change Fn
    const handlerChange=(event, inputProperty)=>{
        setData({...data,[inputProperty]: event.target.value});
    }

    //form reset
    const resetData=()=>{
        setData({
            userName:"",
            email:"",
            password:""
        })
    }

    getData = data
    //submit form
    const submitForm=(event)=>{
        event.preventDefault()
        console.log(data)
        //Server API For Sending Data
        register(data).then((resp) => {
            console.log(resp)
            alert("User Created Successfully!")
            resetData()
            navigate("/student-dashboard",data)
        }).catch((error)=>{
            console.log(error)
            alert("Failed")
        })
    }

    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-10 col-lg-12 col-md-9">
                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">
                            <div class="row">
                                <div class="col-lg-6 d-none d-lg-block bg-register-image">
                                    <img src="img/image.png"/>
                                </div>
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                                        </div>
                                        <form class="user" onSubmit={submitForm}>
                                            <div class="form-group">
                                                    <input type="text" class="form-control form-control-user" id="userName"
                                                        placeholder="Full Name"
                                                        onChange={(e)=>handlerChange(e,'userName')}
                                                        value={data.userName} />
                                            </div>
                                            <div class="form-group">
                                                <input type="email" class="form-control form-control-user" id="email"
                                                    placeholder="Email Address"
                                                    onChange={(e)=>handlerChange(e,'email')}
                                                    value={data.email} />
                                            </div>
                                            <div class="form-group">
                                                    <input type="password" class="form-control form-control-user"
                                                        id="password" placeholder="Password"
                                                        onChange={(e)=>handlerChange(e,'password')}
                                                        value={data.password} />
                                            </div>
                                            <button class="btn btn-primary btn-user btn-block">
                                            Register Account</button>
                                        </form>
                                        <div class="text-center">
                                            <Link to="/login" class="small">Already have an account? Login!</Link>
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

  export default Register;