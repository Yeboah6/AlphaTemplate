
import React, { useState } from "react";
import { 
  Home, Calendar, CheckSquare, LayoutDashboard
} from 'lucide-react';
import '../../Styles/styles.css';


export const home = [
      {
        title: "Dashboard Overview",
        icon: <LayoutDashboard className="tab-icon" />,
      },
      {
        title: "Quick Actions",
        icon: <CheckSquare className="tab-icon" />,
      },
    ];

export default function OverView(id, label, icon) {
    const [activeTab, setActiveTab] = useState('home');

    const tabs = [
        { id: 'home', label: 'Overview', icon: Home }
    ];

    const tabContent = { home };

}

export const id = 'home';
export const label = 'Overview';
export const icon = Home;


