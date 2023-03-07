import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import { getAllUsers } from "../../context/authContext/services";
import Suggestion from "./Suggestion";
import _ from "lodash";
import SuggestionSkeletion from "./SuggestionSkeletion";

function Suggestions() {
  const [suggestions, setSuggestions] = useState(null);
  const { dispatch, users, user } = useContext(AuthContext);
  const { pathname } = useLocation();
  if (users.length > 1 && !_.isEmpty(user) && suggestions === null) {
    const res = users
      .filter(
        (u) =>
          user.follow.findIndex((res) => res.id === u.id) === -1 &&
          user.id != u.id
      )
      .slice(0, pathname != "/explore/people" ? 5 : 20);

    setSuggestions(res);
  }

  useEffect(() => {
    getAllUsers(dispatch);
  }, []);

  return (
    <>
      {" "}
      <div className="mb-8">
        {pathname != "/explore/people" && (
          <div className="flex items-center justify-between mb-[10px]">
            <h2>Suggestions For You</h2>
            <NavLink className="cursor-pointer" to="/explore/people">
              See all
            </NavLink>
          </div>
        )}
        {suggestions !== null ? (
          suggestions?.map((profile) => (
            <Suggestion key={profile.id} profile={profile} />
          ))
        ) : (
          <>
            <SuggestionSkeletion/>
            <SuggestionSkeletion/>
            <SuggestionSkeletion/>
            <SuggestionSkeletion/>
            <SuggestionSkeletion/>
          </>
        )}
      </div>
    </>
  );
}

export default Suggestions;
