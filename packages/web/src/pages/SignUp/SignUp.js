import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Redirect } from "react-router-dom"
import "./SignUp.scss"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faDrawPolygon } from "@fortawesome/free-solid-svg-icons"
import Header from "../../components/Header"
import * as ROUTES from "../../routes"
import {
    resetAuthState,
    signUpWithEmailRequest,
    signUpWithGoogleRequest,
} from "../../redux/auth/auth-actions"
import { authSelector } from "../../redux/auth/auth-selectors"

function SignUp() {
    const dispatch = useDispatch()
    const { isSigningUp, signUpError, isAuthenticated } = useSelector(
        authSelector,
    )
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [username, setUsername] = useState("")

    useEffect(() => {
        dispatch(resetAuthState())
    }, [dispatch])

    function handleLoginWithGoogle(e) {
        e.preventDefault()
        dispatch(signUpWithGoogleRequest())
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(
            signUpWithEmailRequest({
                name,
                lastname,
                email,
                username,
                password,
            }),
        )

        setEmail("")
        setPassword("")
        setName("")
        setLastname("")
        setUsername("")
    }

    if (isAuthenticated) {
        return <Redirect to={ROUTES.HOME} />
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
                        Create your account
                    </span>
                </h2>
                <form
                    className="mt-8 space-y-6"
                    action="#"
                    method="POST"
                    onSubmit={handleSubmit}
                >
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="Name" className="sr-only">
                                First name
                            </label>
                            <input
                                type="text"
                                id="Name"
                                className="form-input"
                                required
                                placeholder="First name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="Name" className="sr-only">
                                Last name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                className="form-input"
                                required
                                placeholder="Last name"
                                value={lastname}
                                onChange={e => setLastname(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="Name" className="sr-only">
                                User name
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="form-input"
                                required
                                placeholder="User name"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </div>
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
                                onChange={e => setEmail(e.target.value)}
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
                                required
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
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
                                Are you already sharing?
                            </p>
                        </div>
                        <div className="text-sm">
                            <Link
                                to={ROUTES.LOGIN}
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Log in
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
    {
        /* <>
            <main className="SignUp">
                <section className="Login__wrapper">
                    <h1 className="text-2xl font-bold mb-6">SignUp</h1>
                    <hr className="my-4" />
                    <button
                        className="btn btn-primary w-full"
                        type="button"
                        onClick={handleLoginWithGoogle}
                        disabled={isSigningUp}
                    >
                        SignUp with Google
                    </button>
                    <hr className="mt-1 mb-4" />
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="form-input"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <label htmlFor="lastname" className="form-label">
                            Last name
                        </label>
                        <input
                            type="text"
                            id="lastname"
                            className="form-input"
                            value={lastname}
                            onChange={e => setLastname(e.target.value)}
                        />
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="form-input"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label htmlFor="username" className="form-label">
                            User name
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="form-input"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="form-input"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button
                            className="btn btn-primary w-full"
                            type="submit"
                            disabled={isSigningUp}
                        >
                            Sign Up
                        </button>
                    </form>
                    {signUpError && (
                        <section className="mt-4">{signUpError}</section>
                    )}
                    <section className="mt-4">
                        <hr className="mt-1 mb-4" />
                        <Link
                            to={ROUTES.RESET_PASSWORD}
                            className="underline text-blue-gray-200 w-full text-center block"
                        >
                            Reset password
                        </Link>
                    </section>
                </section>
            </main>
        </> */
    }
}
export default SignUp
