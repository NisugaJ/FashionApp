import React, { useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ReviewOrder from './ReviewOrder';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useEffect } from 'react';




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        margin: "5px"
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

const ConfirmPayment = ({ orderItems }) => {
    const classes = useStyles();
    // const [paymentDetails] = useState(JSON.parse(sessionStorage.getItem("paymentDetails")))

    var ll = true;
    useEffect(() => {
        if (ll) {
            // var pay = JSON.parse(localStorage.getItem("paymentDetails"))
            // console.log(pay);
            ll = false
        }
    }, [])
    return (
        <div>
            <Grid container width={800}>
                <Grid item sm={12} xs={12}>
                    <ReviewOrder items={orderItems} />
                </Grid>
                <Grid item sm={12} xs={12}>
                    {/* <Card className={classes.root}>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    {paymentDetails.data.paymentMethod}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {paymentDetails.data.deleiveryDate}
                                </Typography>
                            </CardContent>
                            <div className={classes.controls}>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {paymentDetails.data.deliveryTime}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {paymentDetails.data.deliveryAddress}
                                </Typography>
                            </div>
                        </div>
                    </Card> */}
                </Grid>
            </Grid>
        </div >
    )
}
export default ConfirmPayment
