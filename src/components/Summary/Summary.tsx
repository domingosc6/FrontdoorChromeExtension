import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { useParams, useNavigate } from 'react-router-dom';
import ISummaryData from "../../types/Summary";

import APIService from "../../api/APIService";

export default function Summary() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [summaryId] = React.useState(id);
    const [summaryInfo, setSummaryInfo] = useState<ISummaryData>();
    
    React.useEffect(() => {
        async function fetchData() {
            try {
                APIService.get(summaryId).then(response => {
                    setSummaryInfo(response.data);
                });
            } catch (error){
                console.error(error);
                throw error;
            }
        }
        fetchData();
    }, [summaryId, navigate]);

    return (
        <Container>
            <Grid item xs={12} md={12} marginTop={2}>
                <CardActionArea component="a" href="#">
                    <Card sx={{ display: 'flex' }}>
                        <CardContent sx={{ flex: 1 }}>
                            <Typography variant="subtitle1" color="primary">
                                Summary: {summaryInfo!.newSummary.resumedText}
                            </Typography>
                        </CardContent>
                    </Card>
                </CardActionArea>
            </Grid>
            <Grid container spacing={2} marginTop={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" color="primary">
                        Prompt: {summaryInfo!.newSummary.prompt}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" color="primary">
                        Created: {summaryInfo!.newSummary.createdDate.toUTCString()}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
            );
}