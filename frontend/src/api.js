import axios from 'axios'
const base = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export const fetchDistrictData = async (district = 'Tai Po') => {
  try {
    const { data } = await axios.get(`${base}/api/rainfall?district=${district}`)
    return data
  } catch (err) {
    console.error('API error:', err)
    return null
  }
}

export const fetchForecastFrames = async () => {
  try {
    const { data } = await axios.get(`${base}/api/forecast_frames`)
    return data
  } catch (err) {
    console.error('API error:', err)
    return []
  }
}

export const connectWebSocket = (onUpdate) => {
  const ws = new WebSocket(`ws://${base.replace(/^https?:\/\//, '')}/ws/updates`)
  ws.onmessage = (event) => onUpdate(JSON.parse(event.data))
  ws.onclose = () => console.log('WebSocket closed')
  return ws
}