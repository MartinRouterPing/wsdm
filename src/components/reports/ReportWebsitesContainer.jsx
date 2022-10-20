import React from 'react'
import ReportWebsites from './ReportWebsites'
import { connect } from 'react-redux'

function ReportWebsitesContainer(props) {
  return <ReportWebsites />
}
const mapStateToProps = function (state) {
  return {
    counter: state.counter,
  }
}
export default connect(mapStateToProps)(ReportWebsitesContainer)
