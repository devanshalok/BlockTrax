import React, { Component } from 'react'
import Box                  from '@mui/material/Box'
import Grid                 from '@mui/material/Grid'
import Paper                from '@mui/material/Paper'
import { styled }           from '@mui/material/styles'
import { Typography }       from '@material-ui/core'
import Button from '../../components/Button'
import TableComponent       from '../../components/TableComponent'
import AnimatedModal from '../../components/AnimatedModal'

const Item = styled(Paper)(({ theme }) => ({
  marginBottom: theme.spacing(1)
}))

const HomeViewTypography = styled(Typography)(({ theme }) => ({
  color: '#f4f3ef',
  marginBottom: theme.spacing(1)
}))


class ProjectAuditor extends Component {
  render() {
    return (
      <div className="container">
        <HomeViewTypography variant="h6">
          --Project name--
        </HomeViewTypography>

        <TableComponent />
        <Button style={{ marginTop: '30px', marginLeft: '600px' }}>SUBMIT AUDIT REPORT!</Button>
      </div>
    )
  }
}

export default ProjectAuditor
