import React from "react";
import { useState } from "react";

import { pingICP_backend } from "../../../declarations/pingICP_backend";

const Subscriber = ({ principal }) => {
  console.log(principal, typeof principal);

  const [subscriber, setSubscriber] = useState({
    id: null,
    name: null,
    messages: null,
    publishers: null,
  });
  const [publishers, setPublishers] = useState([]);

  const updateDetails = async () => {
    const details = await pingICP_backend.get_subscriber(principal);
    console.log("fetched details", details);
    setSubscriber(JSON.parse(details.toString()));
    const result = await pingICP_backend.get_publishers();
    console.log("fetched details", result);
    setPublishers(Object.values(JSON.parse(result.toString())));
  };

  const subscribe = async (event) => {
    const publisherID = event.target.value;
    console.log("subscribing", publisherID);
    const result = await pingICP_backend.subscribe(publisherID, subscriber.id);
    await updateDetails();
  };

  if (subscriber.id == null) {
    updateDetails();
  }

  return (
    <div className="w-screen flex flex-col items-center p-10">
      <div className="card w-full bg-neutral text-neutral-content">
        <div className="card-body">
          <h2 className="card-title">User details</h2>
          <br />
          <p>ID: {subscriber.id} </p>
          <p>Name: {subscriber.name} </p>
          {/* <button className="btn" onClick={updateDetails}>
            Refresh details
          </button> */}
        </div>
      </div>
      <div className="w-full flex flex-row">
        <div className="w-1/4 border rounded-md m-5 p-10 h-screen overflow-scroll">
          <div>
            <p className="font-bold">List of publishers:</p>
            <br />
            <ul>
              {publishers.length > 0 &&
                publishers.map((publisher) => {
                  console.log(publisher);
                  return (
                    <div className="card w-full bg-neutral text-neutral-content m-2">
                      <div className="card-body">
                        <p className="text-lg font-bold text-primary">{publisher.name}</p>
                        <p>{publisher.description}</p>
                        <br />
                        {publisher.subscribers.includes(subscriber.id) && (
                          <button className="btn" value={publisher.id}>
                            Subscribed
                          </button>
                        )}
                        {!publisher.subscribers.includes(subscriber.id) && (
                          <button
                            className="btn btn-primary"
                            value={publisher.id}
                            onClick={subscribe}
                          >
                            Subscribe
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className="w-3/4 border rounded-md m-5 p-10 h-screen overflow-scroll">
          <div>
            <p className="font-bold">Messages: </p>
            <br />
            <ul>
            {subscriber.messages &&
              subscriber?.messages.map((message) => {
                console.log(message);
                return (
                  <div className="card w-full bg-neutral text-neutral-content m-2">
                    <div className="card-body">
                      <p className="text-lg font-bold text-primary">From { message.publisher }</p>
                      <p>{ message.content }</p>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriber;
