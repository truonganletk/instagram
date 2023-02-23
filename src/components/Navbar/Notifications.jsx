import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/authContext/AuthContext';
import FirebaseContext from '../../context/firebase';
import NotificationItem from './NotificationItem'

function Notifications() {

    const [notifs, setNotifs] = useState([]);
    const { user } = useContext(AuthContext);
    const { firestore } = useContext(FirebaseContext);

    useEffect(() => {
        // console.log(user.id);
        const unSub = onSnapshot(doc(firestore, "notifications", user.id || 'null'), (doc) => {
            doc.exists() && setNotifs(doc.data().notifications);
            // console.log(doc.data());
        });
        return () => {
            unSub();
        };
    }, [user.id]);

    return (
        <div>
            {notifs.length > 0 ? notifs.map((notif, index) => (
                <NotificationItem notif={notif} key={index} />
            )) :
                <div className='py-3 text-center'>
                    <p> There are currently no announcements </p>
                </div>}
            {/* <li>
                <NotificationItem />
            </li>
            <li>
                <NotificationItem />
            </li>
            <li>
                <NotificationItem />
            </li> */}
        </div>
    )
}

export default Notifications