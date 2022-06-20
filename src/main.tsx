import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Players from './pages/Players/Players';
import LayoutEditor from './pages/LayoutEditor/LayoutEditor';
import Playlists from './pages/Playlists/Playlists';
import MediaLibrary from './pages/MediaLibrary/MediaLibrary';
import Calendar from './pages/Calendar/Calendar';
import Announcements from './pages/Announcements/Announcements';
import SocialMedia from './pages/SocialMedia/SocialMedia';
import { ThemeProvider } from '@mui/material/styles'
import {dashboardTheme} from './dashboardTheme'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={dashboardTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='players' element={<Players />} />
            <Route path='layoutEditor' element={<LayoutEditor />} />
            <Route path='playlists' element={<Playlists />} />
            <Route path='mediaLibrary' element={<MediaLibrary />} />
            <Route path='calendar' element={<Calendar />} />
            <Route path='announcements' element={<Announcements />} />
            <Route path='socialMedia' element={<SocialMedia />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
