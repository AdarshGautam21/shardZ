import React, { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer ';
import { ethers } from "ethers";
import contractABI from "../sellvidabi.json";


const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const provider = new ethers.BrowserProvider(window.ethereum);
  const contractAddress = "0x945f6b7E2126b128cf6633F80417Da446679955C";
  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, contractABI, provider);

  const buy = async () =>{
    try{
        const transaction = await contract.uploadVideo(1);
      // await signer.sendTransaction(transaction);

      await transaction.wait;
    }
    catch(error){
        console.error(error);
    }

  }