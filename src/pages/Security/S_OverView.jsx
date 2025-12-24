import React, { useState } from "react";
import { 
  User, Shield, Lock, FileText,
  ShieldCheck, AlertTriangle, Bell, RefreshCw,
  Download, Eye, Settings, Key, History,
  Calendar, Clock, Users, CheckCircle, XCircle,
  TrendingUp, Search, Filter,
  MoreVertical, Copy, DownloadCloud, Activity, X,
  Database, Zap, AlertCircle
} from 'lucide-react';
import '../../Styles/styles.css';
import './style.css';

// Security & Compliance Component
export function SecurityCompliance({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [threatLevel, setThreatLevel] = useState('low');
  const [keyStatus, setKeyStatus] = useState('active');

  // Security Overview Data
  const securityMetrics = [
    { label: "Threat Level", value: "LOW", icon: <Shield size={18} />, color: "#10b981", status: "good" },
    { label: "Last Scan", value: "Today, 01:30 AM", icon: <Clock size={18} />, color: "#3b82f6", status: "neutral" },
    { label: "Vulnerabilities", value: "2 (Medium)", icon: <AlertTriangle size={18} />, color: "#f59e0b", status: "warning" },
    { label: "Failed Logins", value: "12 (last 24h)", icon: <XCircle size={18} />, color: "#ef4444", status: "danger" },
    { label: "Security Score", value: "92/100", icon: <TrendingUp size={18} />, color: "#8b5cf6", status: "good" }
  ];

  // Quick Security Actions
  const quickSecurityActions = [
    { 
      id: 1, 
      label: "Rotate Encryption Keys", 
      icon: <Key size={20} />, 
      description: "Generate new encryption keys",
      color: "#3b82f6",
      action: () => rotateEncryptionKeys()
    },
    { 
      id: 2, 
      label: "Run Security Scan", 
      icon: <ShieldCheck size={20} />, 
      description: "Initiate full system security scan",
      color: "#10b981",
      action: () => runSecurityScan()
    },
    { 
      id: 3, 
      label: "Update Security Policies", 
      icon: <FileText size={20} />, 
      description: "Edit and deploy security policies",
      color: "#8b5cf6",
      action: () => updateSecurityPolicies()
    },
    { 
      id: 4, 
      label: "Review Access Logs", 
      icon: <Eye size={20} />, 
      description: "Analyze system access logs",
      color: "#f59e0b",
      action: () => reviewAccessLogs()
    },
    { 
      id: 5, 
      label: "Generate Compliance Report", 
      icon: <Download size={20} />, 
      description: "Create compliance documentation",
      color: "#06b6d4",
      action: () => generateComplianceReport()
    },
    { 
      id: 6, 
      label: "Audit User Permissions", 
      icon: <Users size={20} />, 
      description: "Review user access permissions",
      color: "#ec4899",
      action: () => auditUserPermissions()
    },
  ];

  // Recent Security Events
  const securityEvents = [
    {
      id: 1,
      time: "08:15 AM",
      type: "Failed Login",
      user: "unknown",
      ip: "192.168.1.50",
      severity: "high",
      icon: <XCircle size={14} />
    },
    {
      id: 2,
      time: "07:30 AM",
      type: "Password Changed",
      user: "jsmith",
      ip: "10.0.1.100",
      severity: "medium",
      icon: <Key size={14} />
    },
    {
      id: 3,
      time: "06:45 AM",
      type: "Super Admin Login",
      user: "root_admin",
      ip: "10.0.1.10",
      severity: "low",
      icon: <Shield size={14} />
    },
    {
      id: 4,
      time: "02:00 AM",
      type: "Security Scan",
      user: "system",
      ip: "-",
      severity: "info",
      icon: <ShieldCheck size={14} />
    },
    {
      id: 5,
      time: "01:30 AM",
      type: "Firewall Updated",
      user: "security_bot",
      ip: "10.0.0.1",
      severity: "medium",
      icon: <Activity size={14} />
    }
  ];

  // Encryption Key Details
  const encryptionKeyDetails = {
    currentKey: "● Active (Expires in 45 days)",
    lastRotation: "30 days ago",
    nextRotation: "Scheduled for 15 days from now",
    keyType: "RSA-4096",
    keyId: "enc_key_2024_001"
  };

  // Function Handlers
  const rotateEncryptionKeys = () => {
    alert("Rotating encryption keys...");
  };

  const runSecurityScan = () => {
    alert("Initiating security scan...");
  };

  const updateSecurityPolicies = () => {
    alert("Opening security policies editor...");
  };

  const reviewAccessLogs = () => {
    alert("Opening access logs...");
  };

  const generateComplianceReport = () => {
    alert("Generating compliance report...");
  };

  const auditUserPermissions = () => {
    alert("Auditing user permissions...");
  };

  const handleKeyRotation = () => {
    alert("Rotating encryption keys now...");
  };

  const scheduleKeyRotation = () => {
    alert("Scheduling key rotation...");
  };

  const viewKeyHistory = () => {
    alert("Opening key history...");
  };

  // Get severity color
  const getSeverityColor = (severity) => {
    const colors = {
      high: "#ef4444",
      medium: "#f59e0b",
      low: "#3b82f6",
      info: "#6b7280"
    };
    return colors[severity] || "#6b7280";
  };

  if (!isOpen) return null;

  return (
    <div className="super-modal-overlay" onClick={onClose}>
      <div className="super-actions-modal" onClick={(e) => e.stopPropagation()}>
    <div className="security-container">
      {/* Header */}
      <header className="security-header">
        <div className="header-left">
          <div className="logo-container">
            <div className="logo-circle">
              <span className="logo-text">SC</span>
            </div>
            <h1 className="page-title">SECURITY & COMPLIANCE</h1>
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
      <main className="security-main">
        {/* Security Overview */}
        <div className="overview-section">
          <div className="section-header">
            <div className="section-title">
              <Shield size={20} />
              <h2>SECURITY OVERVIEW</h2>
            </div>
            <div className="section-status">
              <div className={`threat-level threat-${threatLevel}`}>
                <Shield size={14} />
                <span>Threat Level: {threatLevel.toUpperCase()}</span>
              </div>
            </div>
          </div>
          
          <div className="metrics-grid">
            {securityMetrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <div className="metric-header">
                  <div className="metric-icon" style={{ color: metric.color }}>
                    {metric.icon}
                  </div>
                  <span className="metric-label">{metric.label}</span>
                </div>
                <div className="metric-value" style={{ color: metric.color }}>
                  {metric.value}
                </div>
                <div className={`metric-status status-${metric.status}`}>
                  {metric.status === 'good' && <CheckCircle size={12} />}
                  {metric.status === 'warning' && <AlertTriangle size={12} />}
                  {metric.status === 'danger' && <AlertCircle size={12} />}
                  <span>{metric.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid Layout */}
        <div className="security-grid">
          {/* Left Column - Quick Security Actions */}
          <div className="quick-actions-section">
            <div className="section-header">
              <div className="section-title">
                <Zap size={20} />
                <h2>QUICK SECURITY ACTIONS</h2>
              </div>
              <button className="section-action">
                <RefreshCw size={16} />
                <span>Refresh</span>
              </button>
            </div>

            <div className="actions-grid">
              {quickSecurityActions.map(action => (
                <button
                  key={action.id}
                  className="security-action-btn"
                  onClick={action.action}
                  style={{ '--action-color': action.color }}
                >
                  <div className="action-icon-wrapper">
                    {action.icon}
                  </div>
                  <div className="action-content">
                    <h3 className="action-title">{action.label}</h3>
                    <p className="action-description">{action.description}</p>
                  </div>
                  <div className="action-arrow">
                    →
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Encryption Key Management */}
          <div className="encryption-section">
            <div className="section-header">
              <div className="section-title">
                <Lock size={20} />
                <h2>ENCRYPTION KEY MANAGEMENT</h2>
              </div>
              <div className={`key-status status-${keyStatus}`}>
                {keyStatus === 'active' ? '● Active' : '⚠ Expired'}
              </div>
            </div>

            <div className="encryption-details">
              <div className="detail-item">
                <div className="detail-label">
                  <Key size={14} />
                  <span>Current Key:</span>
                </div>
                <div className="detail-value">{encryptionKeyDetails.currentKey}</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">
                  <History size={14} />
                  <span>Last Rotation:</span>
                </div>
                <div className="detail-value">{encryptionKeyDetails.lastRotation}</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">
                  <Calendar size={14} />
                  <span>Next Rotation:</span>
                </div>
                <div className="detail-value">{encryptionKeyDetails.nextRotation}</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">
                  <Settings size={14} />
                  <span>Key Type:</span>
                </div>
                <div className="detail-value">{encryptionKeyDetails.keyType}</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">
                  <Copy size={14} />
                  <span>Key ID:</span>
                </div>
                <div className="detail-value code">{encryptionKeyDetails.keyId}</div>
              </div>
            </div>

            <div className="encryption-actions">
              <button className="encryption-btn primary" onClick={handleKeyRotation}>
                <RefreshCw size={16} />
                <span>Rotate Keys Now</span>
              </button>
              <button className="encryption-btn secondary" onClick={scheduleKeyRotation}>
                <Calendar size={16} />
                <span>Schedule Rotation</span>
              </button>
              <button className="encryption-btn outline" onClick={viewKeyHistory}>
                <History size={16} />
                <span>View Key History</span>
              </button>
            </div>

            {/* Key Rotation Progress */}
            <div className="rotation-progress">
              <div className="progress-header">
                <span className="progress-label">Next Rotation Progress</span>
                <span className="progress-percent">45%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '45%' }}></div>
              </div>
              <div className="progress-details">
                <span className="progress-text">45 days remaining until expiration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Security Events */}
        <div className="events-section">
          <div className="section-header">
            <div className="section-title">
              <Bell size={20} />
              <h2>RECENT SECURITY EVENTS</h2>
            </div>
            <div className="events-controls">
              <div className="search-container">
                <Search size={14} />
                <input 
                  type="text" 
                  placeholder="Search events..." 
                  className="search-input"
                />
              </div>
              <select className="filter-select">
                <option value="all">All Events</option>
                <option value="high">High Severity</option>
                <option value="medium">Medium Severity</option>
                <option value="low">Low Severity</option>
              </select>
            </div>
          </div>

          <div className="events-table-container">
            <table className="events-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Event Type</th>
                  <th>User</th>
                  <th>IP Address</th>
                  <th>Severity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {securityEvents.map(event => (
                  <tr key={event.id} className="event-row">
                    <td>
                      <div className="event-time">
                        <Clock size={12} />
                        <span>{event.time}</span>
                      </div>
                    </td>
                    <td>
                      <div className="event-type">
                        <div className="event-icon" style={{ color: getSeverityColor(event.severity) }}>
                          {event.icon}
                        </div>
                        <span>{event.type}</span>
                      </div>
                    </td>
                    <td>
                      <div className="event-user">
                        <User size={12} />
                        <span>{event.user}</span>
                      </div>
                    </td>
                    <td>
                      <div className="event-ip">
                        <Database size={12} />
                        <span className="ip-address">{event.ip}</span>
                      </div>
                    </td>
                    <td>
                      <div className={`severity-badge severity-${event.severity}`}>
                        {event.severity.toUpperCase()}
                      </div>
                    </td>
                    <td>
                      <div className="event-actions">
                        <button className="action-btn-icon">
                          <Eye size={14} />
                        </button>
                        <button className="action-btn-icon">
                          <MoreVertical size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Events Summary */}
          <div className="events-summary">
            <div className="summary-item">
              <div className="summary-label">Total Events Today</div>
              <div className="summary-value">24</div>
            </div>
            <div className="summary-item">
              <div className="summary-label">High Severity</div>
              <div className="summary-value danger">3</div>
            </div>
            <div className="summary-item">
              <div className="summary-label">Requires Action</div>
              <div className="summary-value warning">2</div>
            </div>
            <div className="summary-item">
              <button className="summary-action-btn">
                <DownloadCloud size={14} />
                <span>Export All Logs</span>
              </button>
            </div>
          </div>
        </div>

        {/* Compliance Status */}
        <div className="compliance-section">
          <div className="compliance-grid">
            <div className="compliance-card">
              <div className="compliance-header">
                <ShieldCheck size={20} />
                <h3>GDPR Compliance</h3>
              </div>
              <div className="compliance-status compliant">
                <CheckCircle size={16} />
                <span>Compliant</span>
              </div>
              <div className="compliance-details">
                <span>Last Audit: 15 days ago</span>
                <span>Next Audit: Due in 45 days</span>
              </div>
            </div>
            <div className="compliance-card">
              <div className="compliance-header">
                <ShieldCheck size={20} />
                <h3>HIPAA Compliance</h3>
              </div>
              <div className="compliance-status warning">
                <AlertTriangle size={16} />
                <span>Review Needed</span>
              </div>
              <div className="compliance-details">
                <span>Last Audit: 30 days ago</span>
                <span>Expires in: 10 days</span>
              </div>
            </div>
            <div className="compliance-card">
              <div className="compliance-header">
                <ShieldCheck size={20} />
                <h3>PCI DSS</h3>
              </div>
              <div className="compliance-status compliant">
                <CheckCircle size={16} />
                <span>Compliant</span>
              </div>
              <div className="compliance-details">
                <span>Last Audit: 7 days ago</span>
                <span>Valid for: 11 months</span>
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
