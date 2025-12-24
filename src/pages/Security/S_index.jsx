import React, { useState } from "react";
import { 
  Lock, Shield, Eye, FileText, KeyRound, ShieldCheck
} from 'lucide-react';
import '../../Styles/styles.css';


export const s_security = [
      {
        title: "Security Overview",
        icon: <Shield className="tab-icon" />,
      },
      {
        title: "Encryption",
        icon: <Lock className="tab-icon" />,
      },
      {
        title: "Policies",
        icon: <FileText className="tab-icon" />,
      },
      {
        title: "Audit Logs",
        icon: <Eye className="tab-icon" />,
      },
      {
        title: "Compliance",
        icon: <ShieldCheck className="tab-icon" />,
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