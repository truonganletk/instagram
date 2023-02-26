import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import FirebaseContext from "../../context/firebaseContext/firebase";
import NotificationItem from "./NotificationItem";

function Notifications() {
  const [notifs, setNotifs] = useState([]);
  const { user } = useContext(AuthContext);
  const { firestore } = useContext(FirebaseContext);

  useEffect(() => {
    const unSub = onSnapshot(
      doc(firestore, "notifications", user.id || "null"),
      (doc) => {
        doc.exists() && setNotifs(doc.data().notifications);
      }
    );
    return () => {
      unSub();
    };
  }, [user.id]);

  return (
    <div>
      {notifs.length > 0 ? (
        notifs.map((notif, index) => (
          <NotificationItem notif={notif} key={index} />
        ))
      ) : (
        <div className="py-3 text-center dark:bg-ig-dark-secondary-background">
          <p> There are currently no announcements </p>
        </div>
      )}
    </div>
  );
}

export default Notifications;
