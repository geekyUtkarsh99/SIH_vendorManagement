import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <>
      <Navbar className="justify-content-center" bg="light" variant="light" >
        <Container>
          <Navbar.Brand href="#home">
            SVAS
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;