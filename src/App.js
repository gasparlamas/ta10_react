import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

const getUsers = async () => {
  const usersFetch = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await usersFetch.json();
  return users;
};

const ShowUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => setUsers(users));
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <div>{user.email}</div>
            {user.username}
          </div>
        );
      })}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <ShowUsers />
    </div>
  );
};

export default App;