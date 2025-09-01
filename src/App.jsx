import React from "react";
import useSWR from "swr";

import UserCard from "./components/UserCard";
import Spinner from "./components/Spinner";

/*
  API INSTRUCTIONS
  
  This endpoint expects a GET request.
  
  To simulate an error, attach the following
  query parameter: `simulatedError=true`
*/

// const ENDPOINT = "https://jor-test-api.vercel.app/api/get-current-user?simulatedError=true";
const ENDPOINT = "https://jor-test-api.vercel.app/api/get-current-user";

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();

  if (!json.ok) {
    throw json;
  }

  return json;
}

function App() {
  const { data, error } = useSWR(ENDPOINT, fetcher);
  console.log(data, error);

  const isLoading = !data && !error;

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  if (data?.user) {
    return <UserCard name={data.user.name} email={data.user.email} />;
  }
}

export default App;
