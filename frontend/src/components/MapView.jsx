import React, { useEffect, useState, useRef } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import 'leaflet.heat'
import ForecastSlider from './ForecastSlider'

export default function MapView({ frames = [] }) {
  const [activeFrame, setActiveFrame] = useState(0)
  const [points, setPoints] = useState([])
  const mapRef = useRef()

  useEffect(() => {
    if (frames.length) setPoints(frames[activeFrame].points || [])
  }, [frames, activeFrame])

  useEffect(() => {
    if (mapRef.current && points.length) {
      const heatLayer = L.heatLayer(
        points.map(p => [p.lat, p.lon, p.intensity / 100]), // Normalize intensity for heatmap
        { radius: 25, blur: 15, maxZoom: 17 }
      ).addTo(mapRef.current)
      return () => mapRef.current.removeLayer(heatLayer)
    }
  }, [points])

  return (
    <>
      <MapContainer center={[22.4, 114.2]} zoom={10} style={{ height: '100%', width: '100%' }} ref={mapRef}>
        <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
      </MapContainer>
      <div className="controls">
        <ForecastSlider length={frames.length} value={activeFrame} onChange={setActiveFrame} />
      </div>
    </>
  )
}