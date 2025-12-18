import React, { useState } from "react";
import { 
  Server, CloudBackup, Logs, Database, MonitorCog
} from 'lucide-react';
import '../../Styles/styles.css';


export const sh_email = [
      {
        title: "Database",
        icon: <Database className="tab-icon" />,
      },
      {
        title: "Servers",
        icon: <Server className="tab-icon" />,
      },
      {
        title: "Backups",
        icon: <CloudBackup className="tab-icon" />,
      },
      {
        title: "Logs",
        icon: <Logs className="tab-icon" />,
      }
    ];

export default function SystemInfrastructure(sh_id, sh_label, sh_icon) {

    const tabs = [
       { sh_id: 'email', sh_label: 'System Infrastructure', sh_icon: MonitorCog },
    ];

}

export const sh_id = 'email';
export const sh_label = 'System Infrastructure';
export const sh_icon = MonitorCog;


