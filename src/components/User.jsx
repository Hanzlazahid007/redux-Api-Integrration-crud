import React from "react";
import { useDeleteUserMutation, useGetUsersQuery } from "../service/UserApi";
import { Link } from "react-router-dom";

const User = () => {
  const { data: users, isError, isLoading, isSuccess } = useGetUsersQuery();
  const { deleteUser } = useDeleteUserMutation();
  return (
    <div className="justify-content-center p-3">
      {isLoading && <h1>Loading ...</h1>}
      {isError && <h1>Something went wrong</h1>}

      {isSuccess &&
        users.map((user) => {
          return (
            <div
              key={user.id}
              className="p-5 border border-2  border-dark  m-2 "
            >
              <h4>{user.name}</h4>
              <h4>{user.email}</h4>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
              <Link
                to={`/edit/${user.id}`}
                className="btn btn-sm btn-success ms-2"
              >
                Edit
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default User;
