import React, { useState } from "react";
import { 
  Home, User, LogOut, AlertTriangle, Shield, Server,
  Activity, FileText, Lock, RefreshCw, AlertCircle,
  CheckCircle, XCircle, Zap, Database, Cpu, MemoryStick,
  HardDrive, Network, Settings, Eye, Download, Upload,
  Bell, Clock, Calendar, Users, Key, ShieldOff,
  ShieldCheck, Wrench, Trash2, Copy, Play, Pause,
  ChevronRight, ChevronDown, ExternalLink
} from 'lucide-react';
import '../../Styles/styles.css';
import './style.css';

// Emergency Protocols Component
export function EmergencyProtocols({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('security-breach');
  const [severityLevel, setSeverityLevel] = useState('medium');
  const [requiresApproval, setRequiresApproval] = useState(true);
  const [selectedActions, setSelectedActions] = useState([]);
  const [recoveryStatus, setRecoveryStatus] = useState({
    mainDatabase: true,
    backupSystem: false,
    cdn: true,
    paymentGateway: false,
    userService: true,
    analytics: false
  });
  
  // Security Breach Actions
  const securityBreachActions = [
    { id: 'lockdown', label: 'Lockdown Platform', description: 'Restricts all admin access', icon: <Lock size={18} /> },
    { id: 'suspend-admins', label: 'Suspend All Super Admins', description: 'Immediately suspend admin accounts', icon: <ShieldOff size={18} /> },
    { id: 'password-reset', label: 'Force Global Password Reset', description: 'Require password reset for all users', icon: <Key size={18} /> },
    { id: 'readonly-mode', label: 'Enable Read-Only Mode', description: 'Disable write operations system-wide', icon: <Eye size={18} /> },
    { id: 'isolate-systems', label: 'Isolate Affected Systems', description: 'Network isolation of compromised systems', icon: <Server size={18} /> }
  ];

  // Investigation Tools
  const investigationTools = [
    { id: 'preserve-logs', label: 'Preserve Logs & Evidence', description: 'Secure and backup all system logs', icon: <FileText size={18} /> },
    { id: 'security-audit', label: 'Initiate Security Audit', description: 'Launch comprehensive security review', icon: <ShieldCheck size={18} /> },
    { id: 'trace-accounts', label: 'Trace Compromised Accounts', description: 'Investigate potentially compromised accounts', icon: <Users size={18} /> }
  ];

  // System Failure Recovery Actions
  const systemFailureActions = [
    { id: 'readonly-mode-failure', label: 'Activate Read-Only Mode', description: 'Disable write operations', icon: <Eye size={18} /> },
    { id: 'system-restore', label: 'Initiate System Restore', description: 'Roll back to last stable state', icon: <RefreshCw size={18} /> },
    { id: 'backup-deploy', label: 'Deploy Backup Systems', description: 'Activate backup infrastructure', icon: <Server size={18} /> },
    { id: 'notify-stakeholders', label: 'Notify Stakeholders', description: 'Alert all affected parties', icon: <Bell size={18} /> },
    { id: 'monitor-recovery', label: 'Monitor Recovery Progress', description: 'Track system restoration progress', icon: <Activity size={18} /> }
  ];

  // Performance Crisis Actions
  const performanceCrisisActions = [
    { id: 'scale-resources', label: 'Scale Resources Immediately', description: 'Add compute resources automatically', icon: <Zap size={18} /> },
    { id: 'clear-caches', label: 'Clear All Caches', description: 'Purge all cache layers', icon: <Trash2 size={18} /> },
    { id: 'optimize-db', label: 'Optimize Database Queries', description: 'Run database optimization routines', icon: <Database size={18} /> },
    { id: 'rate-limiting', label: 'Implement Rate Limiting', description: 'Apply request rate limits', icon: <Settings size={18} /> },
    { id: 'disable-features', label: 'Disable Non-Essential Features', description: 'Turn off optional features', icon: <XCircle size={18} /> }
  ];

  // Current System Load
  const systemLoad = [
    { metric: 'CPU', value: 92, color: '#ef4444', icon: <Cpu size={14} /> },
    { metric: 'Memory', value: 85, color: '#f59e0b', icon: <MemoryStick size={14} /> },
    { metric: 'Database', value: 95, color: '#dc2626', icon: <Database size={14} /> },
    { metric: 'Network', value: 78, color: '#3b82f6', icon: <Network size={14} /> }
  ];

  // Tabs configuration
  const tabs = [
    { id: 'security-breach', label: 'Security Breach', icon: <Shield size={18} /> },
    { id: 'system-failure', label: 'System Failure', icon: <Server size={18} /> },
    { id: 'performance-crisis', label: 'Performance Crisis', icon: <Activity size={18} /> },
    { id: 'logs', label: 'Emergency Logs', icon: <FileText size={18} /> }
  ];

  // Handle action selection
  const handleActionToggle = (actionId) => {
    setSelectedActions(prev => 
      prev.includes(actionId) 
        ? prev.filter(id => id !== actionId)
        : [...prev, actionId]
    );
  };

  // Handle recovery status toggle
  const handleRecoveryToggle = (system) => {
    setRecoveryStatus(prev => ({
      ...prev,
      [system]: !prev[system]
    }));
  };

  // Handle emergency protocol activation
  const handleActivateProtocol = () => {
    if (requiresApproval) {
      alert('⚠️ This action requires second root admin approval. Please contact another administrator.');
      return;
    }
    
    alert('🚨 Emergency protocol activated! Selected actions are being executed.');
    // Here you would make API calls to execute the emergency actions
  };

  // Handle severity change
  const handleSeverityChange = (level) => {
    setSeverityLevel(level);
    // Update actions based on severity
    if (level === 'critical') {
      setSelectedActions(['lockdown', 'suspend-admins', 'password-reset']);
    } else if (level === 'high') {
      setSelectedActions(['lockdown', 'suspend-admins']);
    } else {
      setSelectedActions([]);
    }
  };

  // Toggle approval requirement
  const handleToggleApproval = () => {
    setRequiresApproval(!requiresApproval);
  };

  // Handle system failure action
  const handleSystemFailureAction = (actionId) => {
    alert(`Executing ${actionId}...`);
  };

  // Handle performance crisis action
  const handlePerformanceCrisisAction = (actionId) => {
    alert(`Executing ${actionId}...`);
  };

  if (!isOpen) return null;

  return (
    <div className="super-modal-overlay" onClick={onClose}>
      <div className="super-actions-modal" onClick={(e) => e.stopPropagation()}>
    <div className="emergency-container">
      {/* Header */}
      <header className="emergency-header">
        <div className="header-left">
          <div className="logo-container">
            <div className="logo-circle">
              <span className="logo-text">EP</span>
            </div>
            <h1 className="page-title">EMERGENCY PROTOCOLS</h1>
          </div>
        </div>
        {/* <div className="header-right">
          <button className="header-btn">
            <Home size={18} />
            <span>Dashboard</span>
          </button>
          <button className="header-btn">
            <User size={18} />
            <span>Profile</span>
          </button>
          <button className="header-btn logout-btn">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div> */}
      </header>

      {/* Navigation Tabs */}
      <nav className="emergency-nav">
        <div className="nav-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Emergency Warning Banner */}
      <div className="emergency-warning">
        <div className="warning-content">
          <AlertTriangle size={24} />
          <div className="warning-text">
            <h3>EMERGENCY ACTIONS REQUIRE DUAL APPROVAL</h3>
            <p>Critical actions require approval from at least two root administrators</p>
          </div>
        </div>
        <button className="warning-action">
          <Shield size={16} />
          <span>View Emergency Contacts</span>
        </button>
      </div>

      {/* Main Content */}
      <main className="emergency-main">
        {/* Security Breach Response */}
        <div className={`protocol-section ${activeTab === 'security-breach' ? 'active' : ''}`}>
          <div className="section-header">
            <div className="section-title">
              <Shield size={24} />
              <h2>SECURITY BREACH RESPONSE</h2>
            </div>
            <div className="severity-indicator">
              <div className={`severity-dot severity-${severityLevel}`}></div>
              <span>Current Severity: {severityLevel.toUpperCase()}</span>
            </div>
          </div>

          {/* Severity Selector */}
          <div className="severity-selector">
            <div className="selector-label">
              <AlertCircle size={18} />
              <span>Severity Level:</span>
            </div>
            <div className="severity-buttons">
              {['low', 'medium', 'high', 'critical'].map(level => (
                <button
                  key={level}
                  className={`severity-btn ${severityLevel === level ? 'active' : ''}`}
                  onClick={() => handleSeverityChange(level)}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Immediate Actions */}
          <div className="actions-section">
            <h3 className="section-subtitle">Immediate Actions:</h3>
            <div className="actions-grid">
              {securityBreachActions.map(action => (
                <div key={action.id} className="action-item">
                  <div className="action-checkbox">
                    <input
                      type="checkbox"
                      id={action.id}
                      checked={selectedActions.includes(action.id)}
                      onChange={() => handleActionToggle(action.id)}
                      className="checkbox-input"
                    />
                    <label htmlFor={action.id} className="checkbox-label"></label>
                  </div>
                  <div className="action-content">
                    <div className="action-icon">
                      {action.icon}
                    </div>
                    <div className="action-details">
                      <h4 className="action-title">{action.label}</h4>
                      <p className="action-description">{action.description}</p>
                    </div>
                  </div>
                  <div className="action-severity">
                    {action.id === 'lockdown' && <span className="severity-tag critical">CRITICAL</span>}
                    {action.id === 'suspend-admins' && <span className="severity-tag high">HIGH</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Investigation Tools */}
          <div className="investigation-section">
            <h3 className="section-subtitle">Investigation Tools:</h3>
            <div className="tools-grid">
              {investigationTools.map(tool => (
                <button
                  key={tool.id}
                  className="tool-btn"
                  onClick={() => alert(`Launching ${tool.label}...`)}
                >
                  <div className="tool-icon">
                    {tool.icon}
                  </div>
                  <div className="tool-content">
                    <h4 className="tool-title">{tool.label}</h4>
                    <p className="tool-description">{tool.description}</p>
                  </div>
                  <ChevronRight size={18} className="tool-arrow" />
                </button>
              ))}
            </div>
          </div>

          {/* Approval Section */}
          <div className="approval-section">
            <div className="approval-toggle">
              <div className="toggle-container">
                <input
                  type="checkbox"
                  id="approval-toggle"
                  checked={requiresApproval}
                  onChange={handleToggleApproval}
                  className="toggle-input"
                />
                <label htmlFor="approval-toggle" className="toggle-label">
                  <span className="toggle-slider"></span>
                  <span className="toggle-text">
                    {requiresApproval ? 'Requires 2nd ROOT ADMIN APPROVAL' : 'Approval Granted'}
                  </span>
                </label>
              </div>
              <div className="approval-status">
                {requiresApproval ? (
                  <span className="status-warning">
                    <AlertTriangle size={14} />
                    <span>Awaiting Approval</span>
                  </span>
                ) : (
                  <span className="status-approved">
                    <CheckCircle size={14} />
                    <span>Approved</span>
                  </span>
                )}
              </div>
            </div>
            
            <button 
              className="emergency-activate-btn"
              onClick={handleActivateProtocol}
              disabled={requiresApproval && selectedActions.length > 0}
            >
              <AlertTriangle size={20} />
              <span>Activate Emergency Protocol</span>
            </button>
          </div>
        </div>

        {/* System Failure Recovery */}
        <div className={`protocol-section ${activeTab === 'system-failure' ? 'active' : ''}`}>
          <div className="section-header">
            <div className="section-title">
              <Server size={24} />
              <h2>SYSTEM FAILURE RECOVERY</h2>
            </div>
            <button className="section-action">
              <RefreshCw size={18} />
              <span>Last Backup: 2 hours ago</span>
            </button>
          </div>

          <div className="actions-section">
            <div className="actions-grid compact">
              {systemFailureActions.map(action => (
                <button
                  key={action.id}
                  className="system-action-btn"
                  onClick={() => handleSystemFailureAction(action.id)}
                >
                  <div className="action-icon">
                    {action.icon}
                  </div>
                  <div className="action-content">
                    <h4 className="action-title">{action.label}</h4>
                    <p className="action-description">{action.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Recovery Status */}
          <div className="recovery-section">
            <h3 className="section-subtitle">Recovery Status:</h3>
            <div className="recovery-grid">
              {Object.entries(recoveryStatus).map(([system, status]) => (
                <div 
                  key={system} 
                  className="recovery-item"
                  onClick={() => handleRecoveryToggle(system)}
                >
                  <div className={`status-indicator ${status ? 'online' : 'offline'}`}>
                    {status ? '●' : '○'}
                  </div>
                  <div className="system-name">
                    {system.split(/(?=[A-Z])/).join(' ')}
                  </div>
                  <div className="system-status">
                    {status ? 'Online' : 'Offline'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recovery Progress */}
          <div className="recovery-progress">
            <div className="progress-header">
              <h4>Overall Recovery Progress</h4>
              <span className="progress-percent">65%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '65%' }}></div>
            </div>
            <div className="progress-details">
              <span className="detail-item">Estimated Time Remaining: 45 minutes</span>
              <span className="detail-item">Systems Restored: 4/6</span>
            </div>
          </div>
        </div>

        {/* Performance Crisis Management */}
        <div className={`protocol-section ${activeTab === 'performance-crisis' ? 'active' : ''}`}>
          <div className="section-header">
            <div className="section-title">
              <Activity size={24} />
              <h2>PERFORMANCE CRISIS MANAGEMENT</h2>
            </div>
            <div className="crisis-level">
              <div className="level-indicator critical">
                <AlertTriangle size={16} />
                <span>CRITICAL</span>
              </div>
            </div>
          </div>

          <div className="actions-section">
            <div className="actions-grid compact">
              {performanceCrisisActions.map(action => (
                <button
                  key={action.id}
                  className="performance-action-btn"
                  onClick={() => handlePerformanceCrisisAction(action.id)}
                >
                  <div className="action-icon">
                    {action.icon}
                  </div>
                  <div className="action-content">
                    <h4 className="action-title">{action.label}</h4>
                    <p className="action-description">{action.description}</p>
                  </div>
                  <div className="action-priority">
                    {action.id === 'scale-resources' && <span className="priority-tag">HIGH PRIORITY</span>}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Current Load */}
          <div className="load-section">
            <h3 className="section-subtitle">Current Load:</h3>
            <div className="load-grid">
              {systemLoad.map(load => (
                <div key={load.metric} className="load-card">
                  <div className="load-header">
                    <div className="load-icon">
                      {load.icon}
                    </div>
                    <span className="load-metric">{load.metric}</span>
                  </div>
                  <div className="load-value" style={{ color: load.color }}>
                    {load.value}%
                  </div>
                  <div className="load-bar">
                    <div 
                      className="load-fill"
                      style={{ 
                        width: `${load.value}%`,
                        backgroundColor: load.color
                      }}
                    ></div>
                  </div>
                  <div className="load-status">
                    {load.value > 90 ? 'Critical' : load.value > 80 ? 'High' : 'Normal'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Auto-scaling Status */}
          <div className="autoscale-section">
            <div className="autoscale-header">
              <h4>Auto-scaling Status</h4>
              <div className="autoscale-toggle">
                <span className="toggle-label">Enabled</span>
                <div className="toggle active">
                  <div className="toggle-dot"></div>
                </div>
              </div>
            </div>
            <div className="autoscale-details">
              <div className="detail-item">
                <span className="detail-label">Instances Running:</span>
                <span className="detail-value">12</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Max Instances:</span>
                <span className="detail-value">20</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Last Scale:</span>
                <span className="detail-value">5 minutes ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Logs (Placeholder) */}
        <div className={`protocol-section ${activeTab === 'logs' ? 'active' : ''}`}>
          <div className="section-header">
            <div className="section-title">
              <FileText size={24} />
              <h2>EMERGENCY LOGS</h2>
            </div>
            <button className="section-action">
              <Download size={18} />
              <span>Export Logs</span>
            </button>
          </div>
          <div className="logs-placeholder">
            <div className="placeholder-content">
              <FileText size={48} />
              <h3>Emergency Logs Access</h3>
              <p>View detailed emergency protocol execution logs and audit trails.</p>
              <button className="placeholder-btn">
                <Eye size={18} />
                <span>View Emergency Logs</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
    </div>
  );
}