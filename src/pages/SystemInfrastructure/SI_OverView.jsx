import React, { useState } from "react";
import { 
  Home, User, LogOut, Database, Server, HardDrive,
  BarChart3, FileText, Settings, RefreshCw, Zap,
  AlertTriangle, CheckCircle, Activity, Cpu, MemoryStick,
  HardDriveIcon, Network, Clock, Calendar, Play,
  Pause, Shield, Download, Upload, Wrench,
  Trash2, Copy, Eye, AlertCircle, TrendingUp,
  TrendingDown, X
} from 'lucide-react';
import '../../Styles/styles.css';
import './style.css';

// System Infrastructure Component
export function SystemInfrastructure({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('database');
  const [maintenanceEnabled, setMaintenanceEnabled] = useState(false);
  const [scheduleTime, setScheduleTime] = useState('02:00');

  // Database Status Data
  const databaseStatus = [
    {
      id: 1,
      name: "Main DB",
      size: "45 GB",
      connections: "124/500",
      status: "healthy",
      latency: "12ms",
      icon: <Database size={18} />,
      color: "#3b82f6"
    },
    {
      id: 2,
      name: "Analytics",
      size: "120 GB",
      connections: "89/200",
      status: "warning",
      latency: "45ms",
      icon: <BarChart3 size={18} />,
      color: "#f59e0b"
    },
    {
      id: 3,
      name: "Cache",
      size: "8 GB",
      connections: "245/1000",
      status: "healthy",
      latency: "2ms",
      icon: <HardDrive size={18} />,
      color: "#10b981"
    }
  ];

  // Server Cluster Data
  const serverStatus = [
    {
      id: 1,
      name: "web-01",
      cpu: 45,
      memory: 67,
      disk: 32,
      network: "120MB/s",
      status: "ok",
      type: "web",
      uptime: "99.8%"
    },
    {
      id: 2,
      name: "web-02",
      cpu: 52,
      memory: 71,
      disk: 29,
      network: "95MB/s",
      status: "ok",
      type: "web",
      uptime: "99.9%"
    },
    {
      id: 3,
      name: "db-01",
      cpu: 78,
      memory: 45,
      disk: 65,
      network: "45MB/s",
      status: "warning",
      type: "database",
      uptime: "99.5%"
    },
    {
      id: 4,
      name: "cache-01",
      cpu: 12,
      memory: 34,
      disk: 22,
      network: "200MB/s",
      status: "ok",
      type: "cache",
      uptime: "100%"
    }
  ];

  // Quick Actions
  const quickActions = [
    { id: 1, label: "Run Backup Now", icon: <Download size={16} />, action: () => runBackup() },
    { id: 2, label: "Optimize Databases", icon: <Database size={16} />, action: () => optimizeDatabases() },
    { id: 3, label: "Clear Cache", icon: <Trash2 size={16} />, action: () => clearCache() },
    { id: 4, label: "Run Migration", icon: <Upload size={16} />, action: () => runMigration() },
    { id: 5, label: "Update Schema", icon: <Wrench size={16} />, action: () => updateSchema() },
    { id: 6, label: "Repair Tables", icon: <Shield size={16} />, action: () => repairTables() },
  ];

  // Function handlers
  const runBackup = () => {
    alert("Starting system backup...");
  };

  const optimizeDatabases = () => {
    alert("Optimizing all databases...");
  };

  const clearCache = () => {
    alert("Clearing system cache...");
  };

  const runMigration = () => {
    alert("Running database migrations...");
  };

  const updateSchema = () => {
    alert("Updating database schema...");
  };

  const repairTables = () => {
    alert("Repairing database tables...");
  };

  const handleDatabaseAction = (dbName, action) => {
    alert(`${action} ${dbName}...`);
  };


  if (!isOpen) return null;

  return (
    <div className="super-modal-overlay" onClick={onClose}>
      <div className="super-actions-modal" onClick={(e) => e.stopPropagation()}>
        <div className=" infrastructure-container">
      {/* Header */}
      <header className="infrastructure-header">
        <div className="header-left">
          <div className="logo-container">
            <div className="logo-circle">
              <span className="logo-text">SI</span>
            </div>
            <h1 className="page-title">SYSTEM INFRASTRUCTURE</h1>
          </div>
        </div>
        <button 
          className="modal-close-btn"
          onClick={onClose}
        >
          <X size={20} />
        </button>
      </header>

      {/* Main Content */}
      <main className="infrastructure-main">
        {/* Database Status Section */}
        <div className="section-card">
          <div className="section-header">
            <div className="section-title">
              <Database size={20} />
              <h2>DATABASE STATUS</h2>
            </div>
            <button className="section-action">
              <RefreshCw size={16} />
              <span>Refresh</span>
            </button>
          </div>
          
          <div className="table-container">
            <table className="infrastructure-table">
              <thead>
                <tr>
                  <th>Database</th>
                  <th>Size</th>
                  <th>Connections</th>
                  <th>Status</th>
                  <th>Latency</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {databaseStatus.map(db => (
                  <tr key={db.id} className="database-row">
                    <td>
                      <div className="db-info">
                        <div className="db-icon" style={{ color: db.color }}>
                          {db.icon}
                        </div>
                        <div className="db-details">
                          <span className="db-name">{db.name}</span>
                        </div>
                      </div>
                    </td>
                    <td className="db-size">
                      <div className="size-container">
                        <span className="size-value">{db.size}</span>
                      </div>
                    </td>
                    <td>
                      <div className="connections-container">
                        <span className="connections-value">{db.connections}</span>
                        <div className="connections-bar">
                          <div 
                            className="connections-fill"
                            style={{ 
                              width: `${parseInt(db.connections.split('/')[0]) / parseInt(db.connections.split('/')[1]) * 100}%`,
                              backgroundColor: db.status === 'warning' ? '#f59e0b' : '#10b981'
                            }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className={`status-badge status-${db.status}`}>
                        {db.status === 'healthy' ? '● Healthy' : '⚠ Warning'}
                      </div>
                    </td>
                    <td>
                      <div className="latency-container">
                        <span className="latency-value">{db.latency}</span>
                        <div className="latency-indicator">
                          {parseInt(db.latency) < 20 ? (
                            <TrendingDown size={12} color="#10b981" />
                          ) : (
                            <TrendingUp size={12} color="#ef4444" />
                          )}
                        </div>
                      </div>
                    </td>
                    <td>
                      <button 
                        className="action-btn-small"
                        onClick={() => handleDatabaseAction(db.name, db.name === 'Cache' ? 'Clear' : 'Optimize')}
                      >
                        {db.name === 'Cache' ? 'Clear' : 'Optimize'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid-container">
          {/* Left Column - Maintenance Controls */}
          <div className="maintenance-card">
            <div className="section-header">
              <div className="section-title">
                <Settings size={20} />
                <h2>MAINTENANCE CONTROLS</h2>
              </div>
            </div>

            <div className="maintenance-content">
              <div className="maintenance-toggle">
                <div className="toggle-label">
                  <div className="toggle-info">
                    <span className="toggle-title">Scheduled Maintenance</span>
                    <span className="toggle-description">Enable automated maintenance tasks</span>
                  </div>
                </div>
                <div className="toggle-controls">
                  <button 
                    className={`toggle-btn ${maintenanceEnabled ? 'active' : ''}`}
                    onClick={() => setMaintenanceEnabled(true)}
                  >
                    <CheckCircle size={14} />
                    <span>Enable</span>
                  </button>
                  <button 
                    className={`toggle-btn ${!maintenanceEnabled ? 'active' : ''}`}
                    onClick={() => setMaintenanceEnabled(false)}
                  >
                    <Pause size={14} />
                    <span>Disable</span>
                  </button>
                </div>
              </div>

              <div className="schedule-input">
                <label className="input-label">
                  <Clock size={14} />
                  <span>Schedule Time:</span>
                </label>
                <div className="time-input-container">
                  <input
                    type="time"
                    className="time-input"
                    value={scheduleTime}
                    onChange={(e) => setScheduleTime(e.target.value)}
                    disabled={!maintenanceEnabled}
                  />
                  <button 
                    className="schedule-btn"
                    disabled={!maintenanceEnabled}
                  >
                    <Calendar size={14} />
                    <span>Set Schedule</span>
                  </button>
                </div>
              </div>

              {/* Quick Actions Grid */}
              <div className="quick-actions-section">
                <h3 className="section-subtitle">Quick Actions:</h3>
                <div className="quick-actions-grid">
                  {quickActions.map(action => (
                    <button
                      key={action.id}
                      className="quick-action-btn"
                      onClick={action.action}
                    >
                      <div className="action-icon">
                        {action.icon}
                      </div>
                      <span className="action-label">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Backup Status */}
              <div className="backup-status">
                <div className="backup-info">
                  <div className="backup-item">
                    <div className="backup-label">
                      <CheckCircle size={14} color="#10b981" />
                      <span>Last successful:</span>
                    </div>
                    <div className="backup-value">Today, 02:00 AM</div>
                  </div>
                  <div className="backup-item">
                    <div className="backup-label">
                      <Clock size={14} color="#3b82f6" />
                      <span>Next scheduled:</span>
                    </div>
                    <div className="backup-value">Today, 14:00 PM</div>
                  </div>
                </div>
                <div className="backup-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: '65%' }}
                    ></div>
                  </div>
                  <span className="progress-text">65% until next backup</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Server Cluster Status */}
          <div className="servers-card">
            <div className="section-header">
              <div className="section-title">
                <Server size={20} />
                <h2>SERVER CLUSTER STATUS</h2>
              </div>
              <div className="cluster-stats">
                <div className="cluster-stat">
                  <span className="stat-value">4</span>
                  <span className="stat-label">Servers</span>
                </div>
                <div className="cluster-stat">
                  <span className="stat-value">99.7%</span>
                  <span className="stat-label">Uptime</span>
                </div>
              </div>
            </div>

            <div className="table-container">
              <table className="infrastructure-table">
                <thead>
                  <tr>
                    <th>Server</th>
                    <th>CPU</th>
                    <th>Memory</th>
                    <th>Disk</th>
                    <th>Network</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {serverStatus.map(server => (
                    <tr key={server.id} className="server-row">
                      <td>
                        <div className="server-info">
                          <div className="server-icon">
                            <Server size={16} />
                          </div>
                          <div className="server-details">
                            <span className="server-name">{server.name}</span>
                            <span className="server-type">{server.type}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="metric-container">
                          <div className="metric-header">
                            <Cpu size={12} />
                            <span>{server.cpu}%</span>
                          </div>
                          <div className="metric-bar">
                            <div 
                              className="metric-fill cpu"
                              style={{ width: `${server.cpu}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="metric-container">
                          <div className="metric-header">
                            <MemoryStick size={12} />
                            <span>{server.memory}%</span>
                          </div>
                          <div className="metric-bar">
                            <div 
                              className="metric-fill memory"
                              style={{ width: `${server.memory}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="metric-container">
                          <div className="metric-header">
                            <HardDriveIcon size={12} />
                            <span>{server.disk}%</span>
                          </div>
                          <div className="metric-bar">
                            <div 
                              className="metric-fill disk"
                              style={{ width: `${server.disk}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="network-container">
                          <div className="network-icon">
                            <Network size={14} />
                          </div>
                          <span className="network-value">{server.network}</span>
                        </div>
                      </td>
                      <td>
                        <div className={`server-status status-${server.status}`}>
                          {server.status === 'ok' ? '● OK' : '⚠ Warn'}
                          {server.status === 'warning' && (
                            <AlertCircle size={12} className="warning-indicator" />
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* System Metrics */}
            <div className="system-metrics">
              <div className="metric-card">
                <div className="metric-header">
                  <Activity size={16} />
                  <span>System Load</span>
                </div>
                <div className="metric-value">47%</div>
                <div className="metric-trend up">
                  <TrendingUp size={12} />
                  <span>+2%</span>
                </div>
              </div>
              <div className="metric-card">
                <div className="metric-header">
                  <Database size={16} />
                  <span>Active Connections</span>
                </div>
                <div className="metric-value">458</div>
                <div className="metric-trend down">
                  <TrendingDown size={12} />
                  <span>-12%</span>
                </div>
              </div>
              <div className="metric-card">
                <div className="metric-header">
                  <AlertTriangle size={16} />
                  <span>Alerts</span>
                </div>
                <div className="metric-value">1</div>
                <div className="metric-trend neutral">
                  <span>Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
    </div>
  );
}

