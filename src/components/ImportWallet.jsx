import { Button } from '@chakra-ui/react'

import { Key, WrapText, MoveLeft } from 'lucide-react'

import { useNavigate } from 'react-router-dom'

function ImportWallet() {

  const navigate = useNavigate();


  return (
    <div>
      {/* Back */}
      <div 
        onClick={()=>navigate("/")}
        className='flex items-start ustify-start px-3 py-1 w-10 bg-white rounded-lg'
      >
        <MoveLeft />
      </div>

      <div className='mt-12'>
        <h1 className='text-center font-bold text-2xl tracking-wider'>Import Wallet</h1>
        <p className='text-center text-sm'>
          Select a method to import your wallet
        </p>
      </div>

      {/* Buttons  */}
      <div className="mt-48 space-y-8">
            <Button
                onClick={() => {
                    console.log('Button clicked');
                    navigate('/import_key');
                 }}
                leftIcon={<Key />}
                colorScheme='blue' 
                className='gap-3 w-full'
            >
                
              Import Privatekey
            </Button>
            <Button 
                onClick={() => navigate('/import_phrase')}
                leftIcon={<WrapText />}
                colorScheme='blue' 
                className='gap-3 w-full'
            >
                Import Mnemonic phrase
            </Button>
        </div>
    </div>
  )
}

export default ImportWallet