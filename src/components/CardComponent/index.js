import React                   from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import { styles }              from './styles.scss'

const CardComponent = () => {
  return (
    <div className={styles}>
      <Card sx={{ minWidth: 100, backgroundColor: 'black' }}>
        <CardContent
          sx={{ paddingLeft: '0px', paddingRight: '0px', paddingTop: '0px' }}
        >
          <Typography
            variant="body1"
            component="div"
            sx={{
            paddingLeft: '5px',
            color: '#606166',
            padding: '8px',
            fontFamily: 'Roboto',
            fontWeight: '500'
          }}
          >
            Total Projects :
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
