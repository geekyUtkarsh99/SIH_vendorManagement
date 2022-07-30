import { Navbar, Container, Nav } from 'react-bootstrap';
import Auth from '../components/Auth';

function NavigationBar() {
	return (
		<Navbar sticky={"top"} expand="lg">
			<Container>
				<Navbar.Brand href="#home">svas</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
					<Nav className="flex align-contents-center">
                        <h6 className='m-0'>Street Vendor Allocation System</h6>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavigationBar;
