import React from 'react'
import 'typeface-roboto'
import Navbar from '../components/navbar'
import Login from '../components/Login'

const Frontpage = () => {
<<<<<<< HEAD
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <img src="./images/Laskutuslogo.png" alt="Ohjelman logo"></img>
            <div className={classes.loginInput}>
                <Typography variant="h3" color="primary">
                    Syötä kirjautumistietosi
                </Typography>
            </div>
            <div>
                <form className={classes.form}>
                    <div>
                        <TextField className={classes.loginTextField} variant="outlined" label="Käyttäjätunnus" />
                        <TextField className={classes.loginTextField} variant="outlined" label="Salasana" />
                        <Button variant="contained" color="primary">
                            Kirjaudu sisään
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
=======
      return (
            <>
                <Navbar />
                <Login />
            </>
      );
    }
>>>>>>> 8f7a4d9fbb08f64f46573f445ab0cbc61a7191ab

export default Frontpage