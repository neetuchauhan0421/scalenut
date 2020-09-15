import React, { FC, useState, useEffect, useCallback } from "react";
import { Card, Button } from "@material-ui/core";
import resources from "../../../resources/google.png";


function LoginComp() {

  // const handleGoogleLogin = useCallback(async () => {

   
    
  //   try {
  //     const response = await fetch(`https://9b4a111649e9.ngrok.io/auth/google`, { mode: 'no-cors'});
  //     const url = await response.text();
  //     console.log(url)
  //     window.location.assign(url);
  //   } catch (e) {
  //     console.error(e);
  //   }
    
  // }, []);

  return (
    <Card>
      <Button  style={{width:"23rem",backgroundColor:"#4385f5"}}
      variant="contained" color="primary" href={`https://1b302a83e5b9.ngrok.io/auth/google`}>
           <img src={resources}  style={{width:"1.5rem",marginLeft:"-8rem"}}/>
        Continue with Google
      </Button>
    </Card>
  );
};

export default LoginComp;