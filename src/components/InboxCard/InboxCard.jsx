import React, { Component } from "react";
import PropTypes from "prop-types";

export class InboxCard extends Component {
  render() {
    return (
      <div>
        <div
          className={`flex justify-start items-center px-5 py-1 cursor-pointer ${
            this.props.active
              ? "bg-gray-200 dark:bg-ig-dark-highlight-background"
              : "hover:bg-gray-100 hover:dark:bg-ig-dark-secondary-background"
          }`}
        >
          <img
            loading="lazy"
            className="w-16 h-16 rounded-full p-2 "
            src={this.props.avatar}
            alt=""
          />
          <div>
            <p>{this.props.name}</p>
            <p className="text-gray-500">{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

InboxCard.propTypes = {
  name: PropTypes.string,
  active: PropTypes.bool,
  text: PropTypes.string,
  avatar: PropTypes.string,
};
export default InboxCard;
