import React, { useState, useEffect } from "react";
import { 
  Home, Settings, User, LogOut, Search, Filter,
  Plus, Edit2, Shield, CheckCircle, XCircle, MoreVertical,
  Eye, Key, UserX, Clock, Calendar, Users, Store,
  DollarSign, BarChart3, Download, ChevronDown,
  Copy, Lock, AlertTriangle, Trash2, RefreshCw, LayoutDashboard, X
} from 'lucide-react';
import '../../Styles/styles.css';

// Super Admin Management Component
export function ManageSuperAdmin({ isOpen, onClose }) {
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [admins, setAdmins] = useState([]);

  // Sample Super Admin Data
  const sampleAdmins = [
    {
      id: 1,
      name: "John Smith",
      email: "jsmith@company.com",
      status: "active",
      lastActive: "2 hours ago",
      avatarColor: "#3b82f6",
      created: "Jan 15, 2024",
      lastLogin: "Today, 08:30 AM",
      permissions: {
        storeManagement: {
          createStores: true,
          suspendStores: true,
          deleteStores: false
        },
        userManagement: {
          viewUsers: true,
          resetPasswords: true,
          createUsers: false
        },
        financial: {
          viewRevenue: true,
          processRefunds: false
        },
        analytics: {
          viewReports: true,
          exportData: true
        }
      }
    },
    {
      id: 2,
      name: "Sarah Chen",
      email: "schen@company.com",
      status: "suspended",
      lastActive: "5 days ago",
      avatarColor: "#10b981",
      created: "Feb 3, 2024",
      lastLogin: "5 days ago",
      permissions: {
        storeManagement: {
          createStores: false,
          suspendStores: true,
          deleteStores: false
        },
        userManagement: {
          viewUsers: true,
          resetPasswords: false,
          createUsers: false
        },
        financial: {
          viewRevenue: true,
          processRefunds: false
        },
        analytics: {
          viewReports: true,
          exportData: false
        }
      }
    },
    {
      id: 3,
      name: "Mike Brown",
      email: "mbrown@company.com",
      status: "active",
      lastActive: "1 hour ago",
      avatarColor: "#8b5cf6",
      created: "Mar 10, 2024",
      lastLogin: "Today, 09:15 AM",
      permissions: {
        storeManagement: {
          createStores: true,
          suspendStores: true,
          deleteStores: true
        },
        userManagement: {
          viewUsers: true,
          resetPasswords: true,
          createUsers: true
        },
        financial: {
          viewRevenue: true,
          processRefunds: true
        },
        analytics: {
          viewReports: true,
          exportData: true
        }
      }
    },
    {
      id: 4,
      name: "Lisa Wang",
      email: "lwang@company.com",
      status: "active",
      lastActive: "30 min ago",
      avatarColor: "#f59e0b",
      created: "Apr 5, 2024",
      lastLogin: "Today, 10:45 AM",
      permissions: {
        storeManagement: {
          createStores: true,
          suspendStores: false,
          deleteStores: false
        },
        userManagement: {
          viewUsers: true,
          resetPasswords: true,
          createUsers: false
        },
        financial: {
          viewRevenue: true,
          processRefunds: false
        },
        analytics: {
          viewReports: true,
          exportData: true
        }
      }
    }
  ];

  // Filter and search admins
  const filteredAdmins = sampleAdmins.filter(admin => {
    const matchesSearch = admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         admin.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || admin.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Set first admin as selected by default
  useEffect(() => {
    if (filteredAdmins.length > 0 && !selectedAdmin) {
      setSelectedAdmin(filteredAdmins[0]);
    }
  }, [filteredAdmins, selectedAdmin]);

  // Handle actions
  const handleImpersonate = (admin) => {
    alert(`Impersonating ${admin.name}...`);
  };

  const handleEditPermissions = (admin) => {
    alert(`Editing permissions for ${admin.name}...`);
  };

  const handleSuspendAccount = (admin) => {
    const newStatus = admin.status === 'suspended' ? 'active' : 'suspended';
    alert(`${admin.status === 'suspended' ? 'Activating' : 'Suspending'} ${admin.name}'s account...`);
  };

  const handleDeleteAccount = (admin) => {
    if (window.confirm(`Are you sure you want to delete ${admin.name}'s account? This action cannot be undone.`)) {
      alert(`Deleting ${admin.name}'s account...`);
    }
  };

  // Render permission icons
  const renderPermissionIcon = (hasPermission) => (
    hasPermission ? 
      <CheckCircle size={14} color="#10b981" /> : 
      <XCircle size={14} color="#ef4444" />
  );

  if (!isOpen) return null;

  return (
    <div className="super-modal-overlay" onClick={onClose}>
      <div className="super-actions-modal" onClick={(e) => e.stopPropagation()}>
        <div className="super-modal-header">
          <div className="super-modal-title-section">
            <div className="modal-icon">
              <LayoutDashboard size={24} />
            </div>
            <div>
              <h2 className="modal-title">Manage Super Admin</h2>
            </div>
          </div>
          <button 
            className="modal-close-btn"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>
      <div className="super-admin-container">

      {/* Control Bar */}
      <div className="control-bar">
        <div className="search-container">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search super admins by name or email..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-container">
          <Filter size={18} />
          <select 
            className="filter-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="suspended">Suspended</option>
          </select>
        </div>
        <button className="create-btn">
          <Plus size={18} />
          <span>Create New Super Admin</span>
        </button>
      </div>

      {/* Main Content */}
      <main className="admin-main-content">
        {/* Left Panel - Super Admin List */}
        <div className="admin-list-panel">
          <div className="panel-header">
            <h2 className="panel-title">
              <Users size={18} />
              SUPER ADMIN LIST
            </h2>
            <span className="panel-count">{filteredAdmins.length} admins</span>
          </div>
          
          <div className="table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Last Active</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAdmins.map(admin => (
                  <tr 
                    key={admin.id}
                    className={`admin-row ${selectedAdmin?.id === admin.id ? 'selected' : ''}`}
                    onClick={() => setSelectedAdmin(admin)}
                  >
                    <td>
                      <div className="admin-info">
                        <div 
                          className="admin-avatar"
                          style={{ backgroundColor: admin.avatarColor }}
                        >
                          {admin.name.charAt(0)}
                        </div>
                        <div className="admin-details">
                          <span className="admin-name">{admin.name}</span>
                        </div>
                      </div>
                    </td>
                    <td className="admin-email">{admin.email}</td>
                    <td>
                      <div className={`status-badge status-${admin.status}`}>
                        {admin.status === 'active' ? '● Active' : '○ Suspended'}
                      </div>
                    </td>
                    <td className="last-active">{admin.lastActive}</td>
                    <td>
                      <button 
                        className="action-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditPermissions(admin);
                        }}
                      >
                        <Edit2 size={16} />
                      </button>
                      <button 
                        className="action-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Panel - Selected Admin Details */}
        <div className="admin-details-panel">
          {selectedAdmin ? (
            <>
              <div className="panel-header">
                <h2 className="panel-title">
                  <Shield size={18} />
                  SELECTED ADMIN DETAILS
                </h2>
                <div className="admin-status-large">
                  <div className={`status-indicator ${selectedAdmin.status}`}></div>
                  {selectedAdmin.status === 'active' ? 'Active' : 'Suspended'}
                </div>
              </div>

              <div className="admin-profile">
                <div 
                  className="profile-avatar"
                  style={{ backgroundColor: selectedAdmin.avatarColor }}
                >
                  {selectedAdmin.name.charAt(0)}
                </div>
                <div className="profile-info">
                  <h3 className="profile-name">{selectedAdmin.name}</h3>
                  <p className="profile-email">{selectedAdmin.email}</p>
                </div>
              </div>

              <div className="admin-meta">
                <div className="meta-item">
                  <Calendar size={14} />
                  <span>Created: <strong>{selectedAdmin.created}</strong></span>
                </div>
                <div className="meta-item">
                  <Clock size={14} />
                  <span>Last Login: <strong>{selectedAdmin.lastLogin}</strong></span>
                </div>
              </div>

              {/* Permissions Grid */}
              <div className="permissions-section">
                <h4 className="section-title">Permissions</h4>
                <div className="permissions-grid">
                  {/* Store Management */}
                  <div className="permission-card">
                    <div className="permission-header">
                      <Store size={18} />
                      <h5>Store Management</h5>
                    </div>
                    <div className="permission-list">
                      <div className="permission-item">
                        {renderPermissionIcon(selectedAdmin.permissions.storeManagement.createStores)}
                        <span>Create Stores</span>
                      </div>
                      <div className="permission-item">
                        {renderPermissionIcon(selectedAdmin.permissions.storeManagement.suspendStores)}
                        <span>Suspend Stores</span>
                      </div>
                      <div className="permission-item">
                        {renderPermissionIcon(selectedAdmin.permissions.storeManagement.deleteStores)}
                        <span>Delete Stores</span>
                      </div>
                    </div>
                  </div>

                  {/* User Management */}
                  <div className="permission-card">
                    <div className="permission-header">
                      <Users size={18} />
                      <h5>User Management</h5>
                    </div>
                    <div className="permission-list">
                      <div className="permission-item">
                        {renderPermissionIcon(selectedAdmin.permissions.userManagement.viewUsers)}
                        <span>View Users</span>
                      </div>
                      <div className="permission-item">
                        {renderPermissionIcon(selectedAdmin.permissions.userManagement.resetPasswords)}
                        <span>Reset Passwords</span>
                      </div>
                      <div className="permission-item">
                        {renderPermissionIcon(selectedAdmin.permissions.userManagement.createUsers)}
                        <span>Create Users</span>
                      </div>
                    </div>
                  </div>

                  {/* Financial */}
                  <div className="permission-card">
                    <div className="permission-header">
                      <DollarSign size={18} />
                      <h5>Financial</h5>
                    </div>
                    <div className="permission-list">
                      <div className="permission-item">
                        {renderPermissionIcon(selectedAdmin.permissions.financial.viewRevenue)}
                        <span>View Revenue</span>
                      </div>
                      <div className="permission-item">
                        {renderPermissionIcon(selectedAdmin.permissions.financial.processRefunds)}
                        <span>Process Refunds</span>
                      </div>
                    </div>
                  </div>

                  {/* Analytics */}
                  <div className="permission-card">
                    <div className="permission-header">
                      <BarChart3 size={18} />
                      <h5>Analytics</h5>
                    </div>
                    <div className="permission-list">
                      <div className="permission-item">
                        {renderPermissionIcon(selectedAdmin.permissions.analytics.viewReports)}
                        <span>View Reports</span>
                      </div>
                      <div className="permission-item">
                        {renderPermissionIcon(selectedAdmin.permissions.analytics.exportData)}
                        <span>Export Data</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="admin-actions">
                <button 
                  className="action-btn-primary"
                  onClick={() => handleImpersonate(selectedAdmin)}
                >
                  <Eye size={16} />
                  <span>Impersonate</span>
                </button>
                <button 
                  className="action-btn-secondary"
                  onClick={() => handleEditPermissions(selectedAdmin)}
                >
                  <Edit2 size={16} />
                  <span>Edit Permissions</span>
                </button>
                <button 
                  className={`action-btn-danger ${selectedAdmin.status === 'suspended' ? 'active' : ''}`}
                  onClick={() => handleSuspendAccount(selectedAdmin)}
                >
                  <UserX size={16} />
                  <span>{selectedAdmin.status === 'suspended' ? 'Activate Account' : 'Suspend Account'}</span>
                </button>
                <button 
                  className="action-btn-icon"
                  onClick={() => handleDeleteAccount(selectedAdmin)}
                  title="Delete Account"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </>
          ) : (
            <div className="no-selection">
              <Shield size={48} />
              <h3>Select a Super Admin</h3>
              <p>Click on an admin from the list to view details</p>
            </div>
          )}
        </div>
      </main>
    </div>
    </div>
    </div>
  );
}

