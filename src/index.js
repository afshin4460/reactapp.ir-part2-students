import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Wraper from './components/hoc/hoc';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Wraper>
    <App />
</Wraper>);
