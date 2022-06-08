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
                {/* <div className='line'></div> */}
                <div className='row col-12 roadmap-content'>
                    <div className='roadmap-item col-3'>
                        <h3>Phase 1</h3>
                        <ul>
                            <li>Launching of NFT (GreatPan)</li>
                            <li>GreatPan NFT Collection (2222)</li>
                            <li>Website Launch</li>
                            <li>Mint Great Pan</li>
                        </ul>
                    </div>
                    <div className='roadmap-item col-3'>
                        <h3>Phase 2</h3>
                        <ul>
                            <li>Whitepaper Release</li>
                            <li>Truce Prototype</li>
                            <li>Marketing</li>
                            <li>Team Expansion</li>
                        </ul>
                    </div>
                    <div className='roadmap-item col-3'>
                        <h3>Phase 3</h3>
                        <ul>
                            <li>Truce Landing Page</li>
                            <li>Development of Truce</li>
                            <li>Client Patnership</li>
                            <li>roadmap</li>
                        </ul>
                    </div>
                    <div className='roadmap-item col-3'>
                        <h3>Phase 4</h3>
                        <ul>
                            <li>Truce Fair Launch (testnet)</li>
                            <li>Fixing Bugs (errors)</li>
                            <li>Truce Fair Launch (Beta-testnet)</li>
                            <li>Truce Launch</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
}

export default Roadmap;
