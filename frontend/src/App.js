import ShowDataList from "./components/ShowDataList"
import AddToDatabase from "./components/AddToDatabase"
import { Container, Row } from "react-bootstrap"

function App() {
  return (
    <div className='App'>
      <Container>
        <Row className='section'>
          <AddToDatabase />
        </Row>
        <Row className='section'>
          <ShowDataList />
        </Row>
      </Container>
    </div>
  )
}

export default App
