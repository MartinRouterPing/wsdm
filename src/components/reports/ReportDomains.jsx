import React from 'react'

function ReportDomains(props) {
  let { data } = props
  let hasRecords = data && data.length > 0
  return (
    <table>
      {hasRecords && (
        <thead>
          <tr>
            <th colspan="2">Domains</th>
          </tr>
        </thead>
      )}
      <tbody>
        {data?.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.billingDate}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ReportDomains
