import React from 'react'
import { LineChart, Line, ResponsiveContainer } from 'recharts'

export default function SparklineChart({ data = [] }) {
  const chartData = data.map((value, index) => ({ day: index + 1, value }))
  return (
    <div style={{ height: 80, background: '#333', border: '1px solid #555', marginTop: 6, padding: 8 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <Line type="monotone" dataKey="value" stroke="#4caf50" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}