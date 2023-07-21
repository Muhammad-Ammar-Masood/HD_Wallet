import { useState} from "react";
import "./Master_Wallet.css";
import Child from './Child_Wallet';
import {ethers, HDNodeWallet} from 'ethers';


const Master = ({hdNodeWallet, mnemonic, privateKey, publicKey, address}) => {

    const [childNode, setChildNode] = useState("");
    const [index, setIndex] = useState(0);
    const [toggleChild, setToggleChild] = useState(false);
    const [childs, setChilds] = useState([]);
    
    const generateCN = () => {
        const newChildNode = hdNodeWallet.deriveChild(index);
        const newIndex = index + 1;
        setChildNode(newChildNode);
        setIndex(newIndex);
        setChilds([...childs, newChildNode]);
    }
    

    return (
        <>
           <div id="masterContainer" className="position-absolute top-50 start-50 translate-middle p-4">
    
                <h2>Master Parent Node:</h2>
                <hr/>
                    <p><b>Seed Phrase:</b> "{ mnemonic.phrase}"</p>
                    <p><b>Private Key:</b> "{ privateKey}"</p>
                    <p><b>Public Key:</b> "{ publicKey}"</p>
                    <p><b>Address:</b> "{ address}"</p>
                <hr/>
           </div>
           <button id="childbtn" type="button" className="btn btn-outline-warning position-absolute bottom-50 start-50" onClick={() => {generateCN(); setToggleChild(true); 
}}>Generate Child Node</button>

<div className="container">
    <div className="row ">
{childs.map((item, _index) => {
    return <div key={_index} className="col-md-6">

    <Child privateKeyC={item.privateKey} publicKeyC={item.publicKey} addressC={item.address} _index={_index} />
    </div>

})}
</div>
</div>
    
        </> 
    );
}

export default Master;