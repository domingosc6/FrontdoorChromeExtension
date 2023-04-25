import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Link, useNavigate } from 'react-router-dom'
import ISummaryData from "../../types/Summary";

import APIService from "../../api/APIService";

export default function SummaryList() {
    const [summaries, setSummaries] = useState<ISummaryData[]>();
    const navigate = useNavigate();
    React.useEffect(() => {
        async function fetchData() {
            try {
                APIService.getAll().then(response => {
                    console.log(response);
                    setSummaries(response.data);
                });

            } catch (error) {
                console.error(error);
                throw error;
            }
        }
        fetchData();
    }, [navigate]);
    return (
        <Container>
            <Grid container spacing={2} marginTop={2}>
                    {summaries!.map((summary) => {
                        return <Grid item xs={12} md={4} key={summary.newSummary._id}>
                            <CardActionArea component="a" href="#">
                                <Card sx={{ display: 'flex' }}>
                                    <CardContent sx={{ flex: 1 }}>
                                        <Typography component="h2" variant="h5">
                                            <Link to={`/summary/${summary.newSummary._id}`} style={{ textDecoration: "none", color: "black" }}>{summary.newSummary.prompt}</Link>
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary">
                                            {summary.newSummary.createdDate.toUTCString()}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </CardActionArea>
                        </Grid>
                    })}
            </Grid>
        </Container >
    );
}