import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <div classNmae="App">
    <header>
    <Navbar  bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    <main>
          <Container>
      <Row className="px-4 my-5">
        <Col sm={7}>
          <Image src="https://picsum.photos/900/400" fluid rounded/>  
        </Col>
        <Col sm={5}>
          <h1 class="font-wight-light">Tagline</h1>
          <p class="mt-4">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
          <Button variant="outline-primary">Call the action</Button>
        </Col>
      </Row>
      <Row>
        <Card className="bg-secondary text-center text-white my-5 py-4">
             <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
      </Row>
      <Row>
      <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/180/100" class="my-3 px-3 rounded" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/id/201/180/100" class="my-3 px-3 rounded" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/180/100" class="my-3 px-3 rounded" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
      </Row>
    </Container>
    </main>
    <footer class="py-5 my-5 bg-dark">
      <Container className='py-2 text-white text-center'>
        <p>@ Cpyright Othmane Filali</p>
      </Container>
    </footer>
    </div>
  );
}

export default BasicExample;