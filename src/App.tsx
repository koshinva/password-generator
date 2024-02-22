import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import GeneratePassword from './components/GeneratePassword';
import { CssBaseline } from '@mui/material';
import PasswordProvider from './context/PasswordProvider';
import MyToaster from './components/MyToaster';

function App() {
  return (
    <PasswordProvider>
      <CssBaseline />
      <GeneratePassword />
      <MyToaster />
    </PasswordProvider>
  );
}

export default App;
