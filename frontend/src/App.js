import './App.css';
import React, { useCallback, useEffect, useState } from "react";
import { getEvents } from "./utils/meetups";
import { login } from "./utils/near";

function App() {
  const account = window.walletConnection.account();
  const [events, viewEvents] = useState([]);
  const fetchEvents = useCallback(async () => { //caching management
    if (account.accountId) {
      viewEvents(await getEvents());
    }
  }, [account.accountId]);
  useEffect(() => {
    fetchEvents();
  });
  return (
    <>
      {account.accountId ? (
        events.forEach((event) => console.log(event))
      ) : (
        <button onClick={login}>CONNECT WALLET</button>
      )}
    </>
  );
}

export default App;
