import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from './../../../src/assets/images/login/login.svg'
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                navigate(from, { replace: true });
            }).catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200 my-12">
            <div className="hero-content lg:flex lg:gap-16">
                <div className="text-center lg:text-left lg:w-1/2">
                    <img src={img} alt="Login Image" />
                </div>
                <div className="card shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
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
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control">
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                        <p className='text-center mt-2'>New to here? <Link to='/signup' className='text-orange-600 font-bold'>Sign Up</Link></p>
                    </form>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;