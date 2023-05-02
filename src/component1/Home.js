import React from 'react';
import {Button,Form,Table} from 'react-bootstrap';
import Employees from './Employees';
import {useNavigate, Link} from "react-router-dom";

const Home = () => {
    let history = useNavigate();
    
    const handleDelete =(id) =>{
        var index =Employees.map(function(e){
            return e.id
        }).indexOf(id);

        Employees.splice(index,1);

        history('/');
    }

    const handleEdit=(id ,Name,Age) =>{
            localStorage.setItem('Name',Name);
            localStorage.setItem('Age',Age);
            localStorage.setItem('id',id);
    }
  return (
    <>
        <div style={{margin:"10rem"}}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>
                           Sr.no
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>

                </thead>
                <tbody>
                    {
                        Employees && Employees.length > 0
                        ?
                        Employees.map((item)=>{
                           return(
                              <tr>
                                <td>{item.id}</td>
                                <td>{item.Name}</td>
                                <td>{item.Age}</td>
                                <td>
                                    <Link to={'/edit'}>
                                    <button onClick={()=>handleEdit(item.id, item.Name,item.Age)} 
                                    className='btn bg-primary'>Edit</button>
                                    </Link>
                                    &nbsp;
                                    <button onClick={()=>handleDelete(item.id)}
                                    className='btn bg-primary'>Delete</button>
                                </td>
                              </tr>
                           )
                        })
                        :"No Data Available"
                    }
                </tbody>
            </Table>
            <br/>
            <Link className='d-grid gap-2' to="/create">
                <button size='lg' className='btn bg-primary'>Create</button>
            </Link>
        </div>
    </>
  )
}

export default Home;