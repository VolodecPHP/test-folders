import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@picocss/pico';
import './assets/index.css';
import { CollapsedFoldersProvider } from './providers/CollapsedFoldersProvider.tsx';
import { UserProvider } from './providers/UserProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CollapsedFoldersProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </CollapsedFoldersProvider>
  </React.StrictMode>
);
