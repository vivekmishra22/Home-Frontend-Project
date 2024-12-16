import React from 'react';
import { Container, Row, Col, Form, Dropdown, DropdownButton } from 'react-bootstrap';

const Register = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={8} className='mx-auto my-4'>
            <Form className='form-control'>
              <h2 className='text-center'>Registration Form</h2>
              <p>Please enter your details to join us!</p>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter Name" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="email" placeholder="Enter Password." />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="email" placeholder="Enter Mobile." />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" rows={1} />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>City</Form.Label>
                                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter Name" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="email" placeholder="Enter Password" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            {/* <h2 className='text-center'>Registration Form</h2>
            <p>Please enter your details to join us!</p>
            <Row>
              <Col md={4}>hello</Col>
              <Col md={4}>hello</Col>
              <Col md={4}>hello</Col>
            </Row> */}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Register
