import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/footer.css'
import { Discord, Twitter } from 'react-bootstrap-icons';


function Footer() {
  return (
    <div className="footer">
        <div className='container'>
            <div className='row'>
                <div className=''>
                    <i className='icon'><Discord color="#ffffff" size={40} /></i>
                    <i className='icon'><Twitter color="#ffffff" size={40} /></i>
                    {/* <i className='col-4'><Discord color="#ffffff" size={40} /></i> */}
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
