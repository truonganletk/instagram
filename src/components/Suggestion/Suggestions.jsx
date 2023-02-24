import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { NavLink, useLocation, } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import { getAllUsers } from "../../context/authContext/service";
import Suggestion from "./Suggestion";
import _ from "lodash";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  const { dispatch, users, user } = useContext(AuthContext);
  const {pathname} = useLocation();
  if (users.length > 0 && !_.isEmpty(user) && suggestions.length === 0) {
    const res = users.filter((u) => user.follow.findIndex((res) => res.id === u.id) === -1).slice(0, 5)
    //  console.log(res);
    setSuggestions(res);
  }
  useEffect(() => {
    // const suggestions = [...Array(5)].map((_, i) => ({
    //   id: i,
    //   userName: "tuanrider",
    //   avatar:
    //     "https://picsum.photos/200",
    // }));
    // setSuggestions(suggestions);
    getAllUsers(dispatch);
  }, []);

  return (
    users && <div className="mb-8">
      {pathname != '/explore/people' && <div className="flex items-center justify-between mb-[10px]">
        <h2>Suggestions For You</h2>
        <NavLink className="cursor-pointer" to="/explore/people">
          See all
        </NavLink>
      </div>}
      {
        suggestions.map((profile) => (
          <Suggestion key={profile.id} profile={profile} />
        ))
      }
    </div>
  );
}

export default Suggestions;
