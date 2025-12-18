import {
  X, Zap, CloudBackup, Monitor, ShieldAlert,
  Shield, UserRoundCog
} from 'lucide-react';
import '../../Styles/styles.css';

export function QuickActionsModal({ isOpen, onClose }) {
  const quickActions = [
    {
      id: 1,
      title: "Manage Super Admins",
      description: "Start a new project with default templates",
      icon: <UserRoundCog className="action-icon" />,
      color: "#3b82f6",
      action: () => {
        alert("Creating new project...");
        onClose();
      }
    },
    {
      id: 2,
      title: "System Backup",
      description: "Create analytics report for this quarter",
      icon: <CloudBackup className="action-icon" />,
      color: "#10b981",
      action: () => {
        alert("Generating report...");
        onClose();
      }
    },
    {
      id: 3,
      title: "Security Audit",
      description: "Manage team members and permissions",
      icon: <Shield className="action-icon" />,
      color: "#8b5cf6",
      action: () => {
        alert("Opening team settings...");
        onClose();
      }
    },
    {
      id: 4,
      title: "Performance Monitor",
      description: "Add new members to your workspace",
      icon: <Monitor className="action-icon" />,
      color: "#f59e0b",
      action: () => {
        alert("Opening invite members form...");
        onClose();
      }
    },
    {
      id: 5,
      title: "Emergency Protocols",
      description: "Export all data in CSV format",
      icon: <ShieldAlert className="action-icon" />,
      color: "#ef4444",
      action: () => {
        alert("Starting data export...");
        onClose();
      }
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="quick-actions-modal" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-section">
            <div className="modal-icon">
              <Zap size={24} />
            </div>
            <div>
              <h2 className="modal-title">Quick Actions</h2>
              {/* <p className="modal-subtitle">Perform common tasks quickly</p> */}
            </div>
          </div>
          <button 
            className="modal-close-btn"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        {/* Quick Actions Grid */}
        <div className="quick-actions-grid">
          {quickActions.map((action) => (
            <div 
              key={action.id}
              className="quick-action-card"
              onClick={action.action}
              style={{ '--action-color': action.color }}
            >
              <div className="action-icon-wrapper">
                {action.icon}
              </div>
              <div className="action-content">
                <h3 className="action-title">{action.title}</h3>
                <p className="action-description">{action.description}</p>
              </div>
              <div className="action-arrow">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}