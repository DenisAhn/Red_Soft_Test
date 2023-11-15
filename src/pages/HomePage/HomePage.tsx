import * as React from 'react';
import { Card, CardContent, Typography, Grid, Container, CssBaseline } from '@mui/material';
import {CARD_DATA_MOCK} from "../MOCK/Cards.ts";
const HomePage: React.FC = () => {

    return (
        <React.Fragment>
            <CssBaseline>
                <Container sx={{marginTop: '24px'}} >
                    <Grid container spacing={6}>
                        {CARD_DATA_MOCK.map((card, id) => (
                            <Grid item key={id} xs={12} sm={6} md={4}>
                                <Card sx={{border: '1', borderColor: 'grey500'}}>
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {card.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {card.content}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </CssBaseline>
        </React.Fragment>
    );
};

export default HomePage;
