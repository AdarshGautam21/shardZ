import React, { useState } from "react";
import SideBar from "../component/SideBar";
import { ethers } from "ethers";
import contractABI from "../ipfsabi.json";
import { upload } from "@testing-library/user-event/dist/upload";
import { useStorageUpload } from '@thirdweb-dev/react';

export default function UploadPage() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const provider = new ethers.BrowserProvider(window.ethereum);
  const contractAddress = "0x323D7b368896003996BAF7Db30684E6c23CdD352";
  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  const [file, setFile] = useState();
  const [title, setTitle] = useState();
  function getFile(e) {
    setFile(e.target.files[0]);
    setTitle(e.target.files[0].name)
    console.log(e.target.files);
  }

  const  upload= useStorageUpload();



  const uploadvid = async () => {

    try {
      const uploadUrl = await upload.mutateAsync({
        data : [file],
        options: {
          uploadWithGatewayUrl : true,
          uploadWithoutDirectory: true
        }
    })
    console.log('Upload URL: ', uploadUrl[0]);
      const transaction = await contract.uploadVideo(2, title, uploadUrl[0]);
      // await signer.sendTransaction(transaction);

      await transaction.wait;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="WrapComp">
        <SideBar />
        <div className="UploadPage">
          <h1>VIDEO UPLOAD PLATFORM</h1>
          <input type="file" onChange={getFile} />
            
          <button onClick={uploadvid}>UPLOAD</button>
        </div>
      </div>
    </>
  );
}
