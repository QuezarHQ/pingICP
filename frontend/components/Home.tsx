import React from 'react'
import { useConnect } from '@connect2ic/react'

const Home = ({principal}) => {

  console.log(principal)

  return (
    <div className="bg-base-100 w-screen flex flex-col items-center p-10">
        <div className="w-3/4">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold m-10">Welcome to PING: Your Gateway to Enhanced Dapp Engagement</h1>
            <h3 className="text-xl font-medium m-10">Connect. Engage. Grow.</h3>
          </div>
          <hr />
          <div className="p-10">
            <h4 className="font-bold">For Dapp Developers:</h4>
            <ul className="p-5">
              <li className="p-2">
                <p><span className="font-bold">Register Your Dapp: </span> Become part of a vibrant ecosystem where your updates reach the right audience instantly.</p>
              </li>
              <li className="p-2">
                <p><span className="font-bold">Direct Communication:</span> Post updates and engage directly with your user base, fostering a stronger community around your dapp.</p>
              </li>
            </ul>
            <br />
            <h4 className="font-bold">For Dapp Users:</h4>
            <ul className="p-5">
              <li className="p-2">
                <p><span className="font-bold">Stay Informed:</span> Subscribe to your favorite dapps and never miss an update.</p>
              </li>
              <li className="p-2">
                <p><span className="font-bold">Tailored Notifications:</span> Receive relevant and timely notifications directly on your profile, ensuring you're always in the loop.</p>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Home