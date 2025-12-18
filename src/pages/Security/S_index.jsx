import React, { useState } from "react";
import { 
  BarChart2, Settings, PieChart, KeyRound
} from 'lucide-react';
import '../../Styles/styles.css';


export const s_security = [
      {
        title: "Overview",
        icon: <BarChart2 className="tab-icon" />,
      },
      {
        title: "Encryption",
        icon: <BarChart2 className="tab-icon" />,
      },
      {
        title: "Policies",
        icon: <PieChart className="tab-icon" />,
      },
      {
        title: "Audit Logs",
        icon: <Settings className="tab-icon" />,
      },
      {
        title: "Compliance",
        icon: <Settings className="tab-icon" />,
      }
    ];

export default function Security(s_id, s_label, s_icon) {

    const tabs = [
       { id: 'security', label: 'Security', icon: KeyRound },
    ];

}

export const s_id = 'security';
export const s_label = 'Security';
export const s_icon = KeyRound;