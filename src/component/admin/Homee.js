// import { Link, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar_admin } from '../admin/Navbarr';
import { Sidebar } from '../admin/Sidebar';

export function Homee() {
    return (
        <>
            <Navbar_admin />
            <Container>

                <hr />
                <h5>Dashboard</h5>
                <hr />
                <br />
                <Row >
                    <Col sm={2}>
                        <Sidebar />
                    </Col>



                    <Col sm={10}>

                    </Col>
                  
                </Row>
            </Container>

        </>
    )
}