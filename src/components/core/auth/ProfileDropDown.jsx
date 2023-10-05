import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const ProfileDropDown = () => {
    const {user} = useSelector((state)=>state.profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    

  return (
    <div>ProfileDropDown</div>
  )
}

export default ProfileDropDown