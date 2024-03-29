import React from 'react';

const UserList = ({userInfo}) => {
    const {id, username, email} = userInfo;
    return (
        <div className={`user user${id}`}>
            <p>Id: {id}</p>
            <p>Username: {username}</p>
            <p>email: {email}</p>
        </div>
    );
};

export default UserList;