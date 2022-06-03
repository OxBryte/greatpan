import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/roadmap.css'


function Roadmap() {
  return (
    <div className="roadmap">
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>Roadmap</h1>
                </div>
                <div className='row col-12 roadmap-content'>
                    <div className='roadmap-item col-3'>
                        <h3>Phase 1</h3>
                        <ul>
                            <li>roadmap</li>
                            <li>roadmap</li>
                            <li>roadmap</li>
                            <li>roadmap</li>
                        </ul>
                    </div>
                    <div className='roadmap-item col-3'>
                        <h3>Phase 2</h3>
                        <ul>
                            <li>roadmap</li>
                            <li>roadmap</li>
                            <li>roadmap</li>
                            <li>roadmap</li>
                        </ul>
                    </div>
                    <div className='roadmap-item col-3'>
                        <h3>Phase 3</h3>
                        <ul>
                            <li>roadmap</li>
                            <li>roadmap</li>
                            <li>roadmap</li>
                            <li>roadmap</li>
                        </ul>
                    </div>
                    <div className='roadmap-item col-3'>
                        <h3>Phase 4</h3>
                        <ul>
                            <li>roadmap</li>
                            <li>roadmap</li>
                            <li>roadmap</li>
                            <li>roadmap</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
}

export default Roadmap;
