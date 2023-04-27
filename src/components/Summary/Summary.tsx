import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { useParams, useNavigate } from 'react-router-dom';
import ISummaryData from "../../types/SummaryData";

import APIService from "../../api/APIService";
import LoadingSpinner from '../LoadingSpinner';

export default function Summary() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isBusy, setBusy] = useState(true);
    const [summaryInfo, setSummaryInfo] = useState<ISummaryData>();
    React.useEffect(() => {
        async function fetchData() {
            try {
                if (isBusy) {
                    await APIService.get(id).then(response => {
                        setSummaryInfo(response.data);
                    }).then(() => {    
                        setBusy(false);
                    });
                }
            } catch (error){
                console.error(error);
                throw error;
            }
        }
        fetchData();
    }, [navigate, isBusy]);

    return (
        <Container>
            {isBusy ? (
                <LoadingSpinner /> 
              ) : (
                <>
                    <Grid item xs={12} md={12} marginTop={2}>
                        <CardActionArea component="a" href="#">
                            <Card sx={{ display: 'flex' }}>
                                <CardContent sx={{ flex: 1 }}>
                                    <Typography variant="subtitle1" color="primary">
                                        Summary: {summaryInfo!.summary.resumedText}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </CardActionArea>
                    </Grid>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="subtitle1" color="primary">
                                Prompt: {summaryInfo!.summary.prompt}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="subtitle1" color="primary">
                                Created: {summaryInfo!.summary.createdDate}
                            </Typography>
                        </Grid>
                    </Grid>
                </>
            )}
        </Container>
    );
}