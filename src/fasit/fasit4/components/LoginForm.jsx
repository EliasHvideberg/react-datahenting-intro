import React, { useState } from "react";
import { useCurrentUser } from "../contexts/CurrentUser";
import { Button } from "./Button";

export const LoginForm = () => {
  const { setCurrentUser } = useCurrentUser();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const canLogin = firstName !== "" && lastName !== "";
  return (
    <div className="login-form-container">
      <div className="login-form-input">
        <label>
          First name{": "}
          <input
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
      </div>
      <div className="login-form-input">
        <label>
          Last name{": "}
          <input
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </div>
      <Button
        disabled={!canLogin}
        onClick={() => {
          setCurrentUser({
            name: firstName + " " + lastName,
          });
        }}
      >
        Log in
      </Button>
      <div className="login-form-info">
        {!canLogin && <i>Fill in both fields.</i>}
      </div>
    </div>
  );
};
