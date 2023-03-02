import React, { Component } from "react";
import PropTypes from "prop-types";
import { getIndexOfWhitespace } from "../../utils";

export class InboxCard extends Component {
  render() {
    const text = this.props.text!=undefined ? `${this.props.text.substring(
      0,
      Math.min(getIndexOfWhitespace(this.props.text, 3), 17)
    )}${this.props.text.length > 17 ? '...' : ''}${this.props.text.length == 0 ? 'A new image was sent.' : ''}` : 'Tap to chat';
    return (
      <div>
        <div
          className={`flex justify-start items-center px-5 py-1 cursor-pointer ${this.props.active
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
            <p className="text-gray-500">
              {text}
            </p>
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
