import React from "react";
import sad from "../../public/sad.png";
import "../styles/Error.css";

const Error = () => {
  return (
    <div className="error-img">
      <img src={sad} width="200" height="100"></img>
      <h1>Oops, The Page Not Found!</h1>
    </div>
  );
};

export default Error;
