import * as React from "react";
import { render } from "react-dom";
import { pingICP_backend } from "../../declarations/pingICP_backend";

const MyHello = () => {
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  async function doGreet() {
    const greeting = await pingICP_backend.greet(name);
    setMessage(greeting);
  }

  return (
    <div>
      <p>Hi, this is the frontend canister</p>
    </div>
  );
};

render(<MyHello />, document.getElementById("app"));