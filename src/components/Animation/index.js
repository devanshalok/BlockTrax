import React from 'react'
import Button from '../../components/Button'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import VerifyMessage from '../VerifyMessage'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowY:'auto'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}))
export default function AnimatedModal(props) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  console.log(props.checkboxData)
  return (
    <div style={{ backgroundColor: '#414141' }}>
      <Button variation="contained" color="primary" onClick={handleOpen}>
        Verify A Transaction
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{timeout: 500}}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <VerifyMessage checkboxData={props.checkboxData} />
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
