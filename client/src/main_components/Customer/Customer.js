import React, { useState } from "react"
import { Container, Typography, Card } from "@material-ui/core"
import { getUserData } from "../../components/auth"
const CustomerDashboard = () => {
    const [userData] = useState(getUserData())

    return (
        <Container maxWidth="sm" style={{ padding: 40, display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
            <Card style={{ padding: 20, display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" style={{ padding: 10, fontWeight: "bolder" }} >
                    My Profile
            </Typography>
                <img src="https://img.icons8.com/color/96/000000/test-account.png" alt="propic" />
                <br />
                <Typography component="label">{userData.first_name}</Typography>
                <Typography component="label">{userData.last_name}</Typography>
                <Typography component="label">{userData.username}</Typography>
                <Typography component="label">{userData.email}</Typography>
                <Typography component="label">Registered on {userData.reg_date}</Typography>
            </Card>
        </Container >
    )
}
export default CustomerDashboard 