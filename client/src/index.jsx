import React from 'react';
import { createRoot } from 'react-dom/client';
import Login from './components/LamaDev/Login.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Login/>);