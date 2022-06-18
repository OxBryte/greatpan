import '../App.css';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/banner.css'
import Head from '../images/HEAD.png'


function Banner() {
  return (
    <div className="banner">
        <div className='container'>
            <div className='row '>
                <img className='logo' src={Head} alt='' style={{ width: "200px" }} />
            </div>
            <div className='row banner5 col-12'>
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
