import React, { Component } from "react";
import "./App.css";
import Users from "./Components/Users";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { usersData: [], waiting: true };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ usersData: users.data, waiting: false });
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              LGM USERS
            </a>
            <div className="d-flex">
              <button onClick={this.updateState} className="btn" type="submit">
                GET USERS
              </button>
            </div>
          </div>
        </nav>
        <div className="userbox">
          <Users waiting={this.state.waiting} users={this.state.usersData} />
        </div>
      </div>
    );
  }
}
