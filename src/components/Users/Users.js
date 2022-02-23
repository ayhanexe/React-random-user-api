import axios from 'axios'
import React, { memo, useEffect, useState } from 'react'
import styles from "./users.module.css";

function Users() {

    const userCount = 200;
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`https://randomuser.me/api/?results=${userCount}`).then((result) => {
            setUsers(result.data.results)
        }).catch((error) => console.log(error));
    }, [])

    return (
        <div className={styles.usersContainer}>
            {users.map((user, index) => {
                return <div key={`${index}-${user.name.first}-${user.name.last}`} className={styles.user}>
                    <img className={styles.userPicture} src={user.picture.large} />
                    <span>
                        <span>{user.name.first}</span>
                        &nbsp;
                        <span>{user.name.last}</span>
                    </span>
                </div>
            })}
        </div>
    )
}

export default memo(Users)