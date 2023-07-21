import "./Child_Wallet.css" ;

 const Child = ({privateKeyC, publicKeyC, addressC, _index}) => {
    return (
        <>
            <div id="childContainer" className="p-4 mt-5">
            <h2>Child Node {++_index}:</h2>
                <hr/>
                    <p><b>Private Key:</b> "{ privateKeyC}"</p>
                    <p><b>Public Key:</b> "{ publicKeyC}"</p>
                    <p><b>Address:</b> "{ addressC}"</p>
                <hr/>
        </div>
        </>
    );
 }

 export default Child;