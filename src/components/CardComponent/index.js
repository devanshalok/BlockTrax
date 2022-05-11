import React                   from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, Typography } from '@material-ui/core'
import { styles }              from './styles.scss'

const CardComponent = (props) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className={styles}>
      <Card sx={{ backgroundColor: '#1D2024'}}>
        <CardContent
          sx={{ paddingLeft: '0px', paddingRight: '0px', paddingTop: '0px' }}
        >
          <Typography
            component="div"
            variant="body1"
          >
            {props.title}
          </Typography>
          <Typography sx={{ mb: 1.5, size: '10px', color: '#505050'}} variant='caption'>
           {props.caption}
        </Typography>
          <Typography sx={{ padding: '8px', color: 'white' }} variant="h3">
            {numberWithCommas(props.data)}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

CardComponent.propTypes = {
  title: PropTypes.string,
  data: PropTypes.number,
  caption: PropTypes.string
}

export default CardComponent
