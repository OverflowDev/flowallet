import { MoveLeft, Eraser } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { Input, Textarea, Button, Text } from '@chakra-ui/react'
import { useState } from 'react';

import { ethers } from "ethers";


function ImportPhrase({setWallet, setSeedPhrase}) {

    const navigate = useNavigate();

    const [phrase, setPhrase] = useState('')

    const [wordInputs, setWordInputs] = useState(Array(12).fill(''))

    const [isNotValid, setIsNotValid] = useState(false)

    // input onchange 
    const handleOnchange = (index, value) => {
        setIsNotValid(false)
        // setPhrase(e.target.value)
        setWordInputs((prevInputs) => {
            const newInputs = [...prevInputs]
            newInputs[index] = value
            setPhrase(newInputs.join(' '));
            return newInputs
        })

        // setPhrase(() => {
        //     return newInputs.join(' ');
        // });
    }

    // handle paste funtion 
    const handlePaste = (e) => {
        e.preventDefault()

        // get the pasted data as a plain text
        const pastedText = e.clipboardData.getData('text/plain')
        // setPhrase(pastedText)

        // split the pasted text into array of words
        const words = pastedText.split(/\s+/)

        // update state with the word 
        setWordInputs((prevInputs) => {
            const newInputs = [...prevInputs];
            for (let i = 0; i < Math.min(words.length, 12); i++) {
              newInputs[i] = words[i];
            }
            return newInputs;
        });

        setPhrase(pastedText);
    }

    const handleClear = () => {
        setWordInputs(Array(12).fill(''));
        setPhrase('');
      };

    // Recover Wallet 
    const recoverWallet = () => {
        let recoveredWallet

        try {
            recoveredWallet = ethers.Wallet.fromPhrase(phrase)
        } catch (error) {
            setIsNotValid(true)
            return
        }
        
        setWallet(recoveredWallet.address)
        setSeedPhrase(phrase)
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
        <h1 className='text-lg font-bold tracking-wider'>Import Phrase</h1>
      </div>

      <div className='grid grid-cols-2 gap-3 mt-8' >
            {wordInputs.map((word, index) => (
                <div className='flex items-center ' key={index}>
                    {/* <Text>{index + 1}.</Text> */}
                    <Input 
                        value={word}
                        onChange={(e) => handleOnchange(index, e.target.value)}
                        onPaste={handlePaste}
                        variant='filled'
                        focusBorderColor='gray'
                        width='auto'
                        placeholder={`${index + 1}.`}
                    />
                </div>
            ))}
        </div>
        <div className='mt-2 flex justify-center'>
            <Button
                onClick={handleClear}
            >
                <Eraser />
            </Button>
        </div>
        {/* <Textarea
            value={phrase}
            onChange={handleOnchange}
            placeholder='Enter your phrase'
            size='sm'
      /> */}
    
        {/* Import wallet button  */}
        <div className='mt-12'>
            
            <Button
                isDisabled = {
                    phrase.split(" ").length !== 12 || phrase.slice(-1) === " "
                }
                onClick={recoverWallet}
                colorScheme='blue' 
                className='gap-3 w-full'
            >
                Import Wallet
            </Button>

            {isNotValid && <Text className='text-red-500'>Invalid Seed Phrase</Text>}
            
        </div>

    </div>
  )
}

export default ImportPhrase