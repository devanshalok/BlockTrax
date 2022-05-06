import React, { Component } from 'react'
import CardComponent from '../../components/CardComponent'
import TableComponent from '../../components/TableComponent'

class HomeView extends Component {
  render() {
    return (
      <div className="container">
        <CardComponent />
        <TableComponent />
      </div>
    )
  }
}

export default HomeView
