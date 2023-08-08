/* eslint-disable no-unused-vars */
import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1 className='text-center m-5'>Contact</h1>
            <form className='m-5 p-5'>
               <div className="mb-3">
                 <label  className="form-label">Email address</label>
                 <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                 <div id="emailHelp" className="form-text">Well never share your email with anyone else.</div>
               </div>
               <div className="mb-3">
                 <label  className="form-label">Password</label>
                 <input type="password" className="form-control" id="exampleInputPassword1"/>
               </div>
               <div className="mb-3 form-check">
                 <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                 <label className="form-check-label" >Check me out</label>
               </div>
               <button type="submit" className="btn btn-primary">Submit</button>
             </form>
        </div>
    );
};

export default Contact;