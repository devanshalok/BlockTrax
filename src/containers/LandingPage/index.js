import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Typography } from "@material-ui/core";
import Button from "../../components/Button";
import landing from "./landing.svg"
import content from "./content.svg"
import logo from "./logo.png"
import ornament from "./ornament.png"

const styles = {
    boxContainer: {
        backgroundImage: `url(${ornament})`
    }
};

const LandingPage = () => {
  return (
    <Box style={styles.boxContainer}>
      <Grid container columnSpacing={12} style={{ backgroundColor: "#000000" }}>
        <Grid item xs={8} direction="row"
  justifyContent="center"
  alignItems="center">
          <img src={logo} style={{width: '40px', height: 'auto', verticalAlign: 'middle', border: '1px solid green', borderRadius: '50%', padding: '2px'}}/>
          <Typography
            variant="subtitle1"
            style={{
              fontWeight: "400",
              fontSize: "23px",
              lineHeight: "100%",
              textAlign: "left",
              color: "#f4f3ef",
              paddingTop: "20px",
              paddingLeft: "20px",
              display: 'inline-flex'
            }}
          >
            Blocktrax
          </Typography>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "right", padding: "10px" }}>
          <Button
            style={{
              padding: "12px 32px",
              background: "#FFFFFF",
              borderRadius: "40px",
            }}
            onClick={() => {window.setTimeout(()=> window.location.href ='#/login', 300)}}
            >
            Login
          </Button>
        </Grid>
      </Grid>
      <Grid container columnSpacing={12} style={{ backgroundColor: "#000000" }}>
        <Grid item xs={3}></Grid>  
        <Grid item xs={6}>
          <img src={landing} style={{
              width: "700px",
              height: "auto",
              cursor: "pointer",
              marginTop: "25px",
              marginLeft: 'auto',
              marginRight: 'auto'
            }}/>
        </Grid>
        <Grid item xs={3}></Grid>  
      </Grid>
      <Grid container columnSpacing={12} style={{ backgroundColor: "#000000" }}>
      <Grid item xs={3.5}></Grid>  
        <Grid item xs={6}>
          <img src={content} style={{
              width: "600px",
              height: "auto",
              marginTop: "75px",
              marginBottom: "100px",
              marginLeft: 'auto',
              marginRight: 'auto'
            }}/>
        </Grid>
        <Grid item xs={3.5}></Grid>
      </Grid>
    </Box>
  );
};

export default LandingPage;
