// App component

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState([]);
  const [users, setUsers] = useState([]);

  // we don't have to define localhost:5000/ because we've set that as our proxy in package.json
  useEffect(() => {
    // fetching from the root of our api
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));

    // fetching users from our api/users.
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        // setting a timeout just to simulate loading...
        setTimeout(() => {
          setUsers(data.users);
        }, 2000);
      });
  }, []); // empty array means this will only run on first render.

  return (
    <>
      <h1>My Full Stack App</h1>
      <h2>{message}</h2>

      {/* Dynamically rendering users. */}
      {users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <h3 className="user-list-heading">List of Users</h3>
          <ul className="user-list">
            {users.map((user) => (
              <li key={user.id}>
                Name: {user.name}, Gender: {user.gender}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default App;
