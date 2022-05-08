import React                   from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import { styles }              from './styles.scss'

const CardComponent = () => {
  return (
    <div className={styles}>
      <Card sx={{ backgroundColor: '#1D2024' }}>
        <CardContent
          sx={{ paddingLeft: '0px', paddingRight: '0px', paddingTop: '0px' }}
        >
          <Typography
            component="div"
            variant="body1"
          >
            Total Projects
          </Typography>
          <Typography sx={{ padding: '8px', color: 'white' }} variant="h3">
            10
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default CardComponent
