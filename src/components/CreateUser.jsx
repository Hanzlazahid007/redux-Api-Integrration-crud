import React, { useState } from "react";
import { useAddUserMutation } from "../service/UserApi";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [user, setUser] = useState({});

  const naviagte = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [addUser] = useAddUserMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    await addUser(user);
    naviagte("/");
  };
  return (
    <div className="d-flex justify-content-center mt-5 ">
      <form className="border border-2 border-dark p-3" onSubmit={handleSubmit}>
        <h1> Add User</h1>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 mt-3">
          <label className="form-label">Email:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
