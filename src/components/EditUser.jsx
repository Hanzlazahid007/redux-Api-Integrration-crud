import React, { useEffect } from "react";
import { useGetUserQuery, useUpdateUserMutation } from "../service/UserApi";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    id: id,
    name: "",
    email: "",
  });

  const naviagte = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const { data } = useGetUserQuery(id);
  console.log(data);
  useEffect(() => {
    if (data) {
      setUser({ ...user, name: data.name, email: data.email });
    }
  }, [data]);
  const [updateUser] = useUpdateUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);
    await updateUser(user);
    naviagte("/");
  };
  return (
    <div className="d-flex justify-content-center mt-5 ">
      <form className="border border-2 border-dark p-3" onSubmit={handleSubmit}>
        <h1> Update User</h1>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            name="name"
            value={user.name}
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
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUser;
