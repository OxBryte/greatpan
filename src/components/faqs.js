import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/faqs.css'
import Accordion from 'react-bootstrap/Accordion'


function Faqs() {
  return (
    <div className="faqs">
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>Faqs</h1>
                </div>
                <Accordion flush>
                    <Accordion.Item eventKey="0" className='accordian'>
                        <Accordion.Header className='accordian-header'>Why GreatPan NFT?</Accordion.Header>
                        <Accordion.Body>
                        Our aims and concepts are distinct, allowing us to stand out. In various ways, where we deliver and how our platform operates, we are unique in our ambitions and ideas. Our initiative is based on the notion of bringing out the interests and benefits of TRUCE users.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className='accordian'>
                        <Accordion.Header className='accordian-header'>Total Supply?</Accordion.Header>
                        <Accordion.Body>
                        2222 GreatPan collection on the NEAR blockchain.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='accordian'>
                        <Accordion.Header className='accordian-header'>Mint Date and Time?</Accordion.Header>
                        <Accordion.Body>
                        TBA
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className='accordian'>
                        <Accordion.Header className='accordian-header'>Mint Price?</Accordion.Header>
                        <Accordion.Body>
                        8 Near
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </div>
    </div>
  );
}

export default Faqs;
