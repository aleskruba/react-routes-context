import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import { AuthProvider} from './components/hooks/Context';




const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
 
  <BrowserRouter>
    <AuthProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
       </AuthProvider>    
  </BrowserRouter>
  
);

