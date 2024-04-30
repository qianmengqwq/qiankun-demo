import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { start, registerMicroApps } from 'qiankun';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

// 1. 要加载的子应用列表
const apps = [
    {
        name: 'sub-react',
        entry: '//localhost:3001',
        activeRule: '/sub-react',
        container: '#sub-app'
    },
    {
        name: 'sub-vue',
        entry: '//localhost:3002',
        activeRule: '/sub-vue',
        container: '#sub-app'
    },
    {
        name: 'sub-angular',
        entry: '//localhost:3003',
        activeRule: '/sub-angular',
        container: '#sub-app'
    }
];

registerMicroApps(apps, {
    beforeLoad: [async app => console.log('before load', app.name)],
    beforeMount: [async app => console.log('before mount', app.name)],
    afterMount: [async app => console.log('after mount', app.name)]
});

start();
