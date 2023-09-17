import React from "react";
import SideBar from "../component/SideBar";
import { ethers } from "ethers";
import contractABI from "../sellvidabi.json";

export default function Dashboard() {

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const provider = new ethers.BrowserProvider(window.ethereum);
  const contractAddress = "0x945f6b7E2126b128cf6633F80417Da446679955C";
  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  const buy = async () =>{
    try{
        // const transaction = await contract.buyVideoOwnership(2);
      // await signer.sendTransaction(transaction);
      const gasLimit = 200000; // Set an appropriate gas limit here

        const transaction = await contract.buyVideoOwnership(2, {
            gasLimit, // Manually set the gas limit
        });

      await transaction.wait;
    }
    catch(error){
        console.error(error);
    }

  }







  return (
    <div className="WrapComp">
      <SideBar />
      <div className="dash">
        <div className="dash-connect">
          <button className="dash-btn">Connect Wallet/Connected</button>
        </div>

        <div className="dash-thumb">
          <button className="dash-thumbbtn">Video Thumbnail</button>
          <p className="dash-p">Video Title</p>
        </div>

        <div className="dash-buy">
          <button className="dash-btn" onClick={buy}>Buy Your Shardzz</button>
          <div className="dash-blank"></div>
        </div>
      </div>
    </div>
  );
}