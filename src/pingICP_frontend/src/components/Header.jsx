import { ConnectButton, ConnectDialog } from '@connect2ic/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
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
          <li>
            <Link to="/subscriber">User</Link>
          </li>
          <li>
            <Link to="/publisher">Dapp</Link>
          </li>
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