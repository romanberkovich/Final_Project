import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <Navbar navbar="sm" fixed="bottom" expand="xl" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#home">QUIZAPP</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            MadeBy: <a >Dor Shlush</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;