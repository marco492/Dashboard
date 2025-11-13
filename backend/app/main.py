import logging
from fastapi import FastAPI, WebSocket, Query
from fastapi.middleware.cors import CORSMiddleware
from app.sample_data import current_district_data, forecast_frames
import asyncio

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Rainfall Dashboard API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/rainfall")
async def get_rainfall(district: str = Query("Tai Po")):
    logger.info(f"Fetching data for {district}")
    return current_district_data(district)

@app.get("/api/forecast_frames")
async def get_forecast_frames():
    return forecast_frames(6)

@app.websocket("/ws/updates")
async def websocket_updates(ws: WebSocket):
    await ws.accept()
    try:
        while True:
            payload = {"type": "update", "frames": forecast_frames(6)}
            await ws.send_json(payload)
            await asyncio.sleep(5)
    except Exception as e:
        logger.error(f"WebSocket error: {e}")
    finally:
        await ws.close()