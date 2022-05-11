import React from 'react'
import Box                  from '@mui/material/Box'
import Grid                 from '@mui/material/Grid'
import Paper                from '@mui/material/Paper'
import { styled }           from '@mui/material/styles'
import { Typography }       from '@material-ui/core'
import CardComponent        from '../../components/CardComponent'
import TableComponent       from '../../components/TableComponent'
import { Button } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
  marginBottom: theme.spacing(1)
}))

const HomeViewTypography = styled(Typography)(({ theme }) => ({
  color: '#f4f3ef',
  marginBottom: theme.spacing(1)
}))

const HomeView = () => {
    return (
      <div className="container">
        <HomeViewTypography variant="h6">
          NGO Dashboard
        </HomeViewTypography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container columnSpacing={14}>
            <Grid item xs={4}>
              <Item><CardComponent /></Item>
            </Grid>
            <Grid item xs={4}>
              <Item><CardComponent /></Item>
            </Grid>
            <Grid item xs={4}>
              <Item><CardComponent /></Item>
            </Grid>
          </Grid>
        </Box>
        <HomeViewTypography variant="subtitle1">
          Projects
        </HomeViewTypography>
        <TableComponent />
      </div>
    )
}

export default HomeView;
