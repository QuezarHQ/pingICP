// import * as React from "react";
// import { render } from "react-dom";
// import "./index.css"
// import { pingICP_backend } from "../../declarations/pingICP_backend";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// const MyHello = () => {
//   const [name, setName] = React.useState('');
//   const [message, setMessage] = React.useState('');

//   async function doGreet() {
//     const greeting = await pingICP_backend.greet(name);
//     setMessage(greeting);
//   }

//   return (
//     <div>
//       <Header /> 
//       <p className="text-3xl bg-primary">Hi, this is the frontend canister</p>
//       <Footer />
//     </div>
//   );
// };

// render(<MyHello />, document.getElementById("app"));



import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { BrowserRouter } from "react-router-dom"

import App from "./App"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("app"),
)
