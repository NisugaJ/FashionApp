import React, { useState, useEffect } from "react"
import MaterialTable from "material-table"
import PureProgressSpinner from "../../../components/PureProgressSpinner"
import baseAxios from "../../../config/axios"
const Swal = require('sweetalert2');

const UserManager = () => {
    const [loaded, setLoaded] = useState(false)

    const [state] = useState({
        columns: [
            { title: 'ID', field: 'id', editable: 'never', hidden: true },
            { title: 'First Name', field: 'first_name' },
            { title: 'Last Name', field: 'last_name' },
            {
                title: 'Active', field: 'status',
                lookup: { 1: "Active", 2: "Inactive", 3: "Deleted" }
            },
            { title: 'Username', field: 'username', editable: 'onAdd' },
            { title: 'Password', field: 'password' },
            { title: 'Email', field: 'email' },
            { title: 'Registered On', field: 'reg_date', editable: 'never' },
        ]
    })

    const [entries, setEntries] = useState({
        data: [
            {
                id: "",
                first_name: "",
                last_name: "",
                status: false,
                username: "",
                password: "",
                email: "",
                reg_date: "",
            }
        ]
    })

    useEffect(() => {
        baseAxios
            .get("/user/all")
            .then(response => {
                let data = []
                if (response.data) setLoaded(true)
                response.data.data.forEach(el => {
                    data.push({
                        id: el._id,
                        first_name: el.first_name,
                        last_name: el.last_name,
                        status: el.status,
                        username: el.username,
                        password: el.password,
                        email: el.email,
                        reg_date: new Date(el.reg_date).toLocaleString(),
                    })
                })
                setEntries({ data: data })
            })
            .catch(function (error) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Failed to load user data',
                    showConfirmButton: false,
                })
            })
    }, [])

    if (!loaded) return <PureProgressSpinner message="Loading Customers...." />

    return (
        <MaterialTable
            searchable
            title="Customers"
            columns={state.columns}
            data={entries.data}
            options={{
                addRowPosition: "first",
            }}

            editable={{
                onRowAdd: (newData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();

                            baseAxios
                                .post("user/create", newData)
                                .then(function (response) {
                                    console.log(response)
                                    if (response.data.success) {
                                        newData.id = response.data.data._id
                                        Swal.fire({
                                            position: 'center',
                                            icon: 'success',
                                            title: 'User Added Successfully',
                                            showConfirmButton: false,
                                        })
                                        setEntries(prevState => {
                                            const data = [...prevState.data]
                                            data.push(newData)
                                            return { ...prevState, data }
                                        })
                                    } else {
                                        Swal.fire({
                                            position: 'center',
                                            icon: 'error',
                                            title: 'Failed when adding user',
                                            showConfirmButton: false,
                                        })
                                    }
                                })
                                .catch(function (error) {
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'error',
                                        title: 'Failed when adding user',
                                        showConfirmButton: false,
                                    })
                                })
                        }, 600)
                    }),


                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve()
                            baseAxios
                                .post("user/update/" + oldData.id, newData)
                                .then(function (response) {
                                    if (response.data.success) {
                                        newData.id = oldData.id

                                        setEntries(prevState => {
                                            const data = [...prevState.data]
                                            data[data.indexOf(oldData)] = newData
                                            return { ...prevState, data }
                                        })
                                        Swal.fire({
                                            position: 'center',
                                            icon: 'success',
                                            title: 'Updated Successfully',
                                            showConfirmButton: false,

                                        })
                                    } else {
                                        Swal.fire({
                                            position: 'center',
                                            icon: 'error',
                                            title: 'Updated Failed',
                                            showConfirmButton: false,

                                        })
                                    }
                                })
                                .catch(function (error) {
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'error',
                                        title: 'Failed when updating user',
                                        showConfirmButton: false,
                                    })
                                })
                        }, 600)
                    }),

                onRowDelete: (oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve()
                            // deleting from DB
                            const data = [...entries.data]
                            baseAxios
                                .post("user/delete", {
                                    "id": oldData.id
                                })
                                .then(response => {
                                    if (response.status === 204) {
                                        Swal.fire({
                                            position: 'center',
                                            icon: 'success',
                                            title: 'Delete Successfully',
                                            showConfirmButton: false,

                                        })
                                        setEntries({ ...entries, data })
                                        setEntries(prevState => {
                                            const data = [...prevState.data]
                                            data.splice(data.indexOf(oldData), 1)
                                            return { ...prevState, data }
                                        })
                                    } else {
                                        Swal.fire({
                                            position: 'center',
                                            icon: 'error',
                                            title: 'Deletion Failed',
                                            showConfirmButton: false,
                                        })
                                    }
                                })
                                .catch(error => {
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'error',
                                        title: 'Deletion Failed',
                                        showConfirmButton: false,
                                    })
                                })
                        }, 600)
                    })
            }}
        />
    )
}

export default UserManager