import React from 'react'
import SideBar from '../component/SideBar'
import { ethers } from 'ethers'
import contractABI from '../ipfsabi.json'
import { upload } from '@testing-library/user-event/dist/upload';



// const provider = new ethers.providers.Web3Provider(window.provider);
const provider = new ethers.BrowserProvider(window.ethereum);
const contractAddress = '0x323D7b368896003996BAF7Db30684E6c23CdD352'

const contract = new ethers.Contract(contractAddress,contractABI, provider)

const uploadvid = async (video) =>{
    try{
        const signer = provider.getSigner();
        const transaction = await contract.updateData(video);
        await signer.sendTransaction(transaction);
        
        await transaction.wait;
    }
    catch(error){
      console.error(error);
    }
}


export default function UploadPage() {
  return (
    <>
     <div className="WrapComp">
        <SideBar/>
        <div className="UploadPage">
            <h1>VIDEO UPLOAD PLATFORM</h1>
            <button onClick={uploadvid}>UPLOAD</button>
        </div>
    </div>
    </>
  )
}
