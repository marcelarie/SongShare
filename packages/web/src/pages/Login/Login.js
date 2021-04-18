import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faDrawPolygon } from "@fortawesome/free-solid-svg-icons"
import "../../styles/Login.css"
import "../../styles/utils.css"

import Header from '../../components/Header';
import * as ROUTES from '../../routes';

import {
    resetAuthState,
    signInWithEmailRequest,
    signUpWithGoogleRequest,
} from '../../redux/auth/auth-actions';

import { authSelector } from '../../redux/auth/auth-selectors';

function Login() {
    const dispatch = useDispatch();
    const { isLogingIn, loginError, isAuthenticated } = useSelector(
        authSelector,
    );

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        dispatch(resetAuthState());
    }, [dispatch]);

    function handleLoginWithGoogle(e) {
        e.preventDefault();
        dispatch(signUpWithGoogleRequest());
    }

    function handleSubmit(e) {
        e.preventDefault();

        dispatch(signInWithEmailRequest(email, password));

        setEmail('');
        setPassword('');
    }

    function handleSetEmail(e) {
        setEmail(e.target.value);
    }

    function handleSetPassword(e) {
        setPassword(e.target.value);
    }

    if (isAuthenticated) {
        return <Redirect to={ROUTES.HOME_USER} />;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h2 className="flex-column items-center justify-between text-3xl font-extrabold tracking-tight sm:text-4xl">
                    {/* <FontAwesomeIcon
                        icon={faDrawPolygon}
                        className="mx-auto block text-indigo-600"
                    /> */}
                    <span className="mx-auto text-center block text-gray-50">
                        Sign in to your account
                    </span>
                </h2>
                <form
                    className="mt-8 space-y-6"
                    action="#"
                    method="POST"
                    onSubmit={handleSubmit}
                >
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                type="text"
                                id="email"
                                className="form-input"
                                autoComplete="email"
                                required
                                placeholder="Email address"
                                value={email}
                                onChange={handleSetEmail}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="form-input"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={handleSetPassword}
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember_me"
                                name="remember_me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember_me"
                                className="ml-2 block text-sm text-gray-100"
                            >
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <Link
                                to={ROUTES.RESET_PASSWORD}
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Reset password
                            </Link>
                        </div>
                    </div>
                    <div className="flex rounded-md w-full">
                        <button type="submit" className="group btn btn-primary">
                            {/* <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                        </span> */}
                            Sign in
                        </button>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                        <div className="text-sm">
                            <p className="text-sm ml-2 block text-sm text-gray-100">
                                You aren´t sharing yet?
                            </p>
                        </div>
                        <div className="text-sm">
                            <Link
                                to={ROUTES.SIGN_UP}
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Sign up
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
    {
        /* <main classNameName="Login">
                <section classNameName="Login__wrapper">
                    <h1 classNameName="text-2xl font-bold mb-6">Login</h1>
                    <hr classNameName="my-4" />
                    <button
                        classNameName="btn btn-primary w-full"
                        type="button"
                        onClick={handleLoginWithGoogle}
                        disabled={isLogingIn}
                    >
                        Login with Google
                    </button>
                    <hr classNameName="mt-1 mb-4" />
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email" classNameName="form-label">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            classNameName="form-input"
                            value={email}
                            onChange={handleSetEmail}
                        />
                        <label htmlFor="password" classNameName="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            classNameName="form-input"
                            value={password}
                            onChange={handleSetPassword}
                        />
                        <button
                            classNameName="btn btn-primary w-full"
                            type="submit"
                            disabled={isLogingIn}
                        >
                            Login
                        </button>
                    </form>
                    {signUpError && (
                        <section classNameName="mt-4">{signUpError}</section>
                    )}
                    <section classNameName="mt-4">
                        <hr classNameName="mt-1 mb-4" />
                        <Link
                            to={ROUTES.RESET_PASSWORD}
                            classNameName="underline text-blue-gray-200 w-full text-center block"
                        >
                            Reset password
                        </Link>
                    </section>
                </section>
            </main> */
    }
}

export default Login;
