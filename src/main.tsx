import React from 'react'
import ReactDOM from 'react-dom'
import RootRoute from '@/route/index'
import '@/assets/style/common.scss'
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
           console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}
ReactDOM.render( <RootRoute />, document.getElementById('main') as HTMLElement)