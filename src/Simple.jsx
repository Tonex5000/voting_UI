import React, {useState, useEffect} from "react";
import contractABI from "./contractABI";
import {ethers, BrowserProvider} from "ethers"

const Simple = () => {
  const [account, setAccount] = useState('')
  const [text, setText] = useState('')
  const [name, setName] = useState('World')
  const [contract, setContract] = useState('')
  const [number, setNumber] = useState(0)


  const contractabi = contractABI;
  const contractAddress = "0x38789555cB2EB4c3504c122eec40a1Ee87d2cb2f";

  const switchNetwork = async () => {
    setText("Welcome to Web3 ")

    if(window.ethereum){
      try{
        const chainId = await window.ethereum.request({method: 'eth_chainId'})
        console.log(chainId)

        if(chainId !== '0x61'){
          try{
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{chainId: '0x61'}]
            })
            
          }catch(switchError){
            if(switchError.code === 4902){
              try{
                await window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [
                    {
                      chainId: '0x61', // Chain ID in hex (decimal: 97)
                      chainName: 'BNB Smart Chain Testnet',
                      nativeCurrency: {
                          name: 'tBNB',
                          symbol: 'tBNB',
                          decimals: 18,
                      },
                      rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
                      blockExplorerUrls: ['https://testnet.bscscan.com']
                  }
                  ],
                });
              }catch(error){
                console.error("Failed to add Network:", error)
              }
            }else{
              console.error("Failed to switch Network:", error)
            }
          }

        }
        return true
      }catch(error){
        console.error("Error Message:", error)
      }
    }

    
  }

  const connectWallet = async () => {
    //await switchNetwork()
    if(window.ethereum === "undefined"){
      alert('Please install metamask!')
      return
    }else{
      try{
        console.log("Hello world")
        const address = await window.ethereum.request({method: 'eth_accounts'})
        console.log("Hi")
        setAccount(address[0])
        setName("Anthony")
        
        //creating ether instance
        const provider = new BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        const contractInstance = new ethers.Contract(contractAddress, contractabi, signer)
        setContract(contractInstance)
        await currentValue(contractInstance) 
        console.log(address[0])
      }catch(error){
        console.error("Error", error)
      }
    }
  }


  const disconnectWallet = () => {
    setAccount('')
    console.log("Account Disconnected")
  }


  const currentValue = async (newContract) => {
    try{
      if(!newContract) return;
      const result = await newContract.getValue()
      setNumber(result.toString())
      console.log(result.toString())
    }catch(error){
      console.error(error)
    }
  }

  const addValue = async() => {
    try{
      if(!contract) return;
      const value = ethers.parseUnits(number.toString(), 18)
      const tx = await contract.addValue(value)
      await tx.wait()
      await currentValue(contract)
    }catch(error){
      console.error(error)
    }
  }

  const increaseValue = async () => {
    try{
      if(!contract) return;
      const tx = await contract.increment()
      await tx.wait()
      await currentValue(contract)
    }catch (error) {
      console.error(error)
    }
  }

  const decreaseValue = async () => {
    try{
      if(!contract) return;
      const tx = await contract.decrement()
      await tx.wait()
      await currentValue(contract)
    }catch (error) {
      console.error(error)
    }
  }

  const resetValue = async () => {
    try{
      if(!contract) return;
      const tx = await contract.reset()
      await tx.wait()
      await currentValue(contract)
    }catch(error){
      console.error(error)
    }
  }

  useEffect(() => {
    if(window.ethereum){
      window.ethereum.on('accountsChanged', (accounts) => {
        if(accounts.length === 0){
          setAccount('')
        }else{
          setAccount(accounts[0])
        }
      })
    }

    return() => {
      if(window.ethereum){
        window.ethereum.removeListener('accountsChanged', () => {})
      }
    }
  }, [])


  useEffect(() => {
    if(window.ethereum){
      window.ethereum.on('chainChanged', async (chainId) => {
        if(chainId !== '0x61'){
          await switchNetwork()
        }
      })
    }

    return() => {
      if(window.ethereum){
        window.ethereum.removeListener('chainChanged', () => {})
      }
    }
  },[])
  


  return(
    <>
     {!account ?
     <div>
        <h1>Hello {name}!</h1>
        <button onClick={connectWallet}>Connect Wallet</button>
     </div>
 :
     <div>
       <h1>Hello {name}</h1>
       <p>Connected: {account}</p> 
       <button onClick={disconnectWallet}>Disconnect</button>
       <h3>{text}</h3>
       <button onClick={increaseValue}>+1</button>
       <h3>Value: {number}</h3>
       <button onClick={decreaseValue}>-1</button><br/>
       <input type= "number"/>
       <button onClick={addValue}>add</button>
       <br/>
       <button onClick={resetValue}>Reset</button>
     </div>
     }
     
    </>
  )
}

export default Simple;