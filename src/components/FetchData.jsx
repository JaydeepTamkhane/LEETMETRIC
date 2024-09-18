import React, { useEffect, useState } from "react";
import DisplayData from "./DisplayData";

function FetchData({ userName }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    if (userName) {
      setLoading(true); // Set loading to true when fetching starts
      fetch(`https://leetcode-stats-api.herokuapp.com/${userName}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((response) => {
          setData(response);
          setLoading(false); // Set loading to false once data is fetched
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false); // Set loading to false on error
        });
    }
  }, [userName]);

  useEffect(() => {
    if (data) {
      console.log(data); // Log the data whenever it updates
    }
  }, [data]);

  return (
    <>
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      {loading && <p className="text-center">Loading...</p>}
      {!loading && !error && data && data.totalSolved === 0 && (
        <p className="text-center">Invalid Username</p>
      )}
      {data && data.totalSolved > 0 && <DisplayData data={data} />}
    </>
  );
}

export default FetchData;
