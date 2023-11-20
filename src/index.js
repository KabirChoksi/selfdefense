import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Reduce from './Comps/Reduce';
import Reuse from './Comps/Reuse';
import Recycle from './Comps/Recycle';
import Headers from './Comps/Header';
import Home from './Comps/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Headers/>}>
  <Route path="reduce" element={<Reduce/>}></Route>
  <Route path="reuse" element={<Reuse/>}></Route>
  <Route path="recycle" element={<Recycle/>}></Route>
  <Route index element={<Home/>}></Route>
  <Route path="*" element={<Navigate to="/"/>}></Route>
  </Route>
</Routes>
</BrowserRouter>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
