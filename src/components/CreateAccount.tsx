import { Button, TextField } from "@mui/material";
import { FormEvent, useState } from "react";

function CreateAccount(props: {
  setUsername: (arg0: string) => void;
}): JSX.Element {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const doSignUp = (event: FormEvent) => {
    event.preventDefault();
    if (!username) {
      setError("NO_USERNAME");
      return false;
    }
    if (!password) {
      setError("NO_PASSWORD");
      return false;
    }
    if (password !== password2) {
      setError("PASSWORD_MATCH");
      return false;
    }
    localStorage.setItem("username", username);
    props.setUsername(username);
  };

  const LoginErrors: any = {
    PASSWORD_MATCH: "Your passwords don't match",
    NO_USERNAME: "Username cannot be blank",
    NO_PASSWORD: "Password cannot be blank",
  };

  return (
    <div className="">
      <h2 className="">Create Account</h2>
      <form
        noValidate
        onSubmit={(e) => {
          doSignUp(e);
        }}
      >
        <TextField
          required
          onChange={(e) => setUserName(e.target.value)}
          id="outlined-required"
          label="Username"
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          required
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          onChange={(e) => setPassword2(e.target.value)}
        />
        <div className="submit">
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </div>
        {error ? <div className="error">{LoginErrors[error]}</div> : null}
      </form>
    </div>
  );
}

export default CreateAccount;
