import React from 'react';
import { fackUSerData } from '../api/index';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/User';
import DisplayUser from './DisplayUser'



const UserDetails = () => {
    const dispatch = useDispatch();

  const addNewUser = (name) => {
    dispatch(addUser(name))
  };

  return (
    <>
      <div className='content' style={{display:"flex", justifyContent:"center", alignItems:"center",flexDirection:"column"}}>
        <div className='admin_table'>
          <button
          style={{height:"34px",border:"2px solid black", borderRadius:"10px"}}       
           onClick={() => addNewUser(fackUSerData())}
           >Add New User</button>
          <div className='admin_subtitle'>List of User Details</div>
        </div>
        <ul>
        <DisplayUser/>
        </ul>
        <hr />
      </div>
    </>
  );
};

export default UserDetails;
