import "./styles.css";
import React from "react";
import firebase from "firebase/app";
import User from "./User";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: []
    };

    this.db = firebase.firestore();
  }

  componentDidMount() {
    this.db.collection("users").onSnapshot((snapshot) => {
      const users = snapshot.docs.map((doc) => {
        return doc.data();
      });

      this.setState({
        users: users
      });
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.users.map((user) => {
          return <User userInfo={user} />;
        })}
      </div>
    );
  }
}
