// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import StudentDashboard from './StudentDashboard';
// import{RouterProvider, createBrowserRouter} from "react-router-dom";

// function App() {
//   const route = createBrowserRouter ([
//     {
//       path:"/",
//       element: <Register/>,
//     },
//     {
//       path:"/login",
//       element: <Login/>,
//     }
    
//   ]);
//   return 
//     <div className="App">
//         <RouterProvider router = {route}></RouterProvider>
//     </div>;
  
// }

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Register />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
