import React, { useState } from "react";
import FetchData from "./FetchData";

function Home() {
  const [userName, setUserName] = useState("");
  const [submittedUserName, setSubmittedUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    setSubmittedUserName(userName); // Set the submitted user name to trigger FetchData
  };

  return (
    <>
      <div
        className="flex flex-col bg-[rgb(40,40,40)] text-white w-80 p-6 rounded-xl"
        style={{
          boxShadow: "0px 0px 3px rgba(255, 255, 255, 0.5)",
        }}
      >
        <h1 className="mb-4 font-serif text-3xl font-bold text-center ">
          LEETMETRIC
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center gap-4 mb-4">
            <input
              style={{
                boxShadow: "0px 0px 5px rgba(255, 255, 255, 0.5)",
              }}
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter user Id"
              className="p-0 m-0 font-bold text-center text-gray-800 placeholder-gray-500 border-none rounded-sm outline-none invalid:border-none invalid:outline-none"
            />
            <p>eg:- ID = LeetCode</p>
            <button
              type="submit"
              className="w-1/2 rounded-md "
              style={{
                boxShadow: "0px 0px 3px rgba(255, 255, 255, 0.5)",
              }}
            >
              Submit
            </button>
          </div>
        </form>
        {/* Only fetch data if a userName has been submitted */}
        {submittedUserName && <FetchData userName={submittedUserName} />}
      </div>
    </>
  );
}

export default Home;
