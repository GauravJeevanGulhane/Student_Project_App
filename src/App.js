import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from "./Compontes/Welcome";
import AdminLogin from "./Compontes/AdminLogin";
import StudentLogin from "./Compontes/StudentLogin";
import StudentReg from "./Compontes/StudentReg";
import Navbar from "./Compontes/Navbar";
import AddStudent from "./Compontes/AddStudent";
import ViewStudent from "./Compontes/ViewStudent";
// import DefaultExample from "./Compontes/PieChart";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/AdminLogin" element={<AdminLogin/>}/>
      <Route path="/StudentLogin" element={<StudentLogin/>}/>
      <Route path="/StudentReg" element={<StudentReg/>}/>
      <Route path="/Navbar" element={<Navbar/>}/>
      <Route path="/AddStudent" element={<AddStudent/>}/>
      <Route path="/ViewStudent" element={<ViewStudent/>}/>
      {/* <Route path="/PieChart" element={<PieChart/>}/> */}
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
