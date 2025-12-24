import React, { useState } from "react";
import { 
  Table, Download, Upload, Database, Activity
} from 'lucide-react';
import '../../Styles/styles.css';


export const emergencyProtocol = [
      {
        title: "Emergency Overview",
        icon: <Table className="tab-icon" />,
      },
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

export default function Emergency(emer_id, emer_label, emer_icon) {

    const tabs = [
       { id: 'emergency', label: 'Emergency Protocols', icon: Activity },
    ];
}

export const emer_id = 'emergency';
export const emer_label = 'Emergency Protocols';
export const emer_icon = Activity;