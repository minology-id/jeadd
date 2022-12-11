import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {
  QueryClientProvider,
  QueryClient,
  QueryCache,
} from '@tanstack/react-query';
import reportWebVitals from './reportWebVitals';
import App from './App';

import 'bootstrap/dist/js/bootstrap.bundle';
import 'react-toastify/dist/ReactToastify.min.css';
import 'style/index.scss';

const queryCache = new QueryCache({
  onError: (error) => {
    console.log('Something went wrong');
  },
});

const qc = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      cacheTime: 0,
      staleTime: Infinity,
      retry: true,
    },
  },
  queryCache,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={qc}>
      <BrowserRouter>
        <ToastContainer position="top-center" />
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
