import React from "react"
import ReactDOM from "react-dom"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDrawPolygon } from "@fortawesome/free-solid-svg-icons"
import Icon from "@material-ui/core/Icon"
// import { faGoogle } from '@material-ui/icons';
import "../../styles/Welcome.css"
import { authSelector } from "../../redux/auth/auth-selectors"

import { signUpWithGoogleRequest } from "../../redux/auth/auth-actions"

import * as ROUTES from "../../routes"

function Welcome() {
    const dispatch = useDispatch()

    function handleLoginWithGoogle(e) {
        e.preventDefault()
        dispatch(signUpWithGoogleRequest())
    }

    return (
        <main className="bg-texture">
            <div className="mx-auto w-full flex-colum items-center justify-center py-8 px-8 sm:px-8 sm:py-12 md:py-10 lg:py-4 lg:px-8 lg:flex-column lg:items-center lg:justify-between">
                <h2 className="max-w-lg mx-auto text-3xl font-extrabold tracking-tight text-gray-50 sm:text-4xl md:text-center lg:text-center lg:py-16 lg:px-8">
                    <FontAwesomeIcon
                        icon={faDrawPolygon}
                        className="mx-auto block text-indigo-600"
                    />
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
                            /* disabled={isSigningUp} */
                        >
                            {/* <FontAwesomeIcon icon={faGoogle} className="mx-auto block bg-gray-50" /> */}
                            {/* <Icon className="fab fa-google" /> */}
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
    )
}

export default Welcome
