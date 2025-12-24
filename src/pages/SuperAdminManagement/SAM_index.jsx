
import React, { useState } from "react";
import { 
  LayoutDashboard
} from 'lucide-react';
import '../../Styles/styles.css';


export const dashboard = [
    {
      title: "Super Admin Overview",
      icon: <LayoutDashboard className="tab-icon" />,
    },
  ];

export default function SuperAdminManagement(sam_id, sam_label, sam_icon) {
  const [activeTab, setActiveTab] = useState('superadmin');

    const tabs = [
        { id: 'superadmin', label: 'Super Admin Management', icon: LayoutDashboard }
    ];
}

export const sam_id = 'superadmin';
export const sam_label = 'Super Admin Management';
export const sam_icon = LayoutDashboard;