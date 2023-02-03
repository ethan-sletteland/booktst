import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import CreateAccount from "./components/CreateAccount";
import Home from "./components/Home";
import DeleteIcon from "@mui/icons-material/DeleteForever";

function App() {
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const logout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.setItem("username", "");
      setUsername("");
    }
  };

  return (
    <div className="App">
      <h1 className="App-header">
        Website
        {username ? (
          <div>
            <Button
              onClick={() => logout()}
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
            >
              Log Out
            </Button>
          </div>
        ) : null}
      </h1>
      {username ? (
        <Home username={username}></Home>
      ) : (
        <CreateAccount setUsername={setUsername}></CreateAccount>
      )}
    </div>
  );
}

export default App;
