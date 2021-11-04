import React, { useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import axios from "axios"
import DataBox from "./DataBox"

const ShowDataList = () => {
  const [error, setError] = useState("")
  const [listData, setListData] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    axios
      .get(`http://localhost:5002/api/`)
      .then((response) => {
        setListData(response.data.data)
      })
      .catch((err) => setError(err))
  }

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <Button onClick={submitHandler}>Show Data List</Button>

          <Container>
            <Row>
              {listData.length !== 0 &&
                listData.map((data, i) => (
                  <Col key={i} sm={12} md={6} lg={4} xl={4} className='my-2'>
                    <DataBox data={data} />
                  </Col>
                ))}
            </Row>
          </Container>
        </>
      )}
    </>
  )
}

export default ShowDataList
