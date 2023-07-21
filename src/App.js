import {useState} from 'react';
import {ethers, HDNodeWallet} from 'ethers';
import "./App.css";
import Master from './Components/Master_Wallet';
 


function App() {
  
  const [hdNodeWallet, setHdNodeWallet] = useState("");
  const [password, setPassword] = useState("");
  const [toggleDisplay, setToggleDisplay] = useState(true);
  const [toggleMaster, setToggleMaster] = useState(false);


  const generatePW = () => {
    setHdNodeWallet(HDNodeWallet.createRandom(password));         // creates HD NODE Wallet with password 
  }

  const { mnemonic, privateKey, publicKey, address } = hdNodeWallet;

    
  return (
    <>
      <div className="mt-5">
        <h1 id='h1app' className="text-center fs-bold">HD-Wallet</h1>
    </div>

    <div className="position-absolute top-50 start-50 translate-middle"> 
        <button type="button" id="gbtn1" className="btn btn-outline-warning btn-lg p-3" onClick={() => setToggleDisplay(false)} style={{display: toggleDisplay? "block": "none"}}>Generate Master Wallet</button>
        <div style={{display: toggleDisplay || toggleMaster ? "none" : "block" }}>
            <label for="formGroupExampleInput" className="form-label" style={{color: "white", fontSize: "1.5rem"}}>Enter Password</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="password" style={{fontSize: "1.4rem"}} value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="button" className="btn btn-warning mt-3" style={{marginLeft: "12rem"}} onClick={() => {generatePW(); setToggleMaster(true); 
}}>Generate</button>
        </div>
    </div>

    {toggleMaster && (
      <>
    <Master hdNodeWallet={hdNodeWallet} mnemonic={mnemonic} privateKey={privateKey} publicKey={publicKey} address={address}/>
    </>
    )}
    </>
  ); 
}

export default App;
