import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import Chart from 'chart.js/auto';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);