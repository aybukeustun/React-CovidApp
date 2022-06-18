import React from 'react';
import { Card,Typography, Grid, CardContent } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';


const Cards = ({ data: { confirmed, active, deaths, lastUpdate } }) => {
    

    return(
      
        <div className={styles.container}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item component={Card} xs={12} md={3} className ={cx(styles.card,styles.infected)}>
        <CardContent>
            <Typography color="textSecondary" gutterbottom="true">Confirmed</Typography>
            <Typography variant="h5">
            <CountUp start={0} end={confirmed} duration={2.5} separator=","></CountUp>
                </Typography>
                <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">Number of total confirmed of COVID-19</Typography>
        </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className ={cx(styles.card,styles.active)}>
        <CardContent>
            <Typography color="textSecondary" gutterbottom="true">Active</Typography>
            <Typography variant="h5">
                <CountUp start={0} end={active} duration={2.5} separator=","></CountUp>
                </Typography>
                <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">Number of active cases from COVID-19</Typography>
        </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className ={cx(styles.card,styles.deaths)}>
        <CardContent>
            <Typography color="textSecondary" gutterbottom="true">Deaths</Typography>
            <Typography variant="h5">
                <CountUp start={0} end={deaths} duration={2.5} separator=","></CountUp>
                </Typography>
                <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">Number of deaths caused by COVID-19 </Typography>
        </CardContent>
        </Grid>
      </Grid>

        </div>
    )

}

export default Cards;