from datetime import datetime, timedelta
import random

def generate_station_points():
    # Sample points across Hong Kong with more realistic distribution
    coords = [
        (22.447, 114.160), (22.310, 114.170), (22.337, 114.176),
        (22.459, 114.077), (22.373, 114.125), (22.285, 114.158), (22.502, 114.128)
    ]
    points = []
    for lat, lon in coords:
        intensity = round(random.uniform(0, 120), 1)
        points.append({'lat': lat + random.uniform(-0.02, 0.02), 'lon': lon + random.uniform(-0.02, 0.02), 'intensity': intensity})
    return points

def current_district_data(district='Tai Po'):
    levels = ['Mild', 'Moderate', 'Severe']
    return {
        'district': district,
        'current_1hr': round(random.uniform(0, 120), 1),
        'trend': [round(random.uniform(0, 80), 1) for _ in range(7)],
        'alert_level': random.choice(levels)
    }

def forecast_frames(hours=6):
    frames = []
    now = datetime.utcnow()
    for h in range(hours):
        frames.append({
            'hour': h,
            'timestamp': (now + timedelta(hours=h)).isoformat(),
            'points': generate_station_points()
        })
    return frames