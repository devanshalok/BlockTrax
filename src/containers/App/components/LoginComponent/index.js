import React, { useState, useEffect } from 'react'
// import Image52 from "~/assets/image-5-2@2x.png";
// import Image42 from "~/assets/image-4-2@2x.png";
// import UndrawImage from "../../assets/undraw-in-thought-re-qyxl-1-2@2x.png";
import arrowUp from '../../../../assets/arrow-up.svg'
import logo1 from '../../../../assets/logo1.png'
import { TextField, Typography, Button, Grid } from '@mui/material'
import { useAuth } from '../../../../contexts/AuthContext'
import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import { withRouter } from 'react-router-dom'; 

const Alert = React.forwardRef((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const LoginComponent = ({ ...props }) => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [open, setOpen] = useState(false)
  const { currentUser } = useAuth()

  useEffect(() => {
    if (currentUser && !props?.location?.state?.errorMessage) { window.location.href = '/#/dashboard' }
  }, [])

  const { login } = useAuth()

  const errorMessage = props?.location?.state?.errorMessage

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
      .then(() => {
        if (props?.location?.state?.from.pathname) {
          window.location.href = props.location.state.from.pathname
          if (props?.location?.state?.errorMessage) props.location.state.errorMessage = undefined
        } else {
          window.location.href = '/#/dashboard'
        }
      })
      .catch((err) => {
        console.log(err)
        setOpen(true)
      })
  }

  return (
    <Grid
      container
      direction="row"
      style={{
        width: '100%',
        height: '100%',
        background: '#fff'
      }}
    >
      <Grid item md={4} lg={4} xl={4} />
      <Grid
        item
        container
        direction="column"
        xs={12}
        sm={12}
        md={4.5}
        lg={4.5}
        xl={4.5}
      >
        <Grid
          item
          md={2}
          lg={2}
          xl={2}
          style={{
          marginLeft: '30px',
          marginRight: 'auto'
        }}
        >
          <img
            src={logo1}
            style={{
              width: '395px',
              height: 'auto',
              cursor: 'pointer'
            }}
          />
        </Grid>
        <Snackbar
          open={errorMessage}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert severity="error" sx={{ width: '100%' }}>
            {errorMessage}
          </Alert>
        </Snackbar>
        <Grid item>
          <Typography
            style={{
              width: '116px',
              height: '45px',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '30px',
              color: '#000000',
              marginTop: '25px',
              marginLeft: '35px'
            }}
          >
            Log In
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid item>
            <TextField
              required
              type="email"
              autoComplete="email"
              placeholder="Email Address"
              value={email}
              style={{
                width: '395px',
                height: '67px',
                boxSizing: 'border-box',
                borderRadius: '5px',
                marginTop: '30px',
                marginLeft: '35px'
              }}
              error={!!open}
              onChange={e => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              style={{
                width: '395px',
                height: '67px',
                boxSizing: 'border-box',
                borderRadius: '5px',
                marginTop: '5px',
                marginLeft: '35px'
              }}
              onChange={e => setPassword(e.target.value)}
              error={!!open}
            />
          </Grid>
          <Grid item>
            <Button
              type="submit"
              style={{
                width: '395px',
                height: '68px',
                cursor: 'pointer',
                background: '#212121',
                borderRadius: '5px',
                color: '#ffffff',
                textTransform: 'none',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '18px',
                marginTop: '12px',
                marginLeft: '35px'
              }}
            >
              <img
                src={arrowUp}
                style={{
                  position: 'static',
                  width: '24px',
                  height: '24px',
                  flex: 'none',
                  order: 0,
                  flexGrow: 0,
                  margin: '0px 8px'
                }}
              />
              Log In
            </Button>
          </Grid>
        </form>
        <Stack sx={{ width: '100%' }}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: '100%' }}
            >
              Invalid Username/Password
            </Alert>
          </Snackbar>
        </Stack>
      </Grid>
      <Grid
        item
        sx={{
          display: {
            xs: 'none',
            sm: 'none',
            md: 'block',
            lg: 'block',
            xl: 'block'
          }
        }}
        md={6}
        lg={6}
        xl={6}
      />
    </Grid>
  )
}

export default withRouter(LoginComponent);
