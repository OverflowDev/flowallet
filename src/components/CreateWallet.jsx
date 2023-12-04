import { Text, Card, CardBody, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { MoveLeft, FilePlus } from 'lucide-react';
import { useState } from 'react';

import { ethers } from "ethers";


function CreateWallet({setWallet, setSeedPhrase}) {

  const addr = 'wallet_address'

  
  const [phrase, setPhrase] = useState(null)
  const [loading, setLoading] = useState(false)

  // const addrFromPhrase = ethers.Wallet.fromPhrase(phrase).address

  const navigate = useNavigate();

  const generateWallet = () => {
    setLoading(true)
    const mnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
    setPhrase(mnemonic)
    setLoading(false)
  }


  const setWalletAndMnemonic = () => {
    setSeedPhrase(phrase);

    if(localStorage.getItem(addr) !== ethers.Wallet.fromPhrase(phrase).address) {
      localStorage.setItem(addr, ethers.Wallet.fromPhrase(phrase).address)
    }

    setWallet(ethers.Wallet.fromPhrase(phrase).address)

    navigate('/')

  }


  return (
    
    <div className='flex flex-col items-center justify-center'>

      {/* Back */}
      <div 
        onClick={()=>navigate("/")}
        className='flex items-start ustify-start px-3 py-1 bg-white rounded-lg'
      >
        <MoveLeft />
      </div>
      
      <h1 className="text-2xl mt-12">Secret Recovery Phrase</h1>
      <p className='text-sm text-center mt-2'>Write down this 12-Word Secret Phrase and save it in a place that you trust and only have access to.</p>

      <div className='mt-8'>
        {!phrase ? (
          <Card className=''>
            <CardBody className='w-72'>
              <Text>
                <Button 
                  isLoading={loading}
                  onClick={generateWallet}
                  leftIcon={<FilePlus />}
                  colorScheme='blue' 
                  className='gap-3 w-full'
                >
                    Generate Wallet
                </Button>
                {/* {newSeedPhrase && <pre style={{whiteSpace: "pre-wrap"}}>{newSeedPhrase}</pre>} */}
              </Text>
            </CardBody>
          </Card>
        ) : (
          <Card className=''>
            <CardBody className='w-72'>
              <Text>
                {phrase && <pre style={{whiteSpace: "pre-wrap"}}>{phrase}</pre>}
              </Text>
            </CardBody>
          </Card>
        )}
      </div>

      {/* <div className='mt-12'>
        <Button 
            onClick={() => navigate('/importwallet')}
            colorScheme='blue' 
            className='gap-3 w-full'
        >
          Continue
        </Button>
      </div> */} 
      {phrase ? (
        <div className='mt-12'>
          <Button 
              onClick={setWalletAndMnemonic}
              colorScheme='blue' 
              className='gap-3 w-full'
          >
            Open Wallet
          </Button>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default CreateWallet