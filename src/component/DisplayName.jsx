import { useState } from "react";

const DisplayName = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  const [fullName, setFullName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${name.firstName} ${name.lastName}`);
    setIsSubmitted(true);
  };

  return (
    <div>
      <h1>Full Name Display</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            onChange={(e) =>
              setName((prevName) => ({
                ...prevName,
                firstName: e.target.value,
              }))
            }
            type="text"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            onChange={(e) =>
              setName((prevName) => ({
                ...prevName,
                lastName: e.target.value,
              }))
            }
            type="text"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && <p>Full Name: {fullName}</p>}
    </div>
  );
};

export default DisplayName;
