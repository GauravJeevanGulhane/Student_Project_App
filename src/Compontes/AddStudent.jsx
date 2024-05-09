import React, { Component } from "react";

import AxoisAPI from "../Services/AxoisAPI.jsx";
class AddStudent extends Component 
{
    constructor(props)
    {
        super(props);
        this.state={
            id:0,
            name:"",
            email:"",
            contact:""
        };
    }

    AddStu=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    saveStudent=(e)=> {
        e.preventDefault();

        let student = {
          
            name: this.state.name,
            email: this.state.email,
            contact: this.state.contact,
           
           
        };
        AxoisAPI.studentAdd(student).then((res) => {
            this.setState({ msg: "Student added successfully.", error: "" });
            console.log(res);
        });
    }

render(){
    return(
        <>
        <h1>Add Student</h1>
        <br/>
      <div className="container">
        <form>
          
          <div class="mb-3">
            <input type="text" name="name" class="form-control" placeholder="Name" value={this.state.name} onChange={this.AddStu} />
          
          
            <input type="text" name="email" class="form-control" placeholder="Email" value={this.state.email} onChange={this.AddStu} />
          
            <input type="text"  name="contact" class="form-control" placeholder="Contact" value={this.state.contact} onChange={this.AddStu} />
          

            <input type="submit" name="btn" class="form-control" value="Add" onClick={this.saveStudent}/>
         
            </div>
        </form>
      </div>
      </>
    );
}
}

export default AddStudent;