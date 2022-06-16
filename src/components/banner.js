import '../App.css';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/banner.css'


function Banner() {
  return (
    <div className="banner">
        <div className='container'>
            <div className='row navbar'>
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="">Roadmap</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="">Team</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div className='row col-12'>
                <div className='row banner-text col-12'>
                    <h1>GreatPan</h1>
                    <h2>We're building a blockchain-based ticketing platform to make real-world and metaverse events more accessible to those with NFT holdings, which will be available on the NEAR blockchain.</h2>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Banner;
