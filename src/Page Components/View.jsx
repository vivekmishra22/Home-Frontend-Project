// import React from 'react';
import { Col, Container, Row, Table, Button } from 'react-bootstrap';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
=======
import { FiEdit } from "react-icons/fi";
// import { MdDelete } from "react-icons/md";
// import { AiTwotoneDelete } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { RiDeleteBin7Line } from "react-icons/ri";
>>>>>>> 268c5aa29692419f36d9b3c24a44da97995244a8
// import { useNavigate } from 'react-router-dom';
// import { BiPencil } from "react-icons/bi";

const View = () => {

    const [userData, setUserData] = useState([])

    // const navigate = useNavigate()

    useEffect(() => {
        showUsers()
    }, [])

    const showUsers = () => {
        axios.get(`http://localhost:8000/getuser`)
            .then(res => {
                setUserData(res.data.data)
            }).catch(err => {
                console.log(err);
            })
    }

    const deletedata = (id) => {
        axios.delete(`http://localhost:8000/deleteuser/${id}`)
            .then(
                res => {
                    console.log('User Deleted : ', res.data);
                    alert('User Delete');
                    showUsers()
                }
            ).catch(error => {
                console.error('Error Deleting User : ', error);
            });
    }

    return (
        <>
            <Container>
                <Row>
                    <Col md={10} xs={12} className='my-4 mx-auto'>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Sr. No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Mobile</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>Gender</th>
                                    <th>Subject</th>
                                    <th>Images</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.map((Register, id) => {
                                    return (
                                        <tr key={id}>
                                            <td>{id + 1}</td>
                                            <td>{Register.fname}</td>
                                            <td>{Register.password}</td>
                                            <td>{Register.email}</td>
                                            <td>{Register.mobile}</td>
                                            <td>{Register.address}</td>
                                            <td>{Register.city}</td>
                                            <td>{Register.gender}</td>
                                            <td>{Register.subject}</td>
                                            <td></td>
<<<<<<< HEAD
                                            <td>
                                            <Button className='me-2'
                                                    onClick={ () => {
                                                        // navigate(/updateuser/${Register._id})
                                                    }}
                                                >Edit</Button>
                                                <Button
                                                    onClick={ () => deletedata(Register._id)}
                                                >delete</Button>
=======
                                            <td className='px-2 d-flex justify-content-center align-items-center'>
                                                <Button className='me-1 bg-transparent border-0'>
                                                    {/* d-flex align-items-center */}
                                                    {/* onClick={ () => {
                                                        navigate(/updateuser/${Register._id})
                                                    }} */}
                                                    <FiEdit className='fs-5 text-primary' />
                                                    {/* Edit */}
                                                </Button>
                                                <Button className='bg-transparent border-0' onClick={() => deletedata(Register._id)}>
                                                    {/* <MdDeleteOutline /> */}
                                                    {/* <AiTwotoneDelete /> */}
                                                    {/* <AiOutlineDelete className='fs-5 text-primary' /> */}
                                                    <RiDeleteBin7Line className='fs-5 text-danger' />
                                                    {/* <MdDelete className='bg-primary' /> */}
                                                    {/* Delete */}
                                                </Button>
>>>>>>> 268c5aa29692419f36d9b3c24a44da97995244a8
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default View;
