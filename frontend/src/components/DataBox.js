import React from "react"
import { Card } from "react-bootstrap"

const StockBox = ({ data }) => {
  return (
    <Card className='my-2 p-2 rounded hovering h-100'>
      <Card.Body>
        <Card.Text>First Name: {data.firstName}</Card.Text>
        <Card.Text as='p'>lastName: {data.lastName}</Card.Text>
        <Card.Text as='p'>id: {data.id}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default StockBox
