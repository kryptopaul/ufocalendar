
import { MantineProvider } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme: 'dark', primaryColor: 'green'}} >
  
    <App />

  </MantineProvider>
);

