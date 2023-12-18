import { ConnectButton, ConnectDialog } from '@connect2ic/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";

import { pingICP_backend } from "../../../declarations/pingICP_backend";

const Header = ({principal}) => {

  const [isPublisher, setIsPublisher] = useState(false);
  const [isSubscriber, setIsSubscriber] = useState(false);
  let flag = true;

  const updateDetails = async () => {
    console.log("updating details...", principal)
    const resultpub = await pingICP_backend.is_publisher(principal);
    console.log(resultpub);
    setIsPublisher(resultpub);
    const resultsub = await pingICP_backend.is_subscriber(principal);
    setIsSubscriber(resultsub);
    console.log(resultsub);
  };

  if (flag == true && principal != undefined) {
    updateDetails();
    flag = false;
  }

  return (
    <div className="navbar bg-primary p-5">
      <div className="flex-1">
        <a className="btn btn-ghost text-3xl font-bold">
          <Link to="/">Ping</Link>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-xl font-bold">
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          { isSubscriber && <li>
            <Link to="/subscriber">User</Link>
          </li>}
          { isPublisher && <li>
            <Link to="/publisher">Dapp</Link>
          </li>}
          <li>
            <ConnectButton />
            <ConnectDialog />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header