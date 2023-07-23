import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { Navbar_r } from '../component/Navbar';

export function Chng_pass() {

    const hhu = () => {
        alert("enter otp received");
    }
    return (

        <>
               <Navbar_r />

            <Container>
            <br />
                <br />
                <br />

                <Form className='common_css'>
                <h5>Change Password</h5>
                    <br />

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Mobile No.</Form.Label>
                        <Form.Control type="tel" placeholder="" />
                    </Form.Group>


                    <Button variant="primary" onClick={hhu} className="m-1" size="sm">
                        Send OTP
                    </Button>

                </Form>
            </Container>
           

        </>
    )
}