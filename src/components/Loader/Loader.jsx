import React, { Component } from "react";
import Loader from "react-loader-spinner";

export default class Spinner extends Component {
  render() {
    return (
      <div className="Spinner">
        <Loader type="Puff" color="#00BFFF" height={100} width={100}  timeout={700}/>
      </div>
    );
  }
}

