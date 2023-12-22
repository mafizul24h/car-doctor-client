import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from './../../../src/assets/images/login/login.svg'
import googleIcon from './../../assets/icons/google-icon.png'
import { AuthContext } from '../../providers/AuthProvider';

const Signup = () => {
    const { createUser, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignup = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                logOut().then(() => {
                }).catch(error => {
                })
                event.target.reset();
                navigate('/login');
            }).catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200 my-12">
            <div className="hero-content lg:flex lg:gap-16">
                <div className="text-center lg:text-left lg:w-1/2">
                    <img src={img} alt="Login Image" />
                </div>
                <div className="card shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Sign Up now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirm' placeholder="Confirm Password" className="input input-bordered" required />
                        </div> */}
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Sign Up" />
                        </div>
                        <div>
                            <p className='text-center my-2'>Or Sign Up With</p>
                            <img className='h-6 w-6 mx-auto rounded-full' src={googleIcon} alt="Google Icon" />
                            <p className='text-center mt-2'>Already Have an Account? <Link to='/login' className='text-orange-600 font-bold'>Please Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;