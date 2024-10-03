import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    } else {
      setFullName("");
    }
  };

  return (
    <div className="form-style">
      <h1>Full Name Display</h1>
      <div>
        <form onSubmit={handleSubmit} className="form-style">
          <label>
            First Name:{" "}
            <input
              type="text"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>

          <label>
            Last Name:{" "}
            <input
              type="text"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
};

export default App;
