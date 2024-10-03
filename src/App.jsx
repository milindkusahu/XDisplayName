import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
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
          <input type="submit" />
        </form>
      </div>
      {fullName ? <p>Full Name: {fullName}</p> : ""}
    </div>
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <h1>Full Name Display</h1>
    //   <div>
    //     <div>
    //       <span>First Name:</span> <input type="text" />
    //     </div>
    //     <br />
    //     <div>
    //       <span>Last Name:</span> <input type="text" />
    //     </div>
    //     <br />
    //     <button>Submit</button>
    //   </div>
    // </div>
  );
};

export default App;
