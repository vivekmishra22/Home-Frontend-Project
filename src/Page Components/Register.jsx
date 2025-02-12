// This imports the useState hook from React, which allows us to manage state inside a functional component
// Importing necessary modules and components
// React and useState are imported from 'react' to enable state management in functional components
import React, { useState } from 'react';  // Importing React and useState hook for managing component state
import { Container, Row, Col, Form, Button } from 'react-bootstrap';  // Importing Bootstrap components for styling and layout
import axios from 'axios';    // Importing Axios for making HTTP requests , Importing axios for making HTTP requests to the backend

// Defining the Register functional component
const Register = () => {

  // Each useState creates a state variable and a setter function to update that variable
  // useState: A React Hook that allows functional components to manage state.
  
  // Initializing state variables using useState hook to store form data
  // State variables and their corresponding setter functions are defined using useState
  // Each state variable holds the value of a form field
  const [fname, setFname] = useState("");         // State for storing full name
  const [email, setEmail] = useState("");         // State for storing email
  const [password, setPassword] = useState("");   // State for storing password
  const [mobile, setMobile] = useState("");       // State for storing mobile number
  const [address, setAddress] = useState("");     // State for storing address
  const [city, setCity] = useState("");           // State for storing selected city
  const [gender, setGender] = useState("");       // State for storing gender selection
  const [subject, setSubject] = useState([]);     // State for storing selected subjects (array), State for the user's selected subjects (as an array)

  // Function to handle checkbox selection for subjects, Function to handle changes in the subject checkboxes
  function handleSubjectChange(e) {
    const value = e.target.value;                             // Getting value of the selected checkbox, Get the value of the checkbox
    // If the checkbox is checked, add the value to the subject array
    if (e.target.checked) {
      setSubject([...subject, value]);                        // If checked, add subject to array
    } else {
      // If the checkbox is unchecked, remove the value from the subject array
      setSubject(subject.filter((item) => item !== value));   // If unchecked, remove subject from array
    }
  }

  // Function to handle form submission, Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault()          // Prevents default form submission behavior

    // const newData = new FormData()
    // newData.append('fname', fname)
    // newData.append('email', email)
    // newData.append('password', password)
    // newData.append('mobile', mobile)
    // newData.append('address', address)

     // Create an object containing all the form data
    const userData = {
      fname,
      email,
      password,
      mobile,
      address,
      city,
      gender,
      subject
    }

    // Axios is an HTTP client used to send requests to a backend server.
    // Sending user data to backend API using Axios, Send a POST request to the backend using axios
    axios.post('http://localhost:8000/adduser', userData).then(res => {
      console.log("hi", res.data);          // Logging response data, Log the response data
      alert('Data Added Successfully!!');   // Showing success alert, Show a success message
      // Resetting form fields after successful submission
      setFname("");
      setEmail("");
      setPassword("");
      setMobile("");
      setAddress("");
      setCity("");
      setGender("");
      setSubject([]);
    })
      .catch(err => {
        console.log(err);       // Logging any errors encountered, Log any errors that occur during the request
      })

  }

  return (
    <>
      <Container>
        <Row>
          <Col md={8} className='mx-auto my-4'>
            <div className="border-top border-5 border-primary"></div>
            <Form className='form-control' onSubmit={handleSubmit}>           {/* Form with submit handler, Form element with onSubmit handler */}
              <h2 className='text-center'>REGISTRATION FORM</h2>
              <p>Please enter your details to join us!</p>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" value={fname} required
                      onChange={(e) => setFname(e.target.value)}                // Update state on change
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" value={email} required
                      onChange={(e) => setEmail(e.target.value)}                // Update state on change
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" value={password} required
                      onChange={(e) => setPassword(e.target.value)}             // Update state on change
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="number" placeholder="Enter Mobile." value={mobile} required
                      onChange={(e) => setMobile(e.target.value)}               // Update state on change
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" rows={1} placeholder="Enter Address." value={address} required
                      onChange={(e) => setAddress(e.target.value)}                // Update state on change
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>City</Form.Label>
                    <Form.Select aria-label="select" name='city'
                      onChange={(e) => setCity(e.target.value)} required            // Update state on change
                    >
                      <option>-Select City-</option>
                      <option value="Nashik">Nashik</option>
                      <option value="Pune">Pune</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Dehli">Dehli</option>
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
                      value="Male"
                      checked={gender === "Male"}
                      onChange={(e) => setGender(e.target.value)}           // Update state on change
                    />
                    <Form.Check
                      type="radio"
                      inline label="Female"
                      name="gender"
                      id="gender-female"
                      value="Female"
                      checked={gender === "Female"}
                      onChange={(e) => setGender(e.target.value)}
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
                      value="HTML"
                      onChange={handleSubjectChange}
                    />
                    <Form.Check
                      inline
                      type="checkbox"
                      label="CSS"
                      name="CSS"
                      value="CSS"
                      onChange={handleSubjectChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      type="file"
                      // required
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

export default Register;      // Exporting Register component
