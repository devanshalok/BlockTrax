import React, { Component, useState } from 'react'
import PropTypes            from 'prop-types'
import AppBar               from 'components/AppBar'
import { Typography }       from '@material-ui/core'
import Toolbar              from '@material-ui/core/Toolbar'
import IconButton           from '@material-ui/core/IconButton'
import Menu                 from '@material-ui/core/Menu'
import MenuItem             from '@material-ui/core/MenuItem'
import AccountCircle        from '@material-ui/icons/AccountCircle'
import { appConfig }        from 'configs/config-main'
import { useAuth } from "../../../../contexts/AuthContext";
import { styles }           from './styles.scss'

const Header = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { logout } = useAuth();
  const getMenu = () => {
    return (
      <div>
        <IconButton
          aria-haspopup="true"
          color="inherit"
          className="dropdown"
          aria-owns={anchorEl ? 'simple-menu' : null}
          onClick={handleClick}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={close}
        >
          <MenuItem data-link="account" onClick={goTo}>Account</MenuItem>
          <MenuItem data-link="logout" onClick={goTo}>Log out</MenuItem>
        </Menu>
      </div>
    )
  }

  const goTo = (evt) => {
    evt.preventDefault();
    logout();
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const close = () => {
    setAnchorEl(null);
  }
  const menu = getMenu();
  return (
    <div className={styles}>
      <AppBar>
        <Toolbar>
          <Typography variant="title" color="inherit">
            {appConfig.name}
          </Typography>
          <div className="dropdown">{menu}</div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {

}

export default Header
