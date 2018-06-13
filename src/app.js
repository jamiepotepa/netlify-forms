import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './routers/Approuter';

const App = () => (
    <div>
        <h1>React Starter right</h1>
    </div>
);

ReactDOM.render(<AppRouter />, document.getElementById('app'));