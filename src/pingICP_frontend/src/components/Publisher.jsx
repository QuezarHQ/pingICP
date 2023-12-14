import React from "react";
import { useState } from "react";

import { pingICP_backend } from "../../../declarations/pingICP_backend";

const Publisher = ({ principal }) => {
  console.log(principal, typeof principal);

  const [publisher, setPublisher] = useState({
    id: null,
    name: null,
    description: null,
    messages: null,
    subscribers: null,
  });

  const updateDetails = async () => {
    const details = await pingICP_backend.get_publisher(principal);
    console.log("fetched details", details);
    setPublisher(JSON.parse(details.toString()));
  };

  const sendMessage = async () => {
    console.log("sending message");
    const text = document.getElementById("textbox").value
    const result = await pingICP_backend.publish(publisher?.id, text);
    console.log("publish message", result);
    await updateDetails();
  };

  if (publisher.id == null) {
    updateDetails();
  }

  return (
    <div className=" flex flex-col items-center p-10">
      <div className="card w-full bg-neutral text-neutral-content">
        <div className="card-body">
          <h2 className="card-title">Dapp details</h2>
          <br />
          <p>ID: {publisher?.id} </p>
          <p>Name: {publisher?.name} </p>
          <p>Description: {publisher?.description} </p>
          {/* <button className="btn" onClick={updateDetails}>
            Refresh
          </button> */}
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
                  <textarea
                    id="textbox"
                    placeholder="type your message here..."
                    className="textarea textarea-primary text-primary-content textarea-md"
                  />
                  <br />
                  <button className="btn btn-primary" onClick={sendMessage}>
                    Send Update
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className="w-3/4 border rounded-md m-5 p-10 h-screen overflow-scroll">
          <div>
            <p className="font-bold">Previous posts: </p>
            <br />
            <ul>
              {publisher?.messages?.length == 0 && (
                <p>
                  No updates posted yet. Try posting your first update via the
                  form on the left.
                </p>
              )}
              {publisher?.messages?.length > 0 &&
                publisher.messages.map((message) => {
                  return (
                    <div className="card w-full bg-neutral text-neutral-content m-2">
                      <div className="card-body">
                        {/* <p className="text-lg font-bold text-primary"></p> */}
                        <p>{ message.content }</p>
                      </div>
                    </div>
                  );
                })}
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
  );
};

export default Publisher;
