import React from "react"
import { useSelector } from "react-redux"

import "./Home.scss"
import Header from "../../components/Header"
import Welcome from "../../components/Welcome"
import { authSelector } from "../../redux/auth/auth-selectors"

function Home() {
    const { isAuthenticated, currentUser } = useSelector(authSelector)

    return (
        <main className="p-4">
            <section className="p-4">
                {isAuthenticated ? (
                    <>
                        <Header />
                        <h1 className="text-xl">Hello {currentUser.email}</h1>
                    </>
                ) : (
                    <Welcome />
                )}
            </section>
        </main>
    )
}

export default Home
