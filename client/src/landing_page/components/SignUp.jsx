import React, { useState, useEffect } from "react"
import baseAxios from "../../config/axios";

const sweetAlert = require("sweetalert2")
const initUserData = {
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    email: "",
}

export const RegistrationPage = () => {
    const [user, setUser] = useState({
        data: initUserData
    })

    useEffect(() => {
        console.log(user.data);
    }, [user]);

    const onSubmit = (e) => {
        e.preventDefault();

        baseAxios.post("user/create", user.data)
            .then((response) => {
                if (response.ok) {
                    console.log("Submitted")
                    setUser({ data: initUserData })
                    sweetAlert.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Registered Successfully',
                    })
                    window.location.pathname = "/dashboard"
                }

            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <header
            id="signup"
        >
            <div id="signup-content">
                <div className="container">
                    <form
                        method="POST"
                        onSubmit={event => onSubmit(event)}
                    >
                        <input
                            placeholder="First Name"
                            name="firstName"
                            type="text"
                            value={user.data.first_name}
                            onChange={e => {

                                setUser({ data: { ...user.data, first_name: e.target.value } })
                            }}
                        />
                        <input
                            placeholder="Last Name"
                            name="lastName"
                            type="text"
                            value={user.data.last_name}
                            onChange={e => {
                                setUser({ data: { ...user.data, last_name: e.target.value } })
                            }}
                        />
                        <input
                            placeholder="Username"
                            name="username"
                            type="text"
                            value={user.data.username}
                            onChange={e => {
                                setUser({ data: { ...user.data, username: e.target.value } })
                            }} />
                        <input
                            placeholder="Password"
                            name="password"
                            type="text"
                            value={user.data.password}
                            onChange={e => {
                                setUser({ data: { ...user.data, password: e.target.value } })
                            }} />
                        <input
                            placeholder="Email"
                            name="email"
                            type="email"
                            value={user.data.email}
                            onChange={e => {
                                setUser({ data: { ...user.data, email: e.target.value } })
                            }} />
                        <input type="submit" value="send" />
                    </form>
                </div>
            </div>
        </header>
    )
}