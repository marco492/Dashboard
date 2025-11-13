import React from 'react'
import AlertCard from './AlertCard'
import SparklineChart from './SparklineChart'

export default function RightPanel({ district = 'Tai Po', data, onChangeDistrict }) {
  const sampleDistricts = ['Tai Po', 'Yuen Long', 'Kowloon City', 'Central']
  return (
    <div>
      <div style={{ marginBottom: 8 }}>Select district</div>
      <select value={district} onChange={e => onChangeDistrict(e.target.value)} style={{ background: '#333', color: '#ddd', border: '1px solid #555' }}>
        {sampleDistricts.map(d => <option key={d} value={d}>{d}</option>)}
      </select>

      <div style={{ marginTop: 12 }}>
        <div style={{ fontWeight: 700 }}>District Overview</div>
        <div style={{ marginTop: 8 }}>
          <div><strong>District</strong> {district}</div>
          <div><strong>Current 1-hr</strong> {data?.current_1hr ?? '—'} mm</div>
          <div><strong>7-day trend</strong></div>
          <SparklineChart data={data?.trend ?? []} />
        </div>
        <div style={{ marginTop: 12 }}>
          <div style={{ fontWeight: 700 }}>Alerts</div>
          <div style={{ marginTop: 8 }}>
            <AlertCard level={data?.alert_level ?? 'Mild'} />
          </div>
        </div>
      </div>
    </div>
  )
}