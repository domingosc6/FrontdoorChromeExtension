import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
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

    const goBack = () => {
		navigate(-1);
	}
    const GoBackButton = <Button
    type="submit"
    onClick={goBack}
    variant="contained"
    sx={{ mt: 3, mb: 2, ml: 1}}>Go Back</Button>

    return (
        <Container>
            {isBusy ? (
                <LoadingSpinner /> 
              ) : (
                <>
                    <Grid item marginTop={10}>
                        <CardActionArea component="a" href="#">
                            <Card sx={{ display: 'flex' }}>
                                <CardContent sx={{ flex: 1 }}>
                                    <Typography variant="subtitle1" color="primary">
                                        <b>Prompt:</b> {summaryInfo!.summary.prompt}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </CardActionArea>
                    </Grid>
                    <Grid item marginTop={2}>
                        <CardActionArea component="a" href="#">
                            <Card sx={{ display: 'flex' }}>
                                <CardContent sx={{ flex: 1 }}>
                                    <Typography variant="subtitle1" color="primary">
                                       <b>Summary:</b>  {summaryInfo!.summary.resumedText}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </CardActionArea>
                    </Grid>
                    <Grid container spacing={2} marginTop={2} marginBottom={2}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="subtitle1" color="white">
                                <b>Created:</b> {summaryInfo!.summary.createdDate}
                            </Typography>
                        </Grid>
                    </Grid>
                    {GoBackButton}
                </>
            )}
        </Container>
    );
}