import React, { useState , useEffect} from "react";
import { Link} from "react-router-dom";
import { addStudent, getCourses} from "./services/service";
import { getData } from "./Register";
import axios from "axios";
  const StudentDashboard = () =>{

    const [course, setCourses] = useState({});

    const [std, setStd] = useState({
        stdName:"",
        universityName:"",
        // courses:{}
    });

    const [error, setError] = useState({
        errors:{},
        isError:false
    });

    useEffect(()=>{
        getCourses().then((resp) => {
            console.log(resp)
            setCourses(resp)
            console.log(course)
            // navigate("/student-dashboard")
        }).catch((error)=>{
            console.log(error)
            alert("Failed")
        })

    },[])

    const handlerChange=(event, inputProperty)=>{
        setStd({...std,[inputProperty]: event.target.value});
    }

    const resetData=()=>{
        setStd({
            stdName:"",
            universityName:"",
            // courses:{}
        })
    }

    const handlerStudentSubmit=(event)=>{
        event.preventDefault()
        console.log(std)
        //Server API For Sending Data
        addStudent(std).then((resp) => {
            console.log(resp)
            alert("Student Successfully!")
            resetData()
            // navigate("/student-dashboard")
        }).catch((error)=>{
            console.log(error)
            alert("Failed")
        })
    }

    return (
        <body id="page-top">
            <div id="wrapper">
                {/* <!-- Sidebar --> */}
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">Student Dashboard</div>
                    </a>
                    <hr className="sidebar-divider my-0"/>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                            aria-expanded="true" aria-controls="collapsePages">
                            <span>Activities</span>
                        </a>
                        <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <Link className="collapse-item" to="/login">Login</Link>
                                <Link className="collapse-item" to="/">Register</Link>
                            </div>
                        </div>
                    </li>
                </ul>

                <div id="content-wrapper" className="d-flex flex-column">
                    {/* <!-- Main Content --> */}
                    <div id="content">
                        {/* <!-- Topbar --> */}
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                            {/* <!-- Sidebar Toggle (Topbar) --> */}
                            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                <i className="fa fa-bars"></i>
                            </button>

                            {/* <!-- Topbar Navbar --> */}
                            <ul className="navbar-nav ml-auto">
                                {/* <!-- Nav Item - User Information --> */}
                                <li className="nav-item dropdown no-arrow">
                                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Student</span>
                                        <img className="img-profile rounded-circle"
                                            src="img/undraw_profile.svg"/>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        {/* <!-- Begin Page Content --> */}
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <div className="col-xl-10 col-lg-12 col-md-9">
                                    <div className="card o-hidden border-0 shadow-lg my-5">
                                        <div className="card-body p-0">
                                            <div className="row">
                                                <div className="col-lg-6 d-none d-lg-block bg-login-image">
                                                    <img src="img/image2.png"/>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="p-5">
                                                        <div className="text-center">
                                                            <h1 className="h4 text-gray-900 mb-4">Create Student Application</h1>
                                                        </div>
                                                        <form className="user" 
                                                        onSubmit={handlerStudentSubmit}
                                                        >
                                                            <div className="form-group">
                                                            <input type="text" className="form-control form-control-user" id="stdName"
                                                                placeholder="Student Name"
                                                                onChange={(e)=>handlerChange(e,'stdName')}
                                                                value={std.stdName} 
                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                            <input type="text" className="form-control form-control-user" id="universityName"
                                                                placeholder="University"
                                                                onChange={(e)=>handlerChange(e,'universityName')}
                                                                value={std.universityName} 
                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <select className="form-select form-control form-control-user" aria-label="Default select example" >
                                                                <option selected>Open this select menu</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                            <button  className="btn btn-primary btn-user btn-block">Add Student</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright &copy; Student Dashboard 2024</span>
                            </div>
                        </div>
                    </footer>

                </div>
            </div>

            {/* <!-- Scroll to Top Button--> */}
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>
        </body>
    );
}

export default StudentDashboard;