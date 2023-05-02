import React ,{useState} from 'react';
import { Button, Form} from 'react-bootstrap';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Employees from './Employees';
import {v1 as uuid} from "uuid"; 
import {useNavigate} from 'react-router-dom';

export const Add1 = () => {
    const [Name, setName]=useState('');
    const [Age, setAge]=useState('');
    
    let naviagte= useNavigate();
  
    
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const id=uuid();
        let uniqueId= id.slice(0,3);

        let a= Name,
        b= Age;

        Employees.push({id: uniqueId, Name: a, Age:b});

        naviagte('/');

    }

    return (
    <div>
        <Form className='d-grid gap-2' style={{margin : "15rem"}}>
            <Form.Group className='mb-3' controlId='formName'>
                <Form.Control type='text' placeholder='enter name' required onChange={(e)=>setName(e.target.value)}>
                
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formAge'>
                <Form.Control type='text' placeholder='enter Age' required onChange={(e)=>setAge(e.target.value)}>

                </Form.Control>
            </Form.Group>

            <Button className='btn bg-primary' onClick={(e)=>handleSubmit(e)} type='submit' >submit</Button>

        </Form>
    </div>
  )
}
