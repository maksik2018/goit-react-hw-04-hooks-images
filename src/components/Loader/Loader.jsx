import React from "react";
import Loader from "react-loader-spinner";

export default function Spinner () {
  // render() {
    return (
      <div className="Spinner">
        <Loader type="Puff" color="#00BFFF" height={100} width={100}  timeout={700}/>
      </div>
    );
  }
// }

