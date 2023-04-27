import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { BrowserRouter as Router, Link, Route, Routes, useNavigate } from 'react-router-dom';
import ISummaryDataList from "../../types/SummaryDataList";

import APIService from "../../api/APIService";
import LoadingSpinner from '../LoadingSpinner';

export default function SummaryList() {
    const [isBusy, setBusy] = useState(true);
    const [summaries, setSummaries] = useState<ISummaryDataList>({allSummaries: [] });
    const navigate = useNavigate();
    
    React.useEffect(() => {     
        const fetchData = async () => {
            try {
                if (isBusy) {
                    await APIService.getAll().then(response => {
                        setSummaries(response.data);
                    }).then(() => {            
                        setBusy(false);
                    });
                }
            } catch (error) {
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
                <Grid container spacing={2} marginTop={2}>
                        {summaries.allSummaries.map((summary, index) => {
                            return <Grid item xs={12} md={4} key={index}>
                                <CardActionArea component="a" href="#">
                                    <Card sx={{ display: 'flex' }}>
                                        <CardContent sx={{ flex: 1 }}>
                                            <Typography component="h5">
                                                <nav>
                                                    <Link to={`/summary/${summary._id}`} style={{ textDecoration: "none", color: "black" }}>{summary.prompt.substring(0, 30) + '...'}</Link>
                                                </nav>
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary">
                                                {summary.createdDate}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </CardActionArea>
                            </Grid>
                        })}
                </Grid>
            )}
        </Container >
    );
}