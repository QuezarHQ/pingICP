import React from 'react'
import { useState } from 'react'
import { useCanister } from "@connect2ic/react"

const Subscriber = ({ principal }) => {

  console.log(principal, typeof (principal))

  const [ping] = useCanister("pingICP_backend")
  const [subscriber, setSubscriber] = useState({
    id: null,
    name: null,
    messages: null,
    publishers: null
  })
  const [publishers, setPublishers] = useState([])

  const updateDetails = async () => {
    const details = await ping.get_subscriber(principal)
    console.log('fetched details', details)
    setSubscriber(JSON.parse(details.toString()))
    const result = await ping.get_publishers()
    console.log('fetched details', result)
    setPublishers(Object.values(JSON.parse(result.toString())))
  }

  const subscribe = async (event) => {
    const publisherID = event.target.value
    console.log('subscribing', publisherID)
    const result = await ping.subscribe(publisherID, subscriber.id)
    await updateDetails()
  }

  return (
    <div className="w-screen flex flex-col items-center p-10">
      <div className="card w-full bg-neutral text-neutral-content">
        <div className="card-body">
          <h2 className="card-title">User details</h2>
          <br />
          <p>Address: Something somthing</p>
          <p>ID: Something Somthing</p>
          <p>Name: Somthing</p>
        </div>
      </div>
      <div className="w-full flex flex-row">
        <div className="w-1/4 border rounded-md m-5 p-10 h-screen overflow-scroll">
          <div>
            <p className="font-bold">List of publishers:</p>
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
                  <p className="text-lg font-bold">Publisher name</p>
                  <p>Publisher description</p>
                  <br />
                  <button className="btn btn-primary">Subscribe</button>
                </div>
              </div>
              <br />
              <div className="card w-full bg-neutral text-neutral-content">
                <div className="card-body">
                  <p className="text-lg font-bold">Publisher name</p>
                  <p>Publisher description</p>
                  <br />
                  <button className="btn btn-primary">Subscribe</button>
                </div>
              </div>
              <br />
              <div className="card w-full bg-neutral text-neutral-content">
                <div className="card-body">
                  <p className="text-lg font-bold">Publisher name</p>
                  <p>Publisher description</p>
                  <br />
                  <button className="btn btn-primary">Subscribe</button>
                </div>
              </div>
              <br />
              <div className="card w-full bg-neutral text-neutral-content">
                <div className="card-body">
                  <p className="text-lg font-bold">Publisher name</p>
                  <p>Publisher description</p>
                  <br />
                  <button className="btn btn-primary">Subscribe</button>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className="w-3/4 border rounded-md m-5 p-10 h-screen overflow-scroll">
          <div>
            <p className="font-bold">Messages: </p>
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


    </div>
  )
}

export default Subscriber