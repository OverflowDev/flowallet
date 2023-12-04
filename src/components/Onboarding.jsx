import { Outlet } from 'react-router-dom'

import { Button, ButtonGroup } from '@chakra-ui/react'

import { Wallet2, Import } from 'lucide-react'

import { useNavigate } from 'react-router-dom'

function Onboarding() {

  const navigate = useNavigate();


  return (
    <div className="flex flex-col items-center justify-center">
        

        {/* Logo  */}
        <div className="h-16 w-16 rounded-full border flex items-center justify-center">
            Logo
        </div>

        {/* Welcome Message  */}
        <div className="mt-8">
            <h1 className="text-center text-2xl">Welcome to FloWallet</h1>
            <p className="text-xs text-center italic">Making web3 journey accessible</p>
        </div>

        {/* Create and Import wallet  */}
        <div className="mt-16 space-y-8">
            <Button
                // onClick={() => navigate('/onboarding/createwallet')}
                onClick={() => {
                    navigate('/wallet');
                 }}
                leftIcon={<Wallet2 />}
                colorScheme='blue' 
                className='gap-3 w-full'
            >
                
                Create a New Wallet
            </Button>
            <Button 
                onClick={() => navigate('/importwallet')}
                leftIcon={<Import />}
                colorScheme='blue' 
                className='gap-3 w-full'
            >
                Import Wallet
            </Button>
        </div>
        <Outlet />
    </div>
  )
}

export default Onboarding