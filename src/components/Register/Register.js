import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="mockup-phone border-primary mt-2">
            <div className="camera"></div> 
            <div className="display">
                <div className="artboard artboard-demo phone-1">
                    {/* form area start */}
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <h1 className='text-3xl font-bold'>Register Now!!</h1>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
                <label className="label">
                    <Link to='/login' className="label-text-alt link link-hover">Already have an account? Login</Link>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                </div>
            </div>
            </div>
        </div>
        </div>
     </div>
            
    );
};

export default Register;