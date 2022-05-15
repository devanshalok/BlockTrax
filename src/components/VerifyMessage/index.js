import React,{ useState, useRef } from "react";
import { ethers } from "ethers";
import ErrorMessage from "../ErrorMessage";
import SuccessMessage from "../SuccessMessage";

const verifyMessage = async ({ message, address, signature }) => {
  try {
    const signerAddr = await ethers.utils.verifyMessage(message, signature);
    if (signerAddr !== address) {
      return false;
    }

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default function VerifyMessage(props) {
  const [error, setError] = useState();
  const [successMsg, setSuccessMsg] = useState();

  const handleVerification = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setSuccessMsg();
    setError();
    const isValid = await verifyMessage({
      setError,
      message: data.get("message"),
      address: data.get("address"),
      signature: data.get("signature")
    });

    if (isValid) {
      setSuccessMsg("Transaction is valid!");
    } else {
      setError("Invalid Transaction");
    }
  };
 
  return (
    <form className="m-4" onSubmit={handleVerification}>
      <div className="credit-card w-full shadow-lg mx-auto rounded-xl bg-white">
        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">
            Verify Transaction
          </h1>
          <div className="">
            <div className="my-3">
              <textarea
              disabled
                required
                type="text"
                name="message"
                className="textarea w-full h-24 textarea-bordered focus:ring focus:outline-none"
                placeholder="Message"
                value={props.checkboxData[0].transactiontype}
                

              />
              
            </div>
            <div className="my-3">
              <textarea
                required
                type="text"
                name="signature"
                className="textarea w-full h-24 textarea-bordered focus:ring focus:outline-none"
                placeholder="Signature"
              />
            </div>
            <div className="my-3">
              <input
              disabled
                required
                type="text"
                name="address"
                className="textarea w-full input input-bordered focus:ring focus:outline-none"
                placeholder="Signer address"
                value={props.checkboxData[0].key}
              />
            </div>
          </div>
        </main>
        <footer className="p-4">
          <button
            type="submit"
            className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
          >
            Verify Transaction!
          </button>
        </footer>
        <div className="p-4 mt-4">
          <ErrorMessage message={error} />
          <SuccessMessage message={successMsg} />
        </div>
      </div>
    </form>
  );
}
