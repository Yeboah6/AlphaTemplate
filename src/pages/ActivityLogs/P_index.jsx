import React, { useState } from "react";
import { 
  Grid, Settings, CheckSquare, PieChart, Activity
} from 'lucide-react';
import '../../Styles/styles.css';


export const p_platform = [
      {
        title: "All Activities",
        icon: <Grid className="tab-icon" />,
      },
      {
        title: "Security Events",
        icon: <Settings className="tab-icon" />,
      },
      {
        title: "System Changes",
        icon: <CheckSquare className="tab-icon" />
      },
      {
        title: "Exports",
        icon: <PieChart className="tab-icon" />,
      }
    ];

export default function Platform(p_id, p_label, p_icon) {

    const tabs = [
       { id: 'platform', label: 'Activity Logs', icon: Activity },
    ];

}

export const p_id = 'platform';
export const p_label = 'Activity Logs';
export const p_icon = Activity;