import React, { useState, useEffect } from "react"
import MaterialTable from "material-table"
import PureProgressSpinner from "../../../components/PureProgressSpinner"
import baseAxios from "../../../config/axios"
import alertify from 'alertifyjs';
import { getAccessToken } from "../../../components/auth";
const UserManager = () => {
    const [loaded, setLoaded] = useState(false)

    const [state, setState] = useState({
        columns: [
            { title: 'ID', field: 'id', editable: 'never', hidden: true },
            { title: 'First Name', field: 'first_name' },
            { title: 'Last Name', field: 'last_name' },
            { title: 'Active', field: 'status', type: 'boolean' },
            { title: 'Username', field: 'username', editable: 'onAdd' },
            { title: 'Email', field: 'email', editable: 'onAdd' },
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
                email: "",
                reg_date: "",
            }
        ]
    })

    useEffect(() => {
        baseAxios
            .get("/user/all", {
                headers: {
                    "Authorization": "Bearer " + getAccessToken()
                }
            })
            .then(response => {
                let data = []
                console.log(response.data)
                if (response.data) setLoaded(true)
                response.data.data.forEach(el => {
                    data.push({
                        id: el._id,
                        first_name: el.first_name,
                        last_name: el.last_name,
                        status: el.status,
                        username: el.username,
                        email: el.email,
                        reg_date: new Date(el.reg_date).toLocaleString(),
                    })
                })
                setEntries({ data: data })
            })
            .catch(function (error) {
                console.log(error)
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
                            console.log(newData);

                            baseAxios
                                .post("/sensors/create", newData)
                                .then(function (response) {
                                    console.log(response)
                                    if (response.data.data.fireSensorId) {
                                        newData.fireSensorId = response.data.data.fireSensorId
                                        alertify.success("Saved")
                                        setEntries(prevState => {
                                            const data = [...prevState.data]
                                            data.push(newData)
                                            return { ...prevState, data }
                                        })
                                    } else {
                                        alertify.error("Saved")

                                    }
                                })
                                .catch(function (error) {
                                    console.log(error)
                                })
                        }, 600)
                    }),


                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve()
                            baseAxios
                                .put("/sensors/update/" + oldData.fireSensorId, newData)
                                .then(function (response) {
                                    console.log(response)
                                    if (response.data.message === 'Sensor Updated') {
                                        newData.fireSensorId = oldData.fireSensorId
                                        alertify.success("Updated")

                                        setEntries(prevState => {
                                            const data = [...prevState.data]
                                            data[data.indexOf(oldData)] = newData
                                            return { ...prevState, data }
                                        })
                                    } else {
                                        alertify.error("Couldn't update")

                                    }
                                })
                                .catch(function (error) {
                                    console.log(error)
                                })
                        }, 600)
                    }),

                onRowDelete: (oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve()
                            //deleting from DB
                            // const data = [...entries.data]
                            // data.splice(data.indexOf(oldData), 1)
                            baseAxios
                                .post("sensors/delete_request", {
                                    "id": oldData.fireSensorId
                                })
                                .then(response => {
                                    if (response.data.message === "Updated Sensor") {
                                        alertify.success("Delete Request Sent")

                                        // setEntries({ ...entries, data })
                                        // setEntries(prevState => {
                                        //     const data = [...prevState.data]
                                        //     data.splice(data.indexOf(oldData), 1)
                                        //     return { ...prevState, data }
                                        // })
                                    } else {
                                        alertify.error("Couldn't Delete")
                                    }
                                })
                                .catch(error => {
                                    console.log(error)
                                })
                        }, 600)
                    })
            }}
        />
    )
}

export default UserManager