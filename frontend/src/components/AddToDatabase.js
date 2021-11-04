import React, { useState } from "react"
import { Form, Button, Col } from "react-bootstrap"
import axios from "axios"

const AddToDatabase = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [id, setId] = useState(0)
  const [validated, setValidated] = useState(false)
  const [error, setError] = useState("")

  const submitHandler = async (e) => {
    e.preventDefault()
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }

    try {
      await axios.post(
        "http://localhost:5002/api",
        {
          firstName,
          lastName,
          id,
        },
        config
      )

      alert("data added")
    } catch (error) {
      setError(error)
    }
  }

  return (
    <>
      {error ? (
        <div>{error}</div>
      ) : (
        <>
          <Form onSubmit={submitHandler}>
            <Form.Group className='mb-3' controlId='firstName'>
              <Form.Label>Enter firstName</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter firstName'
                pattern='[A-Z]{1}[a-z]+'
                required
                title='starts with capital letter then small letters'
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='mb-3' controlId='lastName'>
              <Form.Label>Enter lastName</Form.Label>
              <Form.Control
                type='text'
                required
                placeholder='Enter lastName'
                pattern='[A-Z]{1}[a-z]+'
                title='starts with capital letter then small letters'
                onChange={(e) => setLastName(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='mb-3' controlId='id'>
              <Form.Label>Enter id number</Form.Label>
              <Form.Control
                type='text'
                required
                placeholder='Enter id'
                pattern='[0-9]{9}'
                title='9 digit letter'
                onChange={(e) => setId(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Button variant='success' type='submit'>
              Add to database
            </Button>
          </Form>
        </>
      )}
    </>
  )
}

export default AddToDatabase
