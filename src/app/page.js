'use client'
import { useEffect, useState } from 'react';
import Hello from '../components/Hello'
import {  connectWeb3Metamask } from '@/web3_function'

export default function Home() {

  const [accounts ,setAccounts]=useState(null);
  const [contractInstance,setInstance]=useState(null);

useEffect(()=>{
 async function connect(){
    try{
    //  let {accounts,instance } = await createContractInstance();
    let {account,instance } = await connectWeb3Metamask();

     console.log(account,"account");
     console.log(instance,"instance");

     setAccounts(account);
     setInstance(instance);
      console.log("connection successfull !")
    }

    catch(error){
      alert(
        "failed to load web3 , "
      )
      console.log(error)
    }
  }

connect();

},[])
 
  return (
    
     <div className='w-full justify-center items-center h-screen flex flex-col'>
     {
      (accounts && contractInstance) ? <Hello contractInstance={contractInstance} account={accounts [0]}></Hello> :<div>Please Login with MetaMask wallet To Use Calculator !</div>
     } 
    
     </div>
   
  )
}
