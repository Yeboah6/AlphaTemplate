import React, { useState, useEffect } from 'react';
import { 
  Lock, User, Shield, AlertCircle, LogIn, Eye, EyeOff, Server,
} from 'lucide-react';
import './style.css';

export default function LoginPage({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentIP, setCurrentIP] = useState('192.168.1.100');
  const [loginAttempts, setLoginAttempts] = useState(0);

  // Simulate fetching current IP
  useEffect(() => {
    // In a real app, this would call an API to get the actual IP
    const simulateIPFetch = async () => {
      // Generate a random IP for demonstration
      const randomIP = `192.168.1.${Math.floor(Math.random() * 255)}`;
      setCurrentIP(randomIP);
    };
    
    simulateIPFetch();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validation
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password');
      setLoading(false);
      return;
    }

    if (loginAttempts >= 3) {
      setError('Too many failed attempts. Please try again in 5 minutes.');
      setLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      // Mock authentication logic
      if (username === 'rootadmin' && password === 'secure123') {
        setLoginAttempts(0);
        // Simulate successful login
        if (onLoginSuccess) {
          onLoginSuccess({ username, ip: currentIP });
        }
      } else {
        setLoginAttempts(prev => prev + 1);
        setError(`Invalid credentials. Attempt ${loginAttempts + 1} of 3`);
      }
      setLoading(false);
    }, 1500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Check if IP is whitelisted (mock function)
  const isIPWhitelisted = () => {
    // In a real app, this would check against a database or API
    const whitelistedIPs = [
      '192.168.1.100',
      '192.168.1.101',
      '10.0.0.1',
      '172.16.0.1'
    ];
    return whitelistedIPs.includes(currentIP);
  };

  return (
    <div className="login-container">

      {/* Main Login Area */}
      <main className="login-main">
        <div className="login-card">
          {/* Login Header */}
          <div className="login-header-section">
            <div className="login-icon">
              <Shield size={32} />
            </div>
            <h2 className="login-welcome">ROOT ADMIN PORTAL</h2>
          </div>

          {/* Login Form */}
          <form className="login-form" onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="form-group">
              <label className="form-label">Username</label>
              <div className="form-input-wrapper">
                <User className="input-icon" size={20} />
                <input
                  type="text"
                  className={`form-input ${error && !username ? 'input-error' : ''}`}
                  placeholder="Enter admin username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={loading}
                  autoComplete="username"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="form-input-wrapper">
                <Lock className="input-icon" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  className={`form-input ${error && !password ? 'input-error' : ''}`}
                  placeholder="Enter secure password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer'
                  }}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="form-error">
                <AlertCircle size={16} />
                {error}
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className={`login-button ${loading ? 'login-loading' : ''}`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="login-spinner"></div>
                  Authenticating...
                </>
              ) : (
                <>
                  <LogIn size={20} />
                  Login
                </>
              )}
            </button>
          </form>

          {/* IP Whitelist Panel */}
          <div className="ip-whitelist-panel">
            <div className="panel-title">
              <Server size={16} />
              IP Whitelist Check
            </div>
            
            <div className="ip-status">
              <div>
                <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '4px' }}>
                  Current IP Address
                </div>
                <div className="ip-address">{currentIP}</div>
              </div>
              <div className="status-check">
                {isIPWhitelisted() ? 'IP is whitelisted' : 'IP not whitelisted'}
              </div>
            </div>

            {/* {!isIPWhitelisted() && (
              <div style={{
                background: 'rgba(245, 158, 11, 0.1)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                borderRadius: '8px',
                padding: '12px',
                marginTop: '12px',
                fontSize: '13px',
                color: '#fde68a'
              }}>
                <AlertCircle size={14} style={{ marginRight: '8px', display: 'inline' }} />
                Access restricted: Contact system administrator to whitelist your IP
              </div>
            )} */}
          </div>

          {/* Login Footer */}
          <div className="login-footer">
            {/* <p>
              For security assistance, contact{' '}
              <a href="mailto:security@admin.com" className="support-link">
                security@admin.com
              </a>
            </p> */}
            <p style={{ marginTop: '8px', fontSize: '12px', color: '#64748b' }}>
              All login attempts are logged and monitored
            </p>
          </div>
        </div>
      </main>

      {/* Real-time Security Monitor */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: 'rgba(15, 23, 42, 0.9)',
        border: '1px solid rgba(71, 85, 105, 0.3)',
        borderRadius: '12px',
        padding: '12px 16px',
        fontSize: '12px',
        color: '#94a3b8',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
      }}>
        <div style={{
          width: '8px',
          height: '8px',
          background: '#10b981',
          borderRadius: '50%',
          animation: 'pulse 2s infinite'
        }}></div>
        Security System: Active
      </div>
    </div>
  );
}