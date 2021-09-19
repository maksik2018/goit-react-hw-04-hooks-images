import React from "react";
import PropTypes from "prop-types";

export default function Button ({onClick}) {
  // render() {
    // const { onClick } = this.props;
    return (
      <button type="button" className="Button" onClick={onClick}>
       Load more
      </button>
    );
  }
// }
Button.propTypes = {
  onClick: PropTypes.func,
};


