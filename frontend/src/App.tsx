import { useMemo, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { getCustomDarkTheme, getCustomLightTheme } from './utils/theme';
import { ThemeProvider } from '@mui/material';
import { ThemeModeContext } from './contexts';
import { Layout } from './components/Layout';
import { Home } from './components/Pages/Home';
import { Game } from './components/Pages/PlayGame';
import { About } from './components/Pages/About/about';
import SignIn from './components/Pages/User/SignIn/SignIn';
import { Register } from './components/Pages/User/SignIn/Register';
import { UpdateProfile } from './components/Pages/User/Settings/UpdateProfile';
import { Profile } from './components/Pages/User/MyProfile/Profile';
import { PublicProfiles } from './components/Pages/Social/PublicProfiles/PublicProfiles';
import { PublicProfile } from './components/Pages/Social/PublicProfiles/PublicProfile';
import { SignIn2FA } from './components/Pages/User/SignIn/SignIn2Fa';
import { GamePong } from './components/Pages/Game/pong'
import { Waiting } from './components/Pages/Game/Waiting';
import EnableTwoFactor from './components/Pages/User/Settings/EnableTwoFa';
import DisableTwoFactor from './components/Pages/User/Settings/DisableTwoFactor';
import TwoFactor from './components/Pages/User/Settings/TwoFactor';

function App() {
  const [mode, setMode] = useState(false); // Create a variable so we can define the mode on being either light or dark
  
  const themeMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((mode) => (mode ? false : true));
      },
    }),
    []
  );
  const theme = (mode ? getCustomDarkTheme() : getCustomLightTheme());

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/2fasignin" element={<SignIn2FA/>} />
            <Route path="/home" element={<Layout children={<Home/>} /> } />
            <Route path="/register" element={<Layout children={<Register/>} /> } />
            <Route path="/game" element={<Layout children={<Game/>} /> } />
            <Route path="/game/waiting" element={<Layout children={<Waiting/>} /> } />
            <Route path="/game/easy" element={<Layout children={<GamePong/>} /> } />
            <Route path="/game/medium:ID" element={<Layout children={<Home/>} /> } />
            <Route path="/game/hard:ID" element={<Layout children={<Home/>} /> } />
            <Route path="/game/spectate" element={<Layout children={<Home/>} /> } />  
            <Route path="/social/chat" element={<Layout children={<Home/>} /> } />
            <Route path="/social/publicprofiles" element={<Layout children={<PublicProfiles/>} /> } />
            <Route path="/social/publicprofile" element={<Layout children={<PublicProfile/>} /> } />
            <Route path="/user/profile" element={<Layout children={<Profile/>} /> } />
            <Route path="/user/updateprofile" element={<Layout children={<UpdateProfile/>} /> } />
            <Route path="/user/twofactor" element={<Layout children={<TwoFactor/>} /> } />
            <Route path="/user/enabletwofactor" element={<Layout children={<EnableTwoFactor/>} /> } />
            <Route path="/user/disabletwofactor" element={<Layout children={<DisableTwoFactor/>} /> } />
            <Route path="/about" element={<Layout children={<About/>} /> } />
          </Routes>
        </Router>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}

export default App;