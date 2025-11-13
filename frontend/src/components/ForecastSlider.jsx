import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export default function ForecastSlider({ length = 0, value = 0, onChange = () => {} }) {
  const max = Math.max(0, length - 1)
  return (
    <div style={{ width: 300 }}>
      <div style={{ fontSize: 12, marginBottom: 6 }}>Forecast hour: {value}</div>
      <Slider min={0} max={max} value={value} onChange={onChange} />
    </div>
  )
}