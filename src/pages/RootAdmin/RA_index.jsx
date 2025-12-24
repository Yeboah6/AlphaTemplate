import React, { useState } from 'react';
import {
  MessageSquare, TriangleAlert, Wifi, Store,
} from 'lucide-react';
import '../../Styles/styles.css';
import Header from '../../components/common/header.jsx';

import OverView, { id, label, icon, home } from '../OverView/OV_index.jsx';
import { QuickActionsModal } from '../OverView/QuickActionsModal.jsx';

import SuperAdminManagement, { sam_id, sam_label, sam_icon, dashboard } from '../SuperAdminManagement/SAM_index.jsx';
import { ManageSuperAdmin } from '../SuperAdminManagement/ManageSuperAdmin.jsx';

import {sh_id, sh_label, sh_icon, system } from '../SystemInfrastructure/SI_index.jsx';
import { SystemInfrastructure } from '../SystemInfrastructure/SI_OverView.jsx';

import { p_id, p_label, p_icon, p_platform } from '../ActivityLogs/P_index.jsx';

import { s_id, s_label, s_icon, s_security } from '../Security/S_index.jsx';
import { SecurityCompliance } from '../Security/S_OverView.jsx';

import { emer_id, emer_label, emer_icon, emergencyProtocol } from '../Emergency/E_index.jsx';
import { EmergencyProtocols } from '../Emergency/Emergency_OverView.jsx';

export default function NotikaDashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [superActiveTab, setSuperActiveTab] = useState('superadmin');
  const [systemActiveTab, setSystemActiveTab] = useState('systeminfrastructure');
  const [securityActiveTab, setSecurityActiveTab] = useState('securitycompliance');
  const [emergencyActiveTab, setEmergencyActiveTab] = useState('emergencyprotocols');

  const [showQuickActionsModal, setShowQuickActionsModal] = useState(false);
  const [showSuperAdminModal, setShowSuperAdminModal] = useState(false);
  const [showSystemOverView, setShowSystemOverView] = useState(false);
  const [showSecurityOverView, setShowSecurityOverView] = useState(false);
  const [ showEmergencyOverView, setShowEmergencyOverView] = useState(false);

  const tabs = [
    { id: id, label: label, icon: icon },
    { id: sam_id, label: sam_label, icon: sam_icon },
    { id: sh_id, label: sh_label, icon: sh_icon },
    { id: p_id, label: p_label, icon: p_icon },
    { id: s_id, label: s_label, icon: s_icon },
    { id: emer_id, label: emer_label, icon: emer_icon },
  ];

  const tabContent = {
    home: home,
    superadmin: dashboard,
    system: system,  
    platform: p_platform,
    security: s_security,
    emergency: emergencyProtocol,
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <Header />

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="nav-items">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className="nav-button"
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon className="icon-small" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content"> 
            {/* Stats Cards */}
            <div className="stats-grid">
              {/* Card 1 */}
              <div className="stat-card">
                <div className="card-header">
                  <div>
                    <div className="stat-value">98%</div>
                    <div className="stat-label">Online</div>
                  </div>
                  <div className="bar-chart">
                    <Wifi size={40} color='green'/>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="stat-card">
                <div className="card-header">
                  <div>
                    <div className="stat-value">1,247</div>
                    <div className="stat-label">Stores</div>
                  </div>
                  <div className="bar-chart">
                    <Store size={40} color='red'/>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="stat-card">
                <div className="card-header">
                  <div>
                    <div className="stat-value">0</div>
                    <div className="stat-label">No Threat</div>
                  </div>
                  <div className="bar-chart">
                    <TriangleAlert size={40} color='red'/>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="stat-card">
                <div className="card-header">
                  <div>
                    <div className="stat-value">0.2s</div>
                    <div className="stat-label">No Response</div>
                  </div>
                  <div className="bar-chart">
                    <MessageSquare size={40} color='blue'/>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className="tabs-content">
              {tabContent[activeTab]?.map((item, index) => (
                <div 
                  key={index} 
                  className="tab-item"
                  onClick={() => {
                    if (item.title === "Quick Actions") {
                      setShowQuickActionsModal(true);
                    } else if (item.title == "Super Admin Overview") {
                      setShowSuperAdminModal(true);
                    } else if (item.title == "System Overview") {
                      setShowSystemOverView(true);
                    } else if (item.title == "Security Overview") {
                      setShowSecurityOverView(true);
                    } else if (item.title == "Emergency Overview") {
                      setShowEmergencyOverView(true);
                    }
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {item.icon}
                  <h3 className="tab-title">{item.title}</h3>
                  <p className="tab-description">{item.description || (item.title === "Quick Actions")}</p>
                </div>
              ))}
            </div>

            {activeTab === 'home' && <OverView />}
            {superActiveTab === 'superadmin' && <SuperAdminManagement />}
            {systemActiveTab === 'systeminfrastructure' && <SystemInfrastructure />}
            {securityActiveTab === 'securitycompliance' && <SecurityCompliance />}
      </main>

      {/* Quick Actions Modal */}
      <QuickActionsModal 
        isOpen={showQuickActionsModal}
        onClose={() => setShowQuickActionsModal(false)}
      />

      <ManageSuperAdmin
      isOpen={showSuperAdminModal}
      onClose={() => setShowSuperAdminModal(false)}
      />

      <SystemInfrastructure
      isOpen={showSystemOverView}
      onClose={() => setShowSystemOverView(false)}
      />

      <SecurityCompliance 
      isOpen={showSecurityOverView}
      onClose={() => setShowSecurityOverView(false)}
      />

      <EmergencyProtocols 
      isOpen={showEmergencyOverView}
      onClose={() => setShowEmergencyOverView(false)}
      />
    </div>
  );
}