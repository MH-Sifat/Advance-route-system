/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData()
    return (
        <div>
            <h1 className='my-5 text-center'>User Details</h1>
         <table className="table">
           <thead>
             <tr>
               <th scope="col">ID</th>
               <th scope="col">Name</th>
               <th scope="col">Email</th>
               <th scope="col">Phone</th>
               <th scope="col">Website</th>
               <th scope="col">Action</th>
             </tr>
           </thead>
           <tbody>
           <tr>
           <th scope="row">{user?.id}</th>
           <th scope="row">{user?.name}</th>
           <th scope="row">{user?.email}</th>
           <th scope="row">{user?.phone}</th>
           <th scope="row">{user?.website}</th>
           <th scope="row"><button className='btn btn-danger'>Delete</button></th>
            
           </tr>
          </tbody>
         </table>
        </div>
    );
};

export default UserDetails;