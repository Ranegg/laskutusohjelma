import React from 'react'
import 'typeface-roboto'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import strings from "../LocalizedStrings"


const useStyles = makeStyles(theme => ({
    title: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    header1: {
        margin: '1%'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: '10%', 
        marginRight: '10%',
        marginTop: '2%'
    },
    TextField: {
        margin: '2%'
    },
})) 


const AboutContent = (props) => {

    // Style
    const classes = useStyles()

    return (
        <div>
            <div className={classes.title}>
                <Typography variant="h2" color="primary" className={classes.header1}>
                    {strings.about}
                </Typography>         
            </div>
        </div>
    ) 
}


export default AboutContent