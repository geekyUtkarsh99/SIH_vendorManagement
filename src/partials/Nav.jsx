import { Navbar, Container, Button, Nav } from 'react-bootstrap';

function NavigationBar() {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="#home">svas</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
					<Nav>
						<Nav.Link href="">Home</Nav.Link>
						<Nav.Link href="">Link 1</Nav.Link>
						<Button>Login / Sign Up</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavigationBar;
