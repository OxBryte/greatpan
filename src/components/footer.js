import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/footer.css'
import { Discord, Twitter } from 'react-bootstrap-icons';


function Footer() {
  return (
    <div className="footer">
        <div className='container'>
          <div className='row'>
            <span>copyright 2022</span>
            <div className='icon'>
                <a href=''><Discord color="#ffffff" size={40} /></a>
                <a href=''><Twitter color="#ffffff" size={40} /></a>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Footer;
