import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function CurrentUserProfile() {
   
  const userInfo = useSelector(store => store.auth.currentUser);

    
    return (
        <>
          <p>{userInfo.username}</p>
          <p>{userInfo.email}</p>
          <p>{userInfo.name}</p>
          <p>{userInfo.lastname}</p>
          <p>{userInfo.createdAt}</p>
          <Link to={`/${userInfo.username}/edit`}>Edit Info</Link>
          {/* <button type="button" onClick={editInfo}>Edit Info</button> */}
        </>
    );
}

export default CurrentUserProfile;