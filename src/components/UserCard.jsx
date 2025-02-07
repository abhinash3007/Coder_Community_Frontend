import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="card w-96 bg-base-300 shadow-sm">
      <figure className="h-80 my-5">
        <img
          className="w-80 h-80 object-cover"
          src={user.photoUrl}
          alt={user.firstName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {user.firstName} {user.lastName}
        </h2>
        <p>
          Age: {user.age}
        </p>
        <p>
          Gender: {user.gender}
        </p>
        <p>
          {user.about}
        </p>
        <div className="card-actions justify-center my-2">
          <button className="btn btn-secondary">Interested</button>
          <button className="btn btn-primary">Ignore</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
