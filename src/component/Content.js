import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pole from '../slider/pole.jpg';
import "./css/Content.css";
import BM from '../slider/BM.png';



export function Content() {
    return (
        <>



            <Container>
                <Row className="about_us">

                    <h3 className='abt_us_h' >South & North Division</h3>


                    <Col>
                        <img align="left" className="me-3" style={{ height: '400px' , width:'600px' }}  width="350px" alt='...' src={BM} />
                        <p>
                        🟨  NBPDCL is a company registered under
                            the provisions of Companies Act 1956 and is a fully owned subsidiary Company of BSPHCL.
                            <br />
                            <br />
                            The Company is engaged primarily in the business of distribution of Electricity.
                            It has been vested with the distribution assets, interest in property, rights andliabilities of the erstwhile BSEB necessary
                            for the business of distribution inits area of distribution comprising of all 21 districts of North Bihar
                            namely  <br /> 1. West Champaran, 2. East Champaran, 3. Sitamadhi, 4. Sheohar, 5. Muzaffarpur, 6.Vaishali, 7. Saran, 8. Siwan, 9. Gopalgunj, 10. Mahubani, 11. Darbhanaga, 12. Samastipur,13. Begusarai,
                            14. Khagaria, 15. Saharsa, 16. Supaul, 17. Medhepura, 18. Araria, 19. Katihar, 20. Purnea and 21. Kishangunj.
                            <br />
                            <br />


                            🟦 SBPDCL is also a company registered under
                            the provisions of Companies Act 1956 and is a fully owned subsidiary Company of BSPHCL.
                            The Company has been given the status of a Distribution licensee as per Section14 of the Electricity Act 2003. In order to fulfill the obligations of the Distributionlicensee as mandated under the provision of
                            Bihar State Electricity Reforms TransferScheme 2012.
                            It has been vested with the distribution assets, interest in property, rights andliabilities of the erstwhile BSEB necessary
                            for the business of distribution inits area of distribution comprising of all 21 districts of North Bihar namely &nbsp; 1. Kaimur, 2. Buxur, 3. Rohtas, 4. Bhojpur, 5. Aurangabad, 6. Arwal, 7. Patna, 8. Jahanabad, 9. Gaya, 10. Nalanda, 11. Nawada, 12. Sheikhpura,13. Lakhisarai,
                            14. Jamui, 15. Munger, 16. Bhagalpur, 17. Banka.
                            <br />
                         


                        </p>
                    </Col>

                </Row>

                {/* ***********************about us************************************** */}

                <Row className="about_us">

                    <h3 className='abt_us_h' >About Us</h3>


                    <Col>
                        <img align="left" className="img-thumbnail me-3" width="350px" alt='...' src={pole} />
                        <p>
                        The Bihar Electricity Regulatory Commission has been established by the Government of Bihar under Section 17 of the Electricity Regulatory Commissions Act,1998 vide Government of Bihar Notification no. 1284  dated 15th April, 2002. The Electricity Regulatory Commissions Act, 1998 along with the Indian Electricity Act, 1910 and Electricity (Supply) Act, 1948 was repealed by Section 185 of the Electricity Act, 2003. The first proviso of Section 82 (1) has ensured continuity of the Commission along with that of State Electricity Regulatory Commissions by laying down that the State Regulatory Commission established by the State Govt. under Section 17 of Electricity Regulatory Commissions Act, 1998, and  functioning as such immediately before the appointed date shall be the State Commission for the purpose of the Electricity Act, 2003.
                        <br/><br/>
                           The BERC was constituted in May 2005. The first Chairman of the Commission was Hon’ble Justice B.N.P. Singh who took oath of office on 20th May, 2005 before His Excellency the Governor of Bihar and retired on 17th April, 2007. The other Members namely Shri B.K. Halder and Shri S.K. Jayaswal who were appointed in May, 2005 and took oath of Office on 11th July and 26th July, 2005 respectively before His Excellency the Governor of Bihar. The Commission became functional from 15th August, 2005. The Commission is located at Vidyut Bhawan-II, Jawahar Lal Nehru Marg (Bailey Road), Patna 800 021. 
                           <br/><br/>
                           The Electricity Act, 2003 has come into force w.e.f. 10.06.2003 consolidating the laws relating to Generation, Transmission, Distribution and Trading and use of Electricity and for taking measures conducive to the development of Electricity Industry, promoting competition therein, protecting interest of consumers and supply of electricity to all, rationalization of electricity tariff, ensuring transparent policies regarding subsidies, promotion of efficient and environmentally benign policies. Generation has been delicensed to promote power generation and reduce the gap between demand and supply to the least possible. This Act aims to promote investment through private participation and also to provide the consumers with quality power and service at the reasonable and affordable cost. It also protects the private investors by protecting the investment by grant of return on the investment. It is expected that the competition in power sector will bring better technology, improved service and reduced cost making the electricity cheaper for the end-users.
                        </p>
                    </Col>

                </Row>





            </Container>

        </>



    )
}