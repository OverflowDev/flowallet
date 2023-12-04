import { MoveLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { Textarea, Button, Text } from '@chakra-ui/react'
import { useState } from 'react';

import { ethers } from "ethers";


function ImportPrivatekey({setWallet, setSeedPhrase}) {

    const navigate = useNavigate();

    const [pkey, setPkey] = useState('')

    const [isNotValid, setIsNotValid] = useState(false)


    const handleOnchange = (e) => {
      setPkey(e.target.value)
    }

    // Recover Wallet with privatekey
    const recoverWallet = () => {
      let recoveredWallet

      try {
          recoveredWallet = new ethers.Wallet(pkey)
      } catch (error) {
          setIsNotValid(true)
          return
      }
      
      setWallet(recoveredWallet.address)
      // setSeedPhrase(phrase)
      navigate('/wallet')
      return
    }
    
  return (
    <div>

      {/* Back */}
      <div 
        onClick={()=>navigate("/importwallet")}
        className='flex items-start ustify-start px-3 py-1 w-10 bg-white rounded-lg'
      >
        <MoveLeft />
      </div>

      <div className='text-center'>
        <h1 className='text-lg font-bold tracking-wider'>Import PrivateKey</h1>
        <p className='text-sm'>Never show the private key. Anyone with privatekey can access your wallet</p>
      </div>
      
      <div className='flex items-center justify-center mt-12'>
        <Textarea
          value={pkey}
          onChange={handleOnchange}
          placeholder='Enter your Private key'
          size='sm'
        />
      </div>

      {/* Import wallet button  */}
      <div className='mt-12'>
        <Button
            // isDisabled = {
            //     phrase.split(" ").length !== 12 || phrase.slice(-1) === " "
            // }
            onClick={recoverWallet}
            colorScheme='blue' 
            className='gap-3 w-full'
        >
            Import Wallet
        </Button>

        {isNotValid && <Text className='text-red-500'>Invalid Privatekey</Text>}
            
      </div>

    </div>
  )
}

export default ImportPrivatekey