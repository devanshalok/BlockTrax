import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@material-ui/core/Paper'
import SearchBar from 'material-ui-search-bar'
import { styled } from '@mui/material/styles'
import { styles } from './styles.scss'

const TableComponents = (props) => {
  const [rows, setRows] = useState([])
  const [filtRows, setFiltRows] = useState([])
  const [searched, setSearched] = useState('')
  const createData = (name, budget, spend, audited, id) => {
    return {
      name,
      budget,
      spend,
      audited,
      id
    }
  }
  let ogRows = [];
  useEffect(() => {
    for(let i=0; i<props.data.length; i++) {
      ogRows.push(createData(props.data[i].vendorname, props.data[i].transactiontype, props.data[i].description,props.data[i].amount, props.data[i].key));
    }
    setRows(ogRows);
    setFiltRows(ogRows);
  }, [props.data]);
  const requestSearch = (searchedVal) => {
    const filteredRows = rows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase())
    })
    setFiltRows(filteredRows);
  }
  const cancelSearch = () => {
    setSearched('')
    requestSearch(searched)
  }

  const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd)': {
      backgroundColor: '#737070'
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0
    }
  }))
  return (
    <div className={styles}>
      <SearchBar
        value={searched}
        onChange={searchVal => requestSearch(searchVal)}
        onCancelSearch={() => cancelSearch()}
        style={{ backgroundColor: '#212121', marginBottom: '10px' }}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {props.headers.map((ele, ind) => {
                return(<TableCell align="left">{ele}</TableCell>)
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {filtRows.map(row => {
              return(<StyledTableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() => {window.setTimeout(()=> window.location.href ='#/projects?projectId='+row.id, 300)}}
              >
                
                <TableCell style={{maxWidth:'100px'}}align="left">{row.name}</TableCell>
                <TableCell style={{maxWidth:'100px'}}align="left">{row.budget}</TableCell>
                <TableCell style={{maxWidth:'100px'}}align="left">{row.spend}</TableCell>
                <TableCell style={{maxWidth:'50px'}}align="left">{String(row.audited)}</TableCell>
                <TableCell style={{maxWidth:'150px', textOverflow: "ellipsis", whiteSpace: "wrap"}} align="left">{String(row.id)}</TableCell>
            
              </StyledTableRow>);
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
TableComponents.propTypes = {
  headers: PropTypes.array,
  data: PropTypes.array
}

TableComponents.defaultProps = {}
export default TableComponents
