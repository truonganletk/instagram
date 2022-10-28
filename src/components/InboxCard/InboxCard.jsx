import React, { Component } from 'react'
import PropTypes from "prop-types";

export class InboxCard extends Component {
    render() {
        return (
            <div>
                <div className={`flex justify-start items-center px-5 py-1 ${this.props.active ? "bg-gray-200" : "hover:bg-gray-100"}`}>
                    <img className="w-16 h-16 rounded-full p-2 " src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt />
                    <div>
                        <p>{this.props.name}</p>
                        <p className='text-gray-500'>{this.props.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}

InboxCard.propTypes = {
    name: PropTypes.string,
    active: PropTypes.bool,
    text: PropTypes.string,
};
export default InboxCard