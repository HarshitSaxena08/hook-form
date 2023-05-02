import React ,{useEffect, useState} from 'react';
import { Button, Form} from 'react-bootstrap';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Employees from './Employees';
import {v1 as uuid} from "uuid"; 
import {useNavigate} from 'react-router-dom';

const Edit = () => {

    const [Name, setName]=useState('');
    const [Age, setAge]=useState('');
    const [id, setid]=useState('');
    
    let naviagte= useNavigate();

    var index =Employees.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit=(e)=>{
      e.preventDefault();
      
      let a = Employees[index];
      a.Name = Name;
      a.Age=Age;

      naviagte('/');

  }

    useEffect(()=>{
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setid(localStorage.getItem('id'))
      },[])
    
    return (
    <div>
         <Form className='d-grid gap-2' style={{margin : "15rem"}}>
            <Form.Group className='mb-3' controlId='formName'>
                <Form.Control type='text' placeholder='enter name' value={Name} required onChange={(e)=>setName(e.target.value)}>
                
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formAge'>
                <Form.Control type='text' placeholder='enter Age' value={Age} required onChange={(e)=>setAge(e.target.value)}>

                </Form.Control>
            </Form.Group>

            <Button className='btn bg-primary' onClick={(e)=>handleSubmit(e)} type='submit' >Update</Button>

        </Form>
        
    </div>
  )
}

export default Edit;