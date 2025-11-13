import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function App() {
  const rainfallChartRef = useRef(null);
  const tempChartRef = useRef(null);
  const humidityChartRef = useRef(null);
  const barChartRef = useRef(null);
  const windChartRef = useRef(null);

  useEffect(() => {
    // Rainfall Chart (Line)
    const rainfallCtx = rainfallChartRef.current.getContext('2d');
    const rainfallChart = new Chart(rainfallCtx, {
      type: 'line',
      data: {
        labels: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7'],
        datasets: [{
          label: 'Rainfall (mm)',
          data: [10, 20, 15, 30, 25, 40, 35],
          borderColor: '#39A9DB',
          backgroundColor: 'rgba(57, 169, 219, 0.7)',
          tension: 0.4
        }]
      },
      options: {
            scales: {
                y: { beginAtZero: true, min: 0, max: 100 }
            },
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        boxWidth: 20,            
                        padding: 8
                    }
                }
            },
            elements: {
                point: {
                pointStyle: 'circle',
                radius: 4,
                backgroundColor: '#39A9DB', // or match your dataset color
                }
            }
        }
    });

    // Temperature Chart (Line)
    const tempCtx = tempChartRef.current.getContext('2d');
    const tempChart = new Chart(tempCtx, {
      type: 'line',
      data: {
        labels: ['T1', 'T2', 'T3'],
        datasets: [{
          label: 'Temperature (°C)',
          data: [25, 28, 27],
          borderColor: '#EF476F',
          backgroundColor: 'rgba(239, 71, 111, 0.7)'
        }]
      },
        options: {
            scales: {
                y: { beginAtZero: true, min: 0, max: 100 }
            },
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        boxWidth: 20,            
                        padding: 8
                    }
                }
            },
            elements: {
                point: {
                pointStyle: 'circle',
                radius: 4,
                backgroundColor: '#EF476F', // or match your dataset color
                }
            }
        }
    });

    // Humidity Chart (Line)
    const humidityCtx = humidityChartRef.current.getContext('2d');
    const humidityChart = new Chart(humidityCtx, {
      type: 'line',
      data: {
        labels: ['H1', 'H2', 'H3'],
        datasets: [{
          label: 'Humidity (%)',
          data: [75, 77, 76],
          borderColor: '#169fcdff',
          backgroundColor: 'rgba(36, 160, 201, 0.79)'
        }]
      },
    options: {
        scales: {
            y: { beginAtZero: true, min: 0, max: 100 }
        },
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 20,            
                    padding: 8
                }
            }
        },
        elements: {
            point: {
            pointStyle: 'circle',
            radius: 4,
            backgroundColor: '#118AB2', // or match your dataset color
            }
        }
    }
});

    // Bar Chart (Placeholder)
    const barCtx = barChartRef.current.getContext('2d');
    const barChart = new Chart(barCtx, {
      type: 'line',
      data: {
        labels: ['B1', 'B2', 'B3'],
        datasets: [{
          label: 'Bar (kPa)',
          data: [102, 104, 103],
          borderColor: '#06D6A0',
          borderWidth: 1,
          backgroundColor: 'rgba(6, 214, 160, 0.7)'
        }]
      },
        options: {
            scales: {
                y: { beginAtZero: true, min: 0, max: 200 }
            },
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        boxWidth: 20,            
                        padding: 8
                    }
                }
            },
            elements: {
                point: {
                pointStyle: 'circle',
                radius: 4,
                backgroundColor: '#06D6A0', // or match your dataset color
                }
            }
        }
    });

    // Wind Chart (Line)
    const windCtx = windChartRef.current.getContext('2d');
    const windChart = new Chart(windCtx, {
      type: 'line',
      data: {
        labels: ['W1', 'W2', 'W3'],
        datasets: [{
          label: 'Wind Speed (km/h)',
          data: [4, 5, 4.5],
          borderColor: '#FFD166',
          backgroundColor: 'rgba(255, 209, 102, 0.7)'
        }]
      },
        options: {
            scales: {
                y: { beginAtZero: true, min: 0, max: 30 }
            },
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        boxWidth: 20,            
                        padding: 8
                    }
                }
            },
            elements: {
                point: {
                pointStyle: 'circle',
                radius: 4,
                backgroundColor: '#FFD166', // or match your dataset color
                }
            }
        }
    });

    // Cleanup charts on unmount
    return () => {
      rainfallChart.destroy();
      tempChart.destroy();
      humidityChart.destroy();
      barChart.destroy();
      windChart.destroy();
    };
  }, []);

  return (
    <div id="app" className="dashboard">
      <div className="sidebar">
        <button>🏠</button>
        <button>📊</button>
        <button>💰</button>
        <button>🔔</button>
      </div>
      <div className="map">Map Placeholder</div>
      <div className="rainfall">
        <h2>Tai Po</h2>
        <h1>84 mm/hr</h1>
        <span style={{ color: '#FF5F57' }}>Severe</span>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}></div>
        <canvas ref={rainfallChartRef} id="rainfallChart" style={{ width: '100%', height: '100px' }}></canvas>
      </div>
      <div className="weather-stats">
        <div style={{fontSize: '16px'}}>Temperature <span style={{ color: '#EF476F', fontWeight: 'bold', fontSize: '16px' }}>28°C</span></div>
        <canvas ref={tempChartRef} id="tempChart" style={{ width: '100%', height: '200px' }}></canvas>
        <div style={{fontSize: '16px'}}>Humidity <span style={{ color: '#118AB2', fontWeight: 'bold', fontSize: '16px'  }}>77%</span></div>
        <canvas ref={humidityChartRef} id="humidityChart" style={{ width: '100%', height: '200px' }}></canvas>
        <div style={{fontSize: '16px'}}>Bar <span style={{ color: '#06D6A0', fontWeight: 'bold', fontSize: '16px'  }}>104 kPa</span></div>
        <canvas ref={barChartRef} id="barChart" style={{ width: '100%', height: '200px' }}></canvas>
        <div style={{fontSize: '16px'}}>Wind Speed <span style={{ color: '#FFD166', fontWeight: 'bold', fontSize: '16px'  }}>5 km/h, WE</span></div>
        <canvas ref={windChartRef} id="windChart" style={{ width: '100%', height: '200px' }}></canvas>
      </div>
    </div>
  );
}

export default App;