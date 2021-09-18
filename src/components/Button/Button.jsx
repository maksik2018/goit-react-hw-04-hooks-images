import React , {Component} from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button type="button" className="Button" onClick={onClick}>
       Load more
      </button>
    );
  }
}
Button.propTypes = {
  onClick: PropTypes.func,
};


