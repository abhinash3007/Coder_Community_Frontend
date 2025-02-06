import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="card w-96 bg-base-300 shadow-sm">
      <figure className="h-48">
        <img
          className="w-70 h-70 object-cover"
          src={user.photoUrl}
          alt={user.firstName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {user.firstName} {user.lastName}
        </h2>
        <p>
          {user.about}
        </p>
        <p>
          Age: {user.age}
        </p>
        <p>
          Gender: {user.gender}
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
