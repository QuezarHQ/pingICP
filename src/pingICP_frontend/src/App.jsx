import React from "react"
import { Route, Routes, useNavigate } from "react-router-dom"

import { createClient } from "@connect2ic/core"
import { defaultProviders } from "@connect2ic/core/providers"
import { Connect2ICProvider } from "@connect2ic/react"
import { useConnect } from '@connect2ic/react'
import "./connect2ic.css"

// import * as pingICP_backend from "../.dfx/local/canisters/pingICP_backend"
// import * as pingICP_backend from "../../../.dfx/local/canisters/pingICP_backend"
import * as pingICP_backend from "../../declarations/pingICP_backend"


import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import SignUp from "./components/SignUp"
import Publisher from "./components/Publisher"
import Subscriber from "./components/Subscriber"

function App() {

  const navigate = useNavigate();

  const {
    principal,
    connect,
    disconnect,
    status,
    isInitializing,
    isIdle,
    isConnecting,
    isConnected,
    isDisconnecting,
    activeProvider,
  } = useConnect({
    onConnect: () => {
      console.log("signed in")
    },
    onDisconnect: () => {
      console.log("signed out")
      navigate("/")
    }
  })

  console.log(principal)

  return (
    <div className="App">
      
      <Header principal={principal} />
      
      <Routes>
        <Route path="/" element={<Home principal={principal}/>} />
        <Route path="/signup" element={<SignUp principal={principal}/>} />
        <Route path="/subscriber" element={<Subscriber principal={principal} />} />
        <Route path="/publisher" element={<Publisher principal={principal} />} />
      </Routes>
      
      <Footer />

    </div>
  )
}

const client = createClient({
  canisters: {
    pingICP_backend,
  },
  providers: defaultProviders
})

export default () => (
  <Connect2ICProvider client={client}>
      <App />
  </Connect2ICProvider>
)
