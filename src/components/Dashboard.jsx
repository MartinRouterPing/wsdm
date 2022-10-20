import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import ReportWebsites from './reports/ReportWebsites'
import ReportServers from './reports/ReportServers'
import ReportDomains from './reports/ReportDomains'

function Dashboard() {
  const [data, setData] = useState([])
  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        console.log(response)
        return response.json()
      })
      .then(function (myJson) {
        console.log(myJson)

        setData(myJson)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="App">
      <Sidebar />
      <ReportWebsites data={data.websites} />
      <ReportServers data={data.servers} />
      <ReportDomains data={data.domains} />
    </div>
  )
}

export default Dashboard
