import React from 'react';
import { Container } from '@material-ui/core';

const ReviewOrder = ({ items }) => {
    return (
        <div>
            <Container maxWidth={500}>
                {JSON.stringify(items)}

            </Container>
        </div>
    )
}


export default ReviewOrder 