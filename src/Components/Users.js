import React from "react";
import "./Users.css";

const Users = ({ waiting, users }) => {
  return waiting ? (
    <div className="image">
      <img
        src="https://i.pinimg.com/originals/67/87/f6/6787f690985b40c296895d2776121be2.gif"
        alt="Waiting"
      />
    </div>
  ) : (
    <div className="container text-center">
      <div className="row">
        {users.length &&
          users.map((user) => {
            return (
              <div className="col-md-4 col-12 py-2" data={user.id}>
                <div className="card">
                  <img src={user.avatar} alt="images" className="img-fluid" />
                  <div className="content">
                    <h2>
                      {user.first_name} {user.last_name}
                    </h2>
                    <a href="#">{user.email}</a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Users;
