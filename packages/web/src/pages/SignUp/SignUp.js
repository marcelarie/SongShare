import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Redirect } from "react-router-dom"
import "./SignUp.scss"
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
        <>
            <main className="SignUp">
                <Header />
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
        </>
    )
}
export default SignUp
