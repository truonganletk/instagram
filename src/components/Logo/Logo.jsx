import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../asset/image/logo.png";
export class Logo extends Component {
  render() {
    return (
      <div className="basis-1/3">
        <Link to="/#">
          <img loading="lazy" className="logo max-h-14" src={logo} alt="" />
        </Link>
      </div>
    );
  }
}

export default Logo;
