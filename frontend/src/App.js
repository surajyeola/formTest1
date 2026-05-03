import React, { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/submit", formData);
    alert("Data submitted!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} /><br/><br/>
        <input name="email" placeholder="Email" onChange={handleChange} /><br/><br/>
        <input name="address" placeholder="Address" onChange={handleChange} /><br/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;