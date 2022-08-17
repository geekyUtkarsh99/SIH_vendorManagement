import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';

function Bar() {
    return (
        <>
            <Navbar className="justify-content-end bg-white border-bottom w-100">
                <Container>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Town Vending Commitee, Jabalpur
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Bar;
