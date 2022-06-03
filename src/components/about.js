import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/about.css'
import about1 from '../images/58.svg'
import about2 from '../images/82.svg'
import about3 from '../images/160.svg'
import about4 from '../images/25.svg'


function About() {
  return (
    <div className="about">
        <div className='container'>
            <div className='row col-12'>
                <div className='row about-image col-6'>
                    <h1>About</h1>
                    <div className='col'>
                        <img src={about1} alt='' className='col-6' />
                        <img src={about2} alt='' className='col-6' />
                        <img src={about3} alt='' className='col-6' />
                        <img src={about4} alt='' className='col-6' />
                    </div>
                    
                </div>
                <div className='row about-text col-6'>
                    <h1>WHAT MAKES US DIFFERENT</h1>
                    <h2>Our aims and concepts are distinct, allowing us to stand out. In various ways, where we deliver and how our platform operates, we are unique in our ambitions and ideas. Our initiative is based on the notion of bringing out the interests and benefits of TRUCE users.<br/>Event organizers from METAVERSE and IRL may use our platform to build their own events, have total control over their events, and use any NFT collection their choice. At the conclusion of each event you produce, you'll get a royalty as a profit.</h2>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;
