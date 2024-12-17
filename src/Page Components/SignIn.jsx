import React from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'

const SignIn = () => {
    return (
        <>

            <Container>
                <Row>
                    <Col md={6} className='mx-auto my-4'>
                            <div className='border-primary border-5 border-top'></div>
                        <Form className='form-control'>
                            <h2 className='text-center'>SIGN IN</h2>
                            <p>Please enter your details to join us!</p>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" />
                            </Form.Group>
                            <Form.Group>
                                <Button className='w-100' type="submit">Submit form</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Form>

            </Form>
        </>
    )
}

export default SignIn
