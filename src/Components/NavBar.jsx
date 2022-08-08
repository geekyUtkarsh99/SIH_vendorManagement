import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import * as GrIcons from 'react-icons/gr';
function BrandExample() {
  return (
    <>
      <Navbar className="justify-content-center p-0 d-invert" fixed="sticky"  expand="sm" bg="light"  variant="light" >
        <Container>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          Town Vending Commitee, Jabalpur <GrIcons.GrFormClose/>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;