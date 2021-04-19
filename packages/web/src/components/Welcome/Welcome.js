import React from 'react';
import { useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../../styles/Welcome.css';

import { signUpWithGoogleRequest } from '../../redux/auth/auth-actions';

import * as ROUTES from '../../routes';

function Welcome() {
    const dispatch = useDispatch();

    function handleLoginWithGoogle(e) {
        e.preventDefault();
        dispatch(signUpWithGoogleRequest());
    }

    return (
        <main className="bg-texture bg-gray-900">
            <div className="mx-auto w-full flex-colum items-center justify-center py-8 px-8 sm:px-8 sm:py-12 md:py-10 lg:py-4 lg:px-8 lg:flex-column lg:items-center lg:justify-between">
                <h2 className="max-w-lg mx-auto text-3xl font-extrabold tracking-tight text-gray-50 sm:text-4xl md:text-center lg:text-center lg:py-16 lg:px-8">
                    
                    <span className="block">Ready to share in?</span>
                    <span className="block text-indigo-600">
                        Start your sharing today.
                    </span>
                </h2>
                <div className="mt-8 max-w-xs mx-auto flex-column lg:mt-0 lg:flex-shrink-0">
                    <div className="flex rounded-md w-full">
                        <button
                            className="btn btn-secundary w-full"
                            type="button"
                            onClick={handleLoginWithGoogle}
                        >
                            Login with Google
                        </button>
                    </div>
                    <div className="flex rounded-md w-full">
                        <NavLink
                            to={ROUTES.SIGN_UP}
                            className="btn btn-primary w-full"
                        >
                            Sign Up
                        </NavLink>
                    </div>
                    <div className="flex rounded-md w-full">
                        <NavLink
                            to={ROUTES.LOGIN}
                            className="btn btn-primary w-full"
                        >
                            Login
                        </NavLink>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Welcome;
