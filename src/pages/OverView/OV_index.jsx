import React, { useState } from "react";
import { 
  Home, CheckSquare, LayoutDashboard
} from 'lucide-react';
import '../../Styles/styles.css';
import { AdditionalActions } from './AdditionalActions.jsx';


export const home = [
      {
        title: "Dashboard Overview",
        icon: <LayoutDashboard className="tab-icon" />,
        action: () => console.log("Dashboard clicked")
      },
      {
        title: "Quick Actions",
        icon: <CheckSquare className="tab-icon" />,
        action: (setModalOpen) => setModalOpen(true)
      },
    ];

export default function OverView({ id, label, icon }) {
  const [activeTab, setActiveTab] = useState('home');
  
  const tabs = [
    { id: 'home', label: 'Overview', icon: Home }
  ];

  return (
    <AdditionalActions />
  )
}

export const id = 'home';
export const label = 'Overview';
export const icon = Home;