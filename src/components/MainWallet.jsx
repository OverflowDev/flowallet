import { useNavigate } from 'react-router-dom'
import { useState } from "react"

import { Select, Tooltip, Text, Button, useToast } from '@chakra-ui/react'

import { ethers } from "ethers";


import { 
    LogOut,
    Wallet, 
    Copy, 
    CreditCard, 
    Send,
    HelpCircle,
    AlertTriangle,
} from 'lucide-react';


function MainWallet({
    wallet,
    setWallet,
    seedPhrase,
    setSeedPhrase,
  }) {

  const navigate = useNavigate();

  const toast = useToast()

  const [selectedChain, setSelectedChain] = useState("0x1");
  const [assets, setAssets] = useState(null)

  const chains = [
    {
        label: "Ethereum",
        value: "0x1",
    },
    {
        label: "Mumbai Testnet",
        value: "0x13881",
    },
    {
        label: "Polygon",
        value: "0x89",
    },
    {
        label: "Avalanche",
        value: "0xa86a",
    },
  ]

  const addr = 'wallet_address'

  const logout = () => {
    setSeedPhrase(null);
    setWallet(null);
    setAssets(null)
    localStorage.removeItem(addr)
    navigate("/");
  }

//   console.log(ethers.Wallet.fromPhrase(seedPhrase))
//   console.log(ethers.Wallet.fromPhrase(seedPhrase).privateKey)
//   console.log(ethers.Wallet.createRandom())
  console.log(new ethers.Wallet('0x69348f8d5c397db3319e80bcb65a9e9193cfb81d574f7050b076056eb2126365'))


  return (
    <div>
        <div className="flex items-center justify-between">
            <button
                onClick={logout}
                className='flex items-start justify-start px-3 py-1 w-12 bg-white rounded-lg'
            >
                <LogOut />
            </button>

            {/* network dropdown  */}
            <div>
                <Select 
                    onChange={(e) => setSelectedChain(e.target.value)}
                    value={selectedChain}
                    size='sm'
                    variant='filled'
                >
                    {chains.map(chain => (
                        <option 
                            key={chain.value}
                            value={chain.value}
                        >
                            {chain.label}
                        </option>
                    ))}
                </Select>
            </div>

        </div>
        
        {/* Address  */}
        <div className='flex gap-6 items-center mt-12'>
            <div className='h-16 w-16 rounded-full border flex items-center justify-center'>
                <Wallet size={28} />
            </div>
            <div className='flex items-center rounded-md px-4 bg-white/25 shadow-inner gap-2'>
                <Tooltip label={wallet}>
                    <Text>{wallet.slice(0, 4)}...{wallet.slice(38)}</Text>
                </Tooltip>
                <Button
                    size='xs'
                    variant='ghost'
                    onClick={() => {
                        navigator.clipboard.writeText(wallet)
                        toast({
                            description: "Address copied successfully",
                            status: 'success',
                            duration: 1000,
                            isClosable: true,
                            position: 'top-left',
                        })
                    }}
                >
                    <Copy size={16} />
                </Button>
            </div>
        </div>

        {/* Send and buy  */}
        <div className='flex items-center gap-4 mt-8'>
            <Tooltip label="Coming Soon!!" aria-label='Coming Soon!!'>
                <Button 
                    className='w-6/12 uppercase gap-2'
                    isDisabled
                >
                    <Send />
                    Send
                </Button>
            </Tooltip>
            <Tooltip label="Coming Soon!!" aria-label='Coming Soon!!'>
                <Button 
                    className='w-6/12 uppercase gap-2'
                    isDisabled
                >
                    <CreditCard />
                    Buy
                </Button>
            </Tooltip>
        </div>
        
        {assets ? (
            <div className='mt-8'>
                <div>
                    <h1 className='text-md uppercase font-bold tracking-wider'>Assets</h1>
                    <div className='border-2 p-2 flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            {/* asset Logo and quantity */}
                            <div className='h-10 w-10 border rounded-full flex justify-center items-center'>
                                <HelpCircle />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='text-lg font-semibold tracking-wider'>Ethereum</h1>
                                <h2>1.00 ETH</h2>
                            </div>
                        </div>

                        <div>
                            $ 1,963.98
                        </div>
                    </div>
                </div>
                {/* Other assets  */}
                <div className='mt-4'>
                    <h1 className='text-md uppercase font-bold tracking-wider'>Other Assets</h1>
                    <div className='border-2 p-2 scrollbar-hide max-h-32 overflow-y-auto overflow-hidden hover:overflow-y-scroll transition-all duration-300'>
                        {/* 1  */}
                        <div className='flex items-center justify-between mb-2 border-b-2'>
                            <div className='flex items-center gap-2'>
                                {/* asset Logo and quantity */}
                                <div className='h-10 w-10 border rounded-full flex justify-center items-center'>
                                    <HelpCircle />
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='text-lg font-semibold tracking-wider'>Ethereum</h1>
                                    <h2>1.00 ETH</h2>
                                </div>
                            </div>

                            <div>
                                $ 1,963.98
                            </div>
                        </div>
                        <div className='flex items-center justify-between '>
                            <div className='flex items-center gap-2'>
                                {/* asset Logo and quantity */}
                                <div className='h-10 w-10 border rounded-full flex justify-center items-center'>
                                    <HelpCircle />
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='text-lg font-semibold tracking-wider'>Ethereum</h1>
                                    <h2>1.00 ETH</h2>
                                </div>
                            </div>

                            <div>
                                $ 1,963.98
                            </div>
                        </div>
                        <div className='flex items-center justify-between '>
                            <div className='flex items-center gap-2'>
                                {/* asset Logo and quantity */}
                                <div className='h-10 w-10 border rounded-full flex justify-center items-center'>
                                    <HelpCircle />
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='text-lg font-semibold tracking-wider'>Ethereum</h1>
                                    <h2>1.00 ETH</h2>
                                </div>
                            </div>

                            <div>
                                $ 1,963.98
                            </div>
                        </div>
                        <div className='flex items-center justify-between '>
                            <div className='flex items-center gap-2'>
                                {/* asset Logo and quantity */}
                                <div className='h-10 w-10 border rounded-full flex justify-center items-center'>
                                    <HelpCircle />
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='text-lg font-semibold tracking-wider'>Ethereum</h1>
                                    <h2>1.00 ETH</h2>
                                </div>
                            </div>

                            <div>
                                $ 1,963.98
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className='mt-8'>
                <div className='border-2 h-32 flex flex-col items-center justify-center'>
                    <AlertTriangle />
                    <h1 className='text-md font-semibold uppercase'>No Assets Here</h1>
                </div>
            </div>
        )}

    </div>
  )
}

export default MainWallet