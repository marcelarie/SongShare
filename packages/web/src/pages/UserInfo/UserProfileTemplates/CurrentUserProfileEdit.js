import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from '../../../redux/user/user-actions';



function CurrentUserProfileEdit() {

    const dispatch = useDispatch()
   
  const userInfo = useSelector(store => store.auth.currentUser);
  const username = userInfo.username

//   const [username,setUsername] = useState(userInfo.username)
  const [name,setName] = useState(userInfo.name)
  const [lastname,setLastname] = useState(userInfo.lastname)


const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(updateUserInfo(username,name,lastname))
}

    return (
        <>
          <form type="submit">
            <label className="form-label" htmlFor="name">name</label>
            <input className="form-input" type="text" placeholder={userInfo.name} onChange={(e)=>setName(e.target.value)}/>
            <label className="form-label" htmlFor="lastname">last name</label>
            <input className="form-input" type="text" placeholder={userInfo.lastname} value={userInfo.lastname} onChange={(e)=>setLastname(e.target.value)}/>
            <button className="btn btn-primary w-full"  type="submit" onClick={handleSubmit}>submit</button>
          </form>
        </>
    );
}

export default CurrentUserProfileEdit;