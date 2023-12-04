import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Onboarding from './components/Onboarding'
import CreateWallet from "./components/CreateWallet"
import ImportWallet from "./components/ImportWallet"
import { useState } from "react"
import MainWallet from "./components/MainWallet"
import ImportPrivatekey from "./components/ImportPrivatekey"
import ImportPhrase from "./components/ImportPhrase"

function App() {

  const [wallet, setWallet] = useState(null)
  const [seedPhrase, setSeedPhrase] = useState(null)

  

  return (
    <div className="h-[600px] w-[350px] bg-blue-200 p-8">
      <Router>
        {/* {wallet && seedPhrase ? ( */}
        {wallet || seedPhrase ? (
        <Routes>
          <Route 
            path="/wallet" 
            element={
              <MainWallet 
                wallet={wallet}
                setWallet={setWallet}
                seedPhrase={seedPhrase}
                setSeedPhrase={setSeedPhrase}
              />
            } 
          />
        </Routes>
        ) : (
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/onboarding" replace />}
          />
          <Route
            path="/onboarding"
            element={<Onboarding />}
          >
          </Route>
          <Route 
            path="/wallet" 
            element={
              <CreateWallet 
                setSeedPhrase={setSeedPhrase}
                setWallet={setWallet}
              />
            } 
          />
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
        )}
      </Router>
    </div>
  )
}

export default App
