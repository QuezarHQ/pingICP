import React from 'react'
import { useState } from 'react'
import { useCanister } from "@connect2ic/react"

const Publisher = ({principal}) => {

  console.log(principal, typeof(principal))

  const [ping] = useCanister("pingICP_backend")
  const [publisher, setPublisher] = useState({
    id: null,
    name: null,
    description: null,
    messages: null,
    subscribers: null
  })
  const [message, setMessage] = useState("")

  const updateDetails = async () => {
    const details = await ping.get_publisher(principal)
    console.log('fetched details', details)
    setPublisher(JSON.parse(details.toString()))
  }

  const updateMessage = (event) => {
    setMessage(event.target.value)
  }

  const sendMessage = async () => {
    console.log('sending message')
    const result = await ping.publish(publisher?.id, message)
    console.log('publish message', result)
    await updateDetails()
  }

  return (
    <div className=" flex flex-col items-center p-10">
      <div className="card w-full bg-neutral text-neutral-content">
        <div className="card-body">
          <h2 className="card-title">Dapp details</h2>
          <br />
          <p>Address: Something somthing</p>
          <p>ID: Something Somthing</p>
          <p>Name: Somthing</p>
          <p>Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum earum error ipsam aperiam sequi sapiente accusantium, doloribus molestias voluptatem sint dignissimos, fuga deleniti pariatur voluptates ut obcaecati? Similique, non unde?</p>
        </div>
      </div>
      <div className="w-full flex flex-row">
        <div className="w-1/4 border rounded-md m-5 p-10 h-screen overflow-scroll">
          <div>
            <p className="font-bold">Post an update:</p>
            <br />
            <ul>
              {/* {publishers.length > 0 && publishers.map((publisher) => {
                console.log(publisher)
                return (
                  <li>
                    <div className="border p-2">
                      <p>Name: {publisher.name}</p>
                      <p>Description: {publisher.description}</p>
                      <button value={publisher.id} onClick={subscribe}>Subscribe</button>
                    </div>
                  </li>
                )
              })} */}
              <div className="card w-full bg-neutral text-neutral-content">
                <div className="card-body">
                  <textarea placeholder="type your message here..." className="textarea textarea-primary text-primary-content textarea-md"/>
                  <br />
                  <button className="btn btn-primary">Subscribe</button>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className="w-3/4 border rounded-md m-5 p-10 h-screen overflow-scroll">
          <div>
            <p className="font-bold">Previous posts: </p>
            <br />
            {/* {subscriber.messages && subscriber?.messages.map((message) => {
              { console.log(message) }
              return (
                <div className="border p-2">
                  <p>{message.content}</p>
                </div>
              )
            })} */}
            <ul>
              <div className="card w-full bg-neutral text-neutral-content">
                <div className="card-body">
                  <p className="text-lg font-bold text-primary">From Publisher name</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis sit id fuga. Blanditiis ad voluptas fuga amet alias reprehenderit ex sint dignissimos totam. Consequuntur debitis nihil dolores beatae quasi possimus!</p>
                </div>
              </div>
              <br />
              <div className="card w-full bg-neutral text-neutral-content">
                <div className="card-body">
                  <p className="text-lg font-bold text-primary">From Publisher name</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis sit id fuga. Blanditiis ad voluptas fuga amet alias reprehenderit ex sint dignissimos totam. Consequuntur debitis nihil dolores beatae quasi possimus!</p>
                </div>
              </div>
              <br />
              <div className="card w-full bg-neutral text-neutral-content">
                <div className="card-body">
                  <p className="text-lg font-bold text-primary">From Publisher name</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis sit id fuga. Blanditiis ad voluptas fuga amet alias reprehenderit ex sint dignissimos totam. Consequuntur debitis nihil dolores beatae quasi possimus!</p>
                </div>
              </div>
              <br />
              <div className="card w-full bg-neutral text-neutral-content">
                <div className="card-body">
                  <p className="text-lg font-bold text-primary">From Publisher name</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis sit id fuga. Blanditiis ad voluptas fuga amet alias reprehenderit ex sint dignissimos totam. Consequuntur debitis nihil dolores beatae quasi possimus!</p>
                </div>
              </div>
              <br />
              
            </ul>
          </div>
        </div>
      </div>
        {/* <div>
          <h1>Publisher details</h1>
          <button onClick={updateDetails}>Update details</button>
          <p>Name: {publisher?.name}</p>
          <p>Address: {publisher?.id}</p>
          <p>Description: {publisher?.description}</p>
        </div>
        <div>
          <input type="text" placeholder="enter message" onChange={updateMessage}/>
          <br />
          <button onClick={sendMessage}>Send Message</button>
        </div>
        <div>
          {publisher.messages && publisher?.messages.map((message) => {
            {console.log(message)}
            return (
              <div className="border p-2">
                <p>{message.content}</p>
              </div>
            )
          })}
        </div> */}
    </div>
  )
}

export default Publisher