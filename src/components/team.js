import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/team.css'
import about4 from '../images/25.svg'
import about1 from '../images/58.svg'
import about2 from '../images/82.svg'
import about3 from '../images/160.svg'
import Card from 'react-bootstrap/Card'
import { CardGroup } from 'react-bootstrap';


function Team() {
  return (
    <div className="team">
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>Team</h1>
                </div>
                <CardGroup className='row col-12'>
                    <Card style={{ width: '15rem' }} >
                        <Card.Img variant="top" src={about2} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            {/* <Card.Link href="#">Card Link</Card.Link> */}
                            {/* <Card.Link href="#">Another Link</Card.Link> */}
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={about3} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            {/* <Card.Link href="#">Card Link</Card.Link> */}
                            {/* <Card.Link href="#">Another Link</Card.Link> */}
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem' }} className='col-md-6'>
                        <Card.Img variant="top" src={about4} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            {/* <Card.Link href="#">Card Link</Card.Link> */}
                            {/* <Card.Link href="#">Another Link</Card.Link> */}
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem' }} className='col-md-6'>
                        <Card.Img variant="top" src={about1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            {/* <Card.Link href="#">Card Link</Card.Link> */}
                            {/* <Card.Link href="#">Another Link</Card.Link> */}
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </div>
    </div>
  );
}

export default Team;
