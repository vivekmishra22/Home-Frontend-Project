import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Register = () => {

  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  function handleSubmit(e) {
    e.preventDefault()

    // const newData = new FormData()
    // newData.append('fname', fname)
    // newData.append('email', email)
    // newData.append('password', password)
    // newData.append('mobile', mobile)
    // newData.append('address', address)

    const userData = {
      fname,
      email,
      password,
      mobile,
      address
    }

    axios.post('http://localhost:8000/adduser', userData).then(res => {
      console.log("hi", res.data);
      alert('Data Added Successfully!!');
      setFname("");
      setEmail("");
      setPassword("");
      setMobile("");
      setAddress("");
    })
      .catch(err => {
        console.log(err);
      })

  }

  return (
    <>
      <Container>
        <Row>
          <Col md={8} className='mx-auto my-4'>
            <div className="border-top border-5 border-primary"></div>
            <Form className='form-control' onSubmit={handleSubmit}>
              <h2 className='text-center'>REGISTRATION FORM</h2>
              <p>Please enter your details to join us!</p>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" value={fname} required
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" value={email} required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" value={password} required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="number" placeholder="Enter Mobile." value={mobile} required
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" rows={1} placeholder="Enter Address." value={address} required
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>City</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>-Select City-</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='me-2'>Gender</Form.Label>
                    <Form.Check
                      type="radio"
                      inline label="Male"
                      name="gender"
                      id="gender-male"
                      value="male"
                    />
                    <Form.Check
                      type="radio"
                      inline label="Female"
                      name="gender"
                      id="gender-female"
                      value="female"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='me-2'>Subject</Form.Label>
                    <Form.Check
                      inline
                      type="checkbox"
                      label="HTML"
                      name="HTML"
                    />
                    <Form.Check
                      inline
                      type="checkbox"
                      label="Css"
                      name="Css"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      type="file"
                      required
                      name="file" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Form.Group>
                  <Button className='w-100' type="submit">Submit form</Button>
                </Form.Group>
              </Row>
            </Form>
          </Col >
        </Row >
      </Container >
    </>
  )
}

export default Register;
