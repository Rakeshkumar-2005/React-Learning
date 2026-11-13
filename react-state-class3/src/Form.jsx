
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password:""
  });

  const handleInputChange = (event) => {

    setFormData((currData) => {
      return {
        ...currData,
        [event.target.name]:event.target.value 
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
    setFormData({
      fullName: "",
      userName: "",
      password:""
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full Name</label>
      <input
        placeholder="Enter your full name"
        type="text"
        value={formData.password}
        id="fullname"
        name="fullName"
        onChange={handleInputChange}
      />

      <br /><br />

      <label htmlFor="username">User Name</label>
      <input
        placeholder="Enter your username"
        type="text"
        value={formData.userName}
        id="username"
        name="userName"
        onChange={handleInputChange}
      />

       <br /><br />

      <label htmlFor="password">password</label>
      <input
        placeholder="Enter your password"
        type="password"
        value={formData.userName}
        id="password"
        name="password"
        onChange={handleInputChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
