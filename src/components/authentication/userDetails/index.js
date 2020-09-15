import React, { useState } from 'react'
import { makeStyles, withStyles } from "@material-ui/core/styles"
import CardContent from '@material-ui/core/CardContent';

import {
    Button,
    Typography,
    Box,
    Grid,
    TextField
} from "@material-ui/core";
import Card from '@material-ui/core/Card';

// import SendIcon from "@material-ui/icons/Send"
// import Navbar from "./Navbar";
const styles = (theme) => ({
});

const useStyles = makeStyles(theme => ({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        position: "absolute"
    },
    button: {
        marginTop: "1rem",
      


    }


}))



const InputField = withStyles({
  
})(TextField);

const Contacts = () => {

    // const classes = makeStyles()
    const classes = withStyles()
    return (
        <Card style={{ boxShadow: 'none' }}>
          <CardContent>

            <Grid container justify="center">
                <Box component="form"  style={{marginTop:"7rem"}} className={classes.form}>
                    <Typography variant="h5" style={{
                        textAlign: "center",
                    }}>
Complete your free account signup
    </Typography>
                    <InputField
                        fullWidth={true}
                        label="Name"
                        variant="outlined"
                        inputProps={{ style: { color: "white" } }}
                        margin="dense"
                        size="medium"
                    />
                    <br />
                    <InputField fullWidth={true}
                        label="Contact Number"
                        variant="outlined"
                        inputProps={{ style: { color: "white" } }}
                        margin="dense"
                        size="medium"
                    />
                    <br />
                    <InputField fullWidth={true}
                        label="Company"
                        variant="outlined"
                        inputProps={{ style: { color: "white" } }}
                        margin="dense"
                        size="medium"
                    />
                    <br />
                    <Button className={classes.button} variant="outlined"
                    style={{marginBottom:"-5rem",marginLeft:"8rem"}}
                        // endIcon={<SendIcon />}
                    >
                       Sign Up
                    </Button>
                </Box>
            </Grid>
            <Typography style={{marginLeft:"30rem",marginTop:"4rem"}}>
                Have an account,login instead
            </Typography>
            </CardContent>

        </Card>
    )
                }
export default  withStyles(styles) (Contacts);