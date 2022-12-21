import '../App.css';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/banner.css'
import Head from '../images/HEAD.png'
import { useState } from 'react';


function Banner() {

    const [walletConnected, setWalletConnected ] = useState('')

    const isMartianWalletInstalled = window.martian

    const getProvider = () => {
    if ("martian" in window) {
        return(window.martian);
    }
    window.open("https://www.martianwallet.xyz/", "_blank");
    // console.log(getProvider)
    };

    const login = async() => {
        if (typeof window != 'undefined' && typeof window.martian !='undefined'){

            try {
                const auth = await window.martian.connect();
                const account = await window.martian.account();
                const isConnected = await window.martian.isConnected()
                const walletAddress = auth.address;
                setWalletConnected(walletAddress);
                 console.log('Wallet Connected')
             //    console.log(auth)
                console.log(walletAddress)
             //    console.log(isConnected, 'Wallet connected')
            } catch (error) {
                console.error(error)
            }
        } else {
            window.open("https://chrome.google.com/webstore/detail/martian-wallet-aptos-sui/efbglgofoippbgcjepnhiblaibcnclgk", "_blank");
        }
    }

    const logout = async () => {
        await window.martian.disconnect();

        setWalletConnected('')

        console.log('logged out')
    }



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
                    <button onClick={login}>{walletConnected ? (
                        <div onClick={logout}>{walletConnected.length > 0 && `${walletConnected.substring(0, 5)}...${walletConnected.substring(60)}`}</div> 
                    ) : (<div>Connect</div>)}</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Banner;
