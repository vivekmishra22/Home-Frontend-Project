// import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const View = () => {

    const [userData, setUserData] = useState([])

    useEffect(() => {
        showUsers()
    }, [])

    const showUsers = () => {
        axios.get('http://localhost:8000/getuser')
            .then(res => {
                setUserData(res.data.data)
            }).catch(err => {
                console.log(err);
            })
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
                                            <td>{Register.email}</td>
                                            <td>{Register.mobile}</td>
                                            <td>{Register.address}</td>
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
