import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BurstModeOutlinedIcon from "@mui/icons-material/BurstModeOutlined";
import ShareIcon from "@mui/icons-material/Share"
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import LogoutIcon from '@mui/icons-material/Logout';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <HomeOutlinedIcon />,
        label: 'Dashboard',
        route: 'dashboard',
    },
    {
        id: 1,
        icon: <LiveTvIcon />,
        label: 'Players',
        route: 'players',
    },
    {
        id: 2,
        icon: <BurstModeIcon />,
        label: 'Media Library',
        route: 'mediaLibrary',
    },
    {
        id: 3,
        icon: <PlaylistPlayIcon />,
        label: 'Playlists',
        route: 'playlists',
    },
    {
        id: 4,
        icon: <CalendarTodayIcon />,
        label: 'Calendar',
        route: 'calendar',
    },
    {
        id: 5,
        icon: <BurstModeOutlinedIcon />,
        label: 'Announcements',
        route: 'announcements',
    },
    {
        id: 6,
        icon: <ShareIcon />,
        label: 'Social Media',
        route: 'socialMedia',
    },
    
    // {
    //     id: 7,
    //     icon: <LogoutIcon />,
    //     label: 'Logout',
    //     route: 'logout',
    // },
]
