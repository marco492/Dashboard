import React from 'react'

const color = level => level === 'Severe' ? '#b30000' : level === 'Moderate' ? '#ff9900' : '#2eb82e'

export default function AlertCard({ level = 'Mild' }) {
  return (
    <div style={{
      padding: 12,
      borderRadius: 8,
      background: color(level),
      color: '#fff',
      width: 320
    }}>
      <div style={{ fontWeight: 700 }}>Severity</div>
      <div style={{ fontSize: 20, marginTop: 6 }}>{level}</div>
    </div>
  )
}