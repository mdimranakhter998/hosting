import Container from 'react-bootstrap/Container';

import { Navbar_r } from './Navbar';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

export function RTI() {
  return (

    <>  <Navbar_r />
      <Container >
        <br />
        <br />
        <br />



        <Form className='common_csss' >
          <h5>Name and address of the officers related to RTI :</h5>
          <br />

         

            <Table bordered hover size="lg">
              <thead>
                <tr>
                  <th>Name.</th>

                  <th>Designation</th>
                  <th>Contact No.</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Shri Raamish Tauseef</td>

                  <td>Appellate Authority</td>
                  <td>0612-2504489 (O) </td>

                </tr>

                <tr>
                  <td>Shri Dipak Kumar</td>

                  <td>Public Information Officer</td>
                  <td>0612-2950374 (O)</td>


                </tr>

                <tr>
                  <td>Shri Amit Kumar Laha</td>

                  <td>Asst. Public Information Officer</td>
                  <td>0612-2950374 (O)</td>


                </tr>
              </tbody>


            </Table>
            <br />
            
            ☛  Address:
            <br />
            Bihar Electricity Regulatory Commission
            <br />
            Ground Floor, Vidyut Bhawan-2
            <br />
            J.L. Nehru Marg, Patna - 800021
       




        </Form>





      </Container>


     


    </>
  )
}