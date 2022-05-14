import React, { useState, useEffect } from "react";

import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebase";

const SendTransaction = () => {
    const [amount, setAmount] = useState("");
    const [vendorname, setVendorName] = useState("");
    const [description, setDescription] = useState("");
    const [transactiontype, setTransactionType] = useState("");
    const [key, setKey] = useState("");


  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

  const docRef =  addDoc(collection(db, "transactions"), {
      
        amount: amount,
        vendorname: vendorname,
        description: description,
        transactiontype: transactiontype,
        key:key
      })
      
      setAmount("");
      setVendorName("");
      setDescription("");
      setTransactionType("");
      setKey("");
      
  };

  return (
    <form className="form" onSubmit={handleSubmit}>

<textarea
                required
                type="text"
                className="textarea w-full h-24 textarea-bordered focus:ring focus:outline-none"
                value={amount} onChange={(e) => setAmount(e.target.value)}
                placeholder="amount"
              />
              <textarea
                required
                type="text"
                className="textarea w-full h-24 textarea-bordered focus:ring focus:outline-none"
                value={vendorname} onChange={(e) => setVendorName(e.target.value)}
                placeholder="vendor name"
              />
              <textarea
                required
                type="text"
                className="textarea w-full h-24 textarea-bordered focus:ring focus:outline-none"
                value={description} onChange={(e) => setDescription(e.target.value)}
                placeholder="description"
              />
              <textarea
                required
                type="text"
                className="textarea w-full h-24 textarea-bordered focus:ring focus:outline-none"
                value={transactiontype} onChange={(e) => setTransactionType(e.target.value)}
                placeholder="Time Stamp"
              />
               <textarea
                required
                type="text"
                className="textarea w-full h-24 textarea-bordered focus:ring focus:outline-none"
                value={key} onChange={(e) => setKey(e.target.value)}
                placeholder="key"
              />

      <button
        type="submit"
        className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
        style={{marginBottom: '5px'}}
      >
        Submit
      </button>
    </form>
  );
};

export default SendTransaction;