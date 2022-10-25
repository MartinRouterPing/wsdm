import React from 'react'

function ReportWebsites(props) {
  let { data } = props
  let hasRecords = data && data.length > 0
  return (
    <table>
      {hasRecords && (
        <thead>
          <tr>
            <th colspan="2">Websites</th>
          </tr>
        </thead>
      )}
      <tbody>
        {data?.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.domain}</td>
            <td>{item.build_path}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ReportWebsites
