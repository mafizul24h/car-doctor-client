import React, { useContext } from 'react';
import googleIcon from './../../assets/icons/google-icon.png'
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSingIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='mb-6 mx-4 text-center'>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSingIn}>
                <img className='h-6 w-6 mx-auto rounded-full' src={googleIcon} alt="Google Icon" />
            </button>
        </div>
    );
};

export default SocialLogin;