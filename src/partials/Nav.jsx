import { Navbar, Container, Nav } from 'react-bootstrap';
import Auth from '../components/Auth';

function NavigationBar() {
	return (
		<Navbar sticky={"top"} bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="#home">svas</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
					<Nav>
						<Nav.Link href="">Home</Nav.Link>
						<Nav.Link href="">Link 1</Nav.Link>
						<Auth/>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavigationBar;
