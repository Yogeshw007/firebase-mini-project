import React from "react";

const User = (props) => {
  const { email, name, password } = props.userInfo;

  return (
    <div style={styles.userContainer}>
      <p>
        <b>Name</b> : {name}
      </p>
      <p>
        <b>Email</b> : {email}
      </p>
    </div>
  );
};

const styles = {
  userContainer: {
    border: "1px solid black",
    margin: 30
  }
};

export default User;
