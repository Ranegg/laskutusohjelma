import React, { useState, useEffect } from 'react';
import 'typeface-roboto'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import { getUser } from '../service/UserDataService';
import { withRouter } from 'react-router-dom';

/**
 * Content of dashboard page
 */

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingLeft: theme.spacing(5),
      marginTop: theme.spacing(5),
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(10),
        padding: theme.spacing(2.5),
    },
    buttonMain: {
        color: 'primary',
        padding: theme.spacing(8),
        size: 'large',
        flexGrow: '1',
    },
    latestInvoice: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(10),
        marginLeft: theme.spacing(10),
        padding: theme.spacing(2.5),
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(10),
        marginRight: theme.spacing(10),
        padding: theme.spacing(2.5),
    },
    paperButton: {
        display: 'flex',
        justifyContent: 'center',
        color: 'primary',
        padding: theme.spacing(0),
        marginBottom: theme.spacing(5),
    },
    paperLatestInvoice: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
        justifyContent: 'felx-start',
        padding: theme.spacing(2.5),
    },
    paperUserInfo: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
        justifyContent: 'felx-start',
        padding: theme.spacing(2.5),
    },
    paperUserInfoHeader: {
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10)
    }
}));

const DashboardContent = (props) => {

    //Style
    const classes = useStyles();

    //States
    const [user, setUser] = useState([])

    //Get user data from database through API
    useEffect(() => {
        (async function fetchData() {
            await getUser().then(response => setUser(response.data))    
        })();  
      }, []);


    //return  
    return(
    <div className={classes.root}>
        <div className={classes.userInfo}>
            <Paper className={classes.paperUserInfo}>
                <Typography variant="h4" color="primary" className={classes.paperUserInfoHeader}>
                    Omat tiedot
                </Typography>
                <Typography variant="body1" color="primary" style={{paddingTop: '1em'}}>
                        <b>Yritys :</b> {user.nimi} <br />
                        <b>Nimi :</b> {user.username} <br />
                        <b>Sähköposti :</b> {user.sahkoposti} <br />
                        <b>Osoite :</b> {user.osoite} <br />
                        <b>Postitoimipaikka :</b> {user.postitoimipaikka} <br />
                        <b>Y-tunnus :</b> {user.ytunnus} <br />
                        <b>Tilinumero :</b> {user.tilinro}     
                </Typography>
            </Paper>
        </div>
        <div className={classes.buttonContainer}>       
            <Paper className={classes.paperButton} elevation={3}>
                <Button className={classes.buttonMain} component={Link} to ="/uusilasku">Uusi Lasku</Button>
            </Paper>
            <Paper className={classes.paperButton} elevation={3}>
                <Button className={classes.buttonMain} component={Link} to ="/asiakkaat">Asiakkaat</Button>
            </Paper>    
        </div>
        <div className={classes.buttonContainer}>
            <Paper className={classes.paperButton} elevation={3}>
                <Button className={classes.buttonMain} component={Link} to ="/arkisto">Arkisto</Button>
            </Paper>
            <Paper className={classes.paperButton} elevation={3}>
                <Button className={classes.buttonMain} component={Link} to ="/asetukset">Asetukset</Button>
            </Paper>
        </div>
        <div className={classes.latestInvoice}>
            <Paper className={classes.paperLatestInvoice}>
            <Typography variant="h4" color="primary">
                    Viimeisimmät laskut
                </Typography>
            </Paper>
        </div>
    </div>
    )    
}


export default withRouter(DashboardContent)