import React from 'react';
import { Search, Bell, LogOut, CircleUserRound } from 'lucide-react';

export default function Header() {
  return (

<header className="dashboard-header">
  <div className="header-content">
    <div className="logo-container">
      <div className="logo-circle">
        <span className="logo-text">A</span>
      </div>
      <span className="brand-name">ALPHA DEV</span>
    </div>
    
    <div className="header-icons">
      <div className="icon-wrapper">
        <Search />
      </div>
      <div className="icon-wrapper">
        <CircleUserRound />
        <span className="notification-badge">8</span>
      </div>
      <div className="icon-wrapper">
        <Bell />
        <span className="notification-badge">22</span>
      </div>
      <div className="icon-wrapper">
        <LogOut />
      </div>
    </div>
  </div>
</header>
  );
}