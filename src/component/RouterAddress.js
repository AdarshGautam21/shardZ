//0x1d179FB1E7594BcC53dF21a35B538AA3A06a74D3
import React, { useState, useEffect } from 'react';
import { ethers } from "ethers";
import contractABI from "../routerabi.json";

const RouterAddress = () => {
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const provider = new ethers.BrowserProvider(window.ethereum);
  const contractAddress = "0x1d179FB1E7594BcC53dF21a35B538AA3A06a74D3";
  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, contractABI, provider);

}