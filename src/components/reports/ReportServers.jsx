import React from 'react'

function ReportServers(props) {
  let { data } = props
  let hasRecords = data && data.length > 0
  return (
    <table>
      {hasRecords && (
        <thead>
          <tr>
            <th colspan="2">Servers</th>
          </tr>
        </thead>
      )}
      <tbody>
        {data?.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.ip}</td>
            <td>{item.billingDate}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ReportServers
