import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


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

const ReviewOrder = ({ items }) => {
    const classes = useStyles();

    const getTotalPrice = () => {
        var tot = 0.00
        items.map(item => {
            tot += item.price * item.qty
            return null
        })
        return tot
    }

    return (
        <div>
            <Container width={"max-content"}>
                {items.map(item =>
                    <Card className={classes.root}>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    {item.name}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {item.qty}
                                </Typography>
                            </CardContent>
                            <div className={classes.controls}>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Rs.  {item.price}
                                </Typography>
                            </div>
                        </div>
                        <CardMedia
                            className={classes.cover}
                            image={item.image_path}
                            title="Live from space album cover"
                        />
                    </Card>
                )}
                <br />
                <Typography variant="h5" color="black" style={{ fontWeight: "bolder" }}>
                    Total Amount: Rs. {getTotalPrice()}
                </Typography>
            </Container>
        </div>
    )
}


export default ReviewOrder 