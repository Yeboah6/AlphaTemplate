import { 
    User, Store, Database, 
  Shield, Activity, Zap, Settings, Clock, Server, FileText, Users,
  CloudBackup
} from 'lucide-react';
import '../../Styles/styles.css';


export function AdditionalActions() {
    const activityFeedData = [
      { id: 1, time: "02:15", user: "jsmith", action: "logged in", icon: <User size={14} />, type: "login" },
      { id: 2, time: "02:10", user: "admin", action: "Store 'TechGadgets' created", icon: <Store size={14} />, type: "create" },
      { id: 3, time: "01:45", user: "system", action: "Database optimization run", icon: <Database size={14} />, type: "system" },
      { id: 4, time: "01:30", user: "security", action: "Security scan completed", icon: <Shield size={14} />, type: "security" },
      { id: 5, time: "00:15", user: "backup", action: "Backup completed successfully", icon: <CloudBackup size={14} />, type: "backup" },
      { id: 6, time: "23:50", user: "system", action: "System update applied", icon: <Server size={14} />, type: "update" },
      { id: 7, time: "23:30", user: "analytics", action: "Daily report generated", icon: <FileText size={14} />, type: "report" },
      { id: 8, time: "22:45", user: "admin", action: "2 new users registered", icon: <Users size={14} />, type: "user" },
    ];

    const criticalAlertData = [
      { id: 1, time: "02:15", action: "Server cluster-01 CPU at 95% for 5m", icon: <User size={14} />, type: "View Details" },
      { id: 2, time: "02:10", action: "Backup job failed, Review logs.", icon: <Store size={14} />, type: "Investigate" },
    ];

        return (
    <div className="dashboard-container">

      {/* Main Content */}
      <main className="main-content">

        {/* Quick Actions & Activity Feed Layout */}
        <div className="dashboard-layout">
          {/* Left Column - Quick Actions */}
          <div className="quick-actions-panel">
            <div className="panel-header">
              <div className="panel-title">
                <Zap size={18} />
                <h2>CRITICAL ALERTS PANEL</h2>
              </div>
              <button className="panel-action-btn">
                <Settings size={16} />
              </button>
            </div>
            
            <div className="activity-feed-list">
              {criticalAlertData.map((activity) => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-time">{activity.time}</div>
                  <div className="activity-content">
                    <div className="activity-icon" style={{ 
                      backgroundColor: getActivityColor(activity.type) 
                    }}>
                      {activity.icon}
                    </div>
                    <div className="activity-details">
                      <span className="activity-action">{activity.action}</span>
                    </div>
                  </div>
                  <div className="activity-badge" data-type={activity.type}>
                    {activity.type}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Activity Feed */}
          <div className="activity-feed-panel">
            <div className="panel-header">
              <div className="panel-title">
                <Activity size={18} />
                <h2>ACTIVITY FEED</h2>
              </div>
              <button className="panel-action-btn">
                <Clock size={16} />
                <span>Real-time</span>
              </button>
            </div>

            <div className="activity-feed-list">
              {activityFeedData.map((activity) => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-time">{activity.time}</div>
                  <div className="activity-content">
                    <div className="activity-icon" style={{ 
                      backgroundColor: getActivityColor(activity.type) 
                    }}>
                      {activity.icon}
                    </div>
                    <div className="activity-details">
                      <span className="activity-user">{activity.user}</span>
                      <span className="activity-action">{activity.action}</span>
                    </div>
                  </div>
                  <div className="activity-badge" data-type={activity.type}>
                    {activity.type}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Helper function for activity colors
function getActivityColor(type) {
  const colors = {
    login: '#3b82f6',
    create: '#10b981',
    system: '#8b5cf6',
    security: '#ef4444',
    backup: '#f59e0b',
    update: '#06b6d4',
    report: '#84cc16',
    user: '#ec4899'
  };
  return colors[type] || '#6b7280';
}