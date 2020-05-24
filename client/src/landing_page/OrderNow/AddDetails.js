import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { MenuItem, InputLabel, Select, FormControl, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const AddDetails = () => {
    const classes = useStyles();
    const [paymentDetails, setPaymentDetails] = useState({
        data: {
            paymentMethod: '',
            deleiveryDate: '',
            deliveryTime: '',
            deliveryAddress: '',
        }
    })

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Payment Method</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={e => {
                            setPaymentDetails({ data: { ...paymentDetails.data, paymentMethod: e.target.value } })
                        }}
                        value={paymentDetails.data.paymentMethod}
                    >
                        <MenuItem value={"Cash on Delivery"}>Cash on Delivery</MenuItem>
                        <MenuItem value={"Online Card Payment"}>Online Card Payment</MenuItem>
                    </Select>
                </FormControl>
                <TextField id="standard-basic"
                    label="Date"
                    type="date"
                    defaultValue={new Date().toISOString}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={e => {
                        setPaymentDetails({ data: { ...paymentDetails.data, deleiveryDate: e.target.value } })
                    }}
                    value={paymentDetails.data.deleiveryDate}
                />
                <TextField id="standard-basic"
                    label="Time"
                    type="time"
                    defaultValue={new Date().toLocaleTimeString()}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={e => {
                        setPaymentDetails({ data: { ...paymentDetails.data, deliveryTime: e.target.value } })
                    }}
                    value={paymentDetails.data.deliveryTime}
                />
                <TextField id="standard-basic"
                    label="Delivery Address"
                    type="textfield"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    fullWidth
                    onChange={e => {
                        setPaymentDetails({ data: { ...paymentDetails.data, deliveryAddress: e.target.value } })
                    }}
                    value={paymentDetails.data.deliveryAddress}
                />
            </form>
            <Button color="primary" onClick={() => {

                if (paymentDetails.data.paymentMethod === '' ||
                    paymentDetails.data.deleiveryDate === '' ||
                    paymentDetails.data.deliveryTime === '' ||
                    paymentDetails.data.deliveryAddress === ''
                ) {
                    alert('All the fields must be filled')
                } else {
                    localStorage.setItem("paymentDetails", paymentDetails.data)
                    alert('Saved')
                }
            }}>
                Save
            </Button>
        </div >
    )
}

export default AddDetails