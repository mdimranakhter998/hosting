import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Navbar_r } from '../component/Navbar';
export function New_conn_form() {

    const hhu = () => {
        alert("enter otp received");
        // $('.qw').click(function () {
        //     $('input').removeAttr('disabled');
        //  });
    }
    return (

        <>
            <Navbar_r />
            <Container>
                <br />
                <br />
                <br />

                <Form className='common_css'>
                    <h5>
                        Register Mobile for New Connection
                    </h5>
                    <br />

                    <Form.Group className="mb-3 qw" controlId="formBasicEmail">
                        <Form.Label >Mobile No.</Form.Label>
                        <Form.Control type="tel" placeholder="" />
                    </Form.Group>


                    <Button variant="primary" onClick={hhu} className="m-1" size="sm">
                        Send OTP
                    </Button>

                </Form>
            </Container>
            <br /><br /><br />  <br /><br /><br />  <br /><br /><br />  <br /><br /><br /> <br /><br />

        </>
    )
}