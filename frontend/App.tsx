import React from "react"
import { Route, Routes } from "react-router-dom"
import logo from "./assets/dfinity.svg"
/*
 * Connect2ic provides essential utilities for IC app development
 */
import { createClient } from "@connect2ic/core"
import { defaultProviders } from "@connect2ic/core/providers"
import { Connect2ICProvider } from "@connect2ic/react"
import { useConnect } from '@connect2ic/react'
import "@connect2ic/core/style.css"
/*
 * Import canister definitions like this:
 */
// import * as pingICP_backend from "../.dfx/local/canisters/pingICP_backend"
import * as pingICP_backend from "../.dfx/local/canisters/pingICP_backend"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import SignUp from "./components/SignUp"
import Publisher from "./components/Publisher"
import Subscriber from "./components/Subscriber"
/*
 * Some examples to get you started
 */

function App() {

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
    }
  })

  // console.log(principal)

  return (
    <div className="App">
      
      <Header />
      
      <Routes>
        <Route path="/" element={<Home principal={principal}/>} />
        <Route path="/signup" element={<SignUp principal={principal} />} />
        <Route path="/subscriber" element={<Subscriber principal={principal}/>} />
        <Route path="/publisher" element={<Publisher principal={principal}/>} />
      </Routes>
      
      <Footer />

    </div>
  )
}

const client = createClient({
  canisters: {
    pingICP_backend,
  },
  providers: defaultProviders,
  globalProviderConfig: {
    dev: import.meta.env.DEV,
  },
})

export default () => (
  <Connect2ICProvider client={client}>
      <App />
  </Connect2ICProvider>
)
