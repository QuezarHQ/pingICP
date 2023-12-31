import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


import { pingICP_backend } from "../../../declarations/pingICP_backend"


const SignUp = ({ principal }) => {

  console.log(principal)

  const navigate = useNavigate();

  const [isPublisher, setIsPublisher] = useState(true)
  const [name, setName] = useState("")
  const [bio, setBio] = useState("")

  const selectToggle = (event) => {
    setIsPublisher(event.target.value === "publisher")
  }

  const nameChange = (event) => {
    setName(event.target.value)
  }

  const bioChange = (event) => {
    setBio(event.target.value)
  }

  const submit = async () => {
    console.log("submitting")
    if (isPublisher) {
      await pingICP_backend.add_publisher(principal, name, bio)
      navigate("/publisher");
    } else {
      await pingICP_backend.add_subscriber(principal, name)
      navigate("/subscriber");
    }
    const publishers = await pingICP_backend.get_publishers()
    console.log(publishers)
    const subscribers = await pingICP_backend.get_subscribers()
    console.log(subscribers)
    
  }

  return (
    <div className="bg-base-100 w-screen flex flex-col items-center p-10">
      <div className="w-1/2">
        <div className="text-center m-10">
          <h1 className="text-3xl font-extrabold">Sign Up</h1>
        </div>
        <div className="flex flex-col justify-center items-center bg-base-100 m-10 p-10">
          <select onChange={selectToggle} className="select select-bordered w-full max-w-xs">
            <option disabled selected>Select profile type</option>
            <option value="publisher">Dapp</option>
            <option value="subscriber">User</option>
          </select>
          <br />
          <input type="text" placeholder={"Enter name"} onChange={nameChange} className="input input-bordered w-full max-w-xs" />
          <br />
          {isPublisher && <input type="text" placeholder={"Enter description"} onChange={bioChange} className="input input-bordered w-full max-w-xs" />}
          {!isPublisher && <input type="text" placeholder={"Enter description"} onChange={bioChange} className="input input-bordered w-full max-w-xs" disabled/>}
          <br />
          <button className="btn" onClick={submit}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp