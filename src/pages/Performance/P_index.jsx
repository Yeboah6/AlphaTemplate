import React, { useState } from "react";
import { 
  Table, Download, Upload, Database, Activity
} from 'lucide-react';
import '../../Styles/styles.css';


export const per_performance = [
      {
        title: "Security Breach",
        icon: <Table className="tab-icon" />,
      },
      {
        title: "System Failure",
        icon: <Download className="tab-icon" />,
      },
      {
        title: "Performance Crisis",
        icon: <Upload className="tab-icon" />,
      },
      {
        title: "Logs",
        icon: <Database className="tab-icon" />,
      }
    ];

export default function Performance(per_id, per_label, per_icon) {

    const tabs = [
       { id: 'performance', label: 'Emergency Protocols', icon: Activity },
    ];

}

export const per_id = 'performance';
export const per_label = 'Emergency Protocols';
export const per_icon = Activity;