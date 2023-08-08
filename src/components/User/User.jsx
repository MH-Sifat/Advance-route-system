/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id,name,email,username} = user;
    return (
        <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Id:{id} Name:{name}</h5>
            <p className="card-text">Email:{email}</p>
            <p className="card-text">User Name:{username}</p>
            <Link to={`/user/${id}`}><button className='btn btn-outline-danger'>Show Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default User;