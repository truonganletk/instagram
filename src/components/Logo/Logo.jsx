import React from "react";
import { Link } from "react-router-dom";
import logolight from "../../asset/image/instagram logo light.png";
import logodark from "../../asset/image/instagram logo dark.png";


function Logo() {
  
  return (
    <div className="basis-1/3">
      <Link to="/#">
          <img loading="lazy" className="logo max-h-14 hidden dark:block" src={logodark} alt="" /> 
          <img loading="lazy" className="logo max-h-14 block dark:hidden" src={logolight} alt="" />
      </Link>
    </div>
  )
}

export default Logo