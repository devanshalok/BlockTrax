import React from 'react'
import Button from '../../components/Button'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import SignMessage from '../SignMessage'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowY:'auto',
    maxWidth: "75%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxHeight: "75%",
    overflow: "scroll"
  }
}))
export default function AnimatedModal() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div style={{ backgroundColor: '#414141' }}>
      <Button style={{ float: 'right', marginBottom: '20px' }} variant="contained" color="" onClick={handleOpen}>
        Add Transaction
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
                    timeout: 500
                }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <SignMessage />
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
