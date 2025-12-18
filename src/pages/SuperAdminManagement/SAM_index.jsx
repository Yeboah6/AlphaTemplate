
import React, { useState } from "react";
import { 
  Home, Calendar, CheckSquare, Settings
} from 'lucide-react';
import '../../Styles/styles.css';


export const dashboard = [
      {
        title: "Dashboard",
        icon: <Home className="tab-icon" />,
      },
    ];

export default function SuperAdminManagement(sam_id, sam_label, sam_icon) {
    // const [activeTab, setActiveTab] = useState('home');

    const tabs = [
        { id: 'superadmin', label: 'Super Admin Management', icon: Home }
    ];

}

export const sam_id = 'superadmin';
export const sam_label = 'Super Admin Management';
export const sam_icon = Home;


