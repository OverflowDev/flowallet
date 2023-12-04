import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

import Onboarding from './components/Onboarding'
import CreateWallet from "./components/CreateWallet"
import ImportWallet from "./components/ImportWallet"
import MainWallet from "./components/MainWallet"
import ImportPrivatekey from "./components/ImportPrivatekey"
import ImportPhrase from "./components/ImportPhrase"

function App() {

  const addr = 'wallet_address'


  const [wallet, setWallet] = useState(null)
  const [seedPhrase, setSeedPhrase] = useState(null)

  console.log('wallet', wallet)

  useEffect(() => {
    const localStorageAddress = localStorage.getItem(addr)

    if(localStorageAddress) {
      setWallet(localStorageAddress)
    }
  }, [])


  return (
    <div className="h-[600px] w-[350px] bg-blue-200 p-8">
      <Router>
        <Routes>
          <Route index 
            element={
              wallet || seedPhrase ? (
                <MainWallet 
                  wallet={wallet}
                  setWallet={setWallet}
                  seedPhrase={seedPhrase}
                  setSeedPhrase={setSeedPhrase}
                />
                ) : (
                  // <Navigate to='/home' />
                  <Onboarding />
              )
            } 
          />

          {/* Create wallet */}
          <Route 
            path="/wallet" 
            element={
              <CreateWallet 
                setSeedPhrase={setSeedPhrase}
                setWallet={setWallet}
              />
            } 
          />

          {/* Import  */}
          <Route path="/importwallet" element={<ImportWallet />} />
          
          <Route 
            path="/import_key" 
            element={
              <ImportPrivatekey 
                setWallet={setWallet}
                setSeedPhrase={setSeedPhrase}
              />
            } 
          />

          <Route 
            path="/import_phrase" 
            element={
              <ImportPhrase 
                setWallet={setWallet}
                setSeedPhrase={setSeedPhrase}
              />
            } 
          />

        </Routes>
      </Router>
    </div>
  )
}

export default App
