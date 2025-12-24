import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, Smartphone, Key, FileText, 
  CheckCircle,
  AlertCircle,
  Clock,
  Lock, ChevronLeft, RefreshCw, Fingerprint, Eye, EyeOff,
} from 'lucide-react';
import './style.css';

export default function MFAPage({ onVerificationSuccess, onBack }) {
  const [selectedMethod, setSelectedMethod] = useState('authenticator');
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [backupCode, setBackupCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showBackupCode, setShowBackupCode] = useState(false);
  const [verificationStep, setVerificationStep] = useState(0);
  
  const inputRefs = useRef([]);

  // Authentication methods
  const methods = [
    {
      id: 'authenticator',
      name: 'Authenticator App',
      icon: <Smartphone />,
      description: 'Enter the 6-digit code from your authenticator app',
      status: 'Ready'
    },
    {
      id: 'securityKey',
      name: 'Security Key',
      icon: <Key />,
      description: 'Insert your security key when prompted',
      status: 'Available'
    },
    {
      id: 'backupCodes',
      name: 'Backup Codes',
      icon: <FileText />,
      description: 'Enter one of your backup codes',
      status: 'Available'
    }
  ];

  // Timer for code expiration
  useEffect(() => {
    if (selectedMethod === 'authenticator' && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      // Code expired
      setError('Code has expired. Please request a new one.');
    }
  }, [selectedMethod, timeLeft]);

  // Handle code input
  const handleCodeInput = (index, value) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if all digits are filled
    if (newCode.every(digit => digit !== '') && index === 5) {
      verifyAuthenticatorCode();
    }
  };

  // Handle key down for navigation
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle paste
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text');
    const digits = pasteData.replace(/\D/g, '').split('').slice(0, 6);
    
    if (digits.length === 6) {
      const newCode = [...code];
      digits.forEach((digit, index) => {
        newCode[index] = digit;
      });
      setCode(newCode);
      
      // Focus the last input
      inputRefs.current[5]?.focus();
      
      // Verify the code
      setTimeout(() => verifyAuthenticatorCode(), 100);
    }
  };

  // Verify authenticator code
  const verifyAuthenticatorCode = async () => {
    if (code.some(digit => digit === '')) return;

    setLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      const enteredCode = code.join('');
      
      // Mock validation
      if (enteredCode === '123456' || enteredCode === '000000') {
        setSuccess(true);
        setTimeout(() => {
          if (onVerificationSuccess) {
            onVerificationSuccess({ method: 'authenticator' });
          }
        }, 1000);
      } else {
        setError('Invalid authentication code. Please try again.');
        // Clear the code and focus first input
        setCode(['', '', '', '', '', '']);
        inputRefs.current[0]?.focus();
      }
      setLoading(false);
    }, 1500);
  };

  // Verify backup code
  const verifyBackupCode = async () => {
    if (!backupCode.trim()) {
      setError('Please enter a backup code');
      return;
    }

    setLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      // Mock validation
      if (backupCode.length === 24 && /^[A-Z0-9-]+$/.test(backupCode)) {
        setSuccess(true);
        setTimeout(() => {
          if (onVerificationSuccess) {
            onVerificationSuccess({ method: 'backupCode' });
          }
        }, 1000);
      } else {
        setError('Invalid backup code. Please try again.');
      }
      setLoading(false);
    }, 1500);
  };

  // Handle security key authentication
  const handleSecurityKeyAuth = async () => {
    setLoading(true);
    setError('');

    // Simulate WebAuthn authentication
    setTimeout(() => {
      setVerificationStep(1);
      
      setTimeout(() => {
        setVerificationStep(2);
        
        setTimeout(() => {
          setSuccess(true);
          setTimeout(() => {
            if (onVerificationSuccess) {
              onVerificationSuccess({ method: 'securityKey' });
            }
          }, 1000);
          setLoading(false);
        }, 1500);
      }, 1500);
    }, 1000);
  };

  // Regenerate code
  const regenerateCode = () => {
    setTimeLeft(30);
    setCode(['', '', '', '', '', '']);
    setError('');
    inputRefs.current[0]?.focus();
  };

  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="mfa-container">

      {/* Back Button */}
      {onBack && (
        <button className="back-button" onClick={onBack}>
          <ChevronLeft size={16} />
          Back to Login
        </button>
      )}

      {/* Main MFA Area */}
      <main className="mfa-main">
        <div className="mfa-card">
          {/* MFA Header */}
          <div className="mfa-header-section">
            <div className="mfa-icon">
              <Lock size={32} />
            </div>
            <h2 className="mfa-welcome">MULTI-FACTOR AUTHENTICATION</h2>
            <p className="mfa-subtitle">Select your preferred authentication method</p>
          </div>

          {/* Error Display */}
          {error && (
            <div className="mfa-error">
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          {/* Success Display */}
          {success && (
            <div style={{
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '20px',
              color: '#10b981',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              animation: 'successScale 0.5s ease'
            }}>
              <CheckCircle size={20} />
              <div>
                <div style={{ fontWeight: '600' }}>Verification Successful!</div>
                <div style={{ fontSize: '14px', opacity: 0.9 }}>Redirecting to dashboard...</div>
              </div>
            </div>
          )}

          {/* Method Selection */}
          <div className="mfa-form">
            <div className="method-section">
              <div className="method-label">Select Authentication Method:</div>
              
              {/* Authenticator App Method */}
              <div 
                className={`method-card ${selectedMethod === 'authenticator' ? 'active' : ''}`}
                onClick={() => setSelectedMethod('authenticator')}
              >
                <div className="method-header">
                  <div className="method-title">
                    <Smartphone className="method-icon" size={20} />
                    Authenticator App
                  </div>
                  {selectedMethod === 'authenticator' && (
                    <div className="method-status">
                      <div className="status-dot"></div>
                      Active
                    </div>
                  )}
                </div>
                
                <p className="method-description">
                  Enter the 6-digit code from your authenticator app
                </p>
                
                {selectedMethod === 'authenticator' && (
                  <div className="code-input-container">
                    <div className="code-input-label">6-digit verification code</div>
                    <div className="code-inputs" onPaste={handlePaste}>
                      {code.map((digit, index) => (
                        <input
                          key={index}
                          ref={el => inputRefs.current[index] = el}
                          type="text"
                          inputMode="numeric"
                          maxLength="1"
                          className={`code-input ${digit ? 'filled' : ''} ${error && selectedMethod === 'authenticator' ? 'error' : ''}`}
                          value={digit}
                          onChange={(e) => handleCodeInput(index, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(index, e)}
                          disabled={loading || success}
                          autoFocus={index === 0}
                        />
                      ))}
                    </div>
                    
                    <div className="code-timer">
                      <Clock size={14} />
                      Code expires in: {formatTime(timeLeft)}
                      {timeLeft < 10 && (
                        <span style={{ color: '#ef4444' }}> (Expiring soon)</span>
                      )}
                    </div>
                    
                    <button
                      type="button"
                      onClick={regenerateCode}
                      style={{
                        marginTop: '12px',
                        background: 'none',
                        border: '1px solid rgba(71, 85, 105, 0.5)',
                        color: '#94a3b8',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        fontSize: '14px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        width: '100%',
                        transition: 'all 0.2s ease'
                      }}
                      disabled={loading}
                    >
                      <RefreshCw size={14} />
                      Get New Code
                    </button>
                  </div>
                )}
              </div>

              {/* Security Key Method */}
              <div 
                className={`method-card ${selectedMethod === 'securityKey' ? 'active' : ''}`}
                onClick={() => setSelectedMethod('securityKey')}
              >
                <div className="method-header">
                  <div className="method-title">
                    <Key className="method-icon" size={20} />
                    Security Key
                  </div>
                  {selectedMethod === 'securityKey' && (
                    <div className="method-status">
                      <div className="status-dot"></div>
                      Ready
                    </div>
                  )}
                </div>
                
                <p className="method-description">
                  Insert your security key when prompted
                </p>
                
                {selectedMethod === 'securityKey' && (
                  <div>
                    <button
                      className="security-key-button"
                      onClick={handleSecurityKeyAuth}
                      disabled={loading || success}
                    >
                      {verificationStep === 0 && (
                        <>
                          <Key size={20} />
                          Use Security Key
                        </>
                      )}
                      {verificationStep === 1 && (
                        <>
                          <Fingerprint size={20} />
                          Touch your security key...
                        </>
                      )}
                      {verificationStep === 2 && (
                        <>
                          <CheckCircle size={20} />
                          Verified!
                        </>
                      )}
                    </button>
                    
                    {verificationStep > 0 && (
                      <div style={{
                        marginTop: '16px',
                        padding: '12px',
                        background: 'rgba(15, 23, 42, 0.5)',
                        borderRadius: '8px',
                        fontSize: '14px',
                        color: '#94a3b8',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        {verificationStep === 1 && (
                          <>
                            <Clock size={16} />
                            Waiting for security key response...
                          </>
                        )}
                        {verificationStep === 2 && (
                          <>
                            <CheckCircle size={16} color="#10b981" />
                            Security key verified successfully
                          </>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Backup Codes Method */}
              <div 
                className={`method-card ${selectedMethod === 'backupCodes' ? 'active' : ''}`}
                onClick={() => setSelectedMethod('backupCodes')}
              >
                <div className="method-header">
                  <div className="method-title">
                    <FileText className="method-icon" size={20} />
                    Backup Codes
                  </div>
                  {selectedMethod === 'backupCodes' && (
                    <div className="method-status">
                      <div className="status-dot"></div>
                      Available
                    </div>
                  )}
                </div>
                
                <p className="method-description">
                  Enter one of your backup codes
                </p>
                
                {selectedMethod === 'backupCodes' && (
                  <div>
                    <div style={{ position: 'relative' }}>
                      <input
                        type={showBackupCode ? "text" : "password"}
                        className="backup-code-input"
                        placeholder="Enter 24-character backup code"
                        value={backupCode}
                        onChange={(e) => setBackupCode(e.target.value.toUpperCase())}
                        disabled={loading || success}
                        style={{
                          fontFamily: "'Courier New', monospace",
                          letterSpacing: '1px'
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowBackupCode(!showBackupCode)}
                        style={{
                          position: 'absolute',
                          right: '12px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'none',
                          border: 'none',
                          color: '#94a3b8',
                          cursor: 'pointer'
                        }}
                      >
                        {showBackupCode ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    
                    <div className="backup-code-hint">
                      <Lock size={12} />
                      Format: XXXX-XXXX-XXXX-XXXX
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Verify Button */}
            <button
              className={`verify-button ${loading ? 'mfa-loading' : ''}`}
              onClick={() => {
                if (selectedMethod === 'authenticator') {
                  verifyAuthenticatorCode();
                } else if (selectedMethod === 'backupCodes') {
                  verifyBackupCode();
                } else if (selectedMethod === 'securityKey') {
                  handleSecurityKeyAuth();
                }
              }}
              disabled={loading || success || 
                (selectedMethod === 'authenticator' && code.some(digit => digit === '')) ||
                (selectedMethod === 'backupCodes' && !backupCode.trim())
              }
            >
              {loading ? (
                <>
                  <div className="mfa-spinner"></div>
                  Verifying...
                </>
              ) : (
                <>
                  <CheckCircle size={20} />
                  Verify & Continue
                </>
              )}
            </button>

            {/* Security Notice */}
            <div className="security-notice">
              <div className="notice-header">
                <Shield size={16} />
                <div className="notice-title">Security Notice</div>
              </div>
              <div className="notice-content">
                Any unauthorized access attempts will trigger 
                immediate security protocols and notifications.
              </div>
              
              <div style={{
                display: 'flex',
                gap: '12px',
                marginTop: '16px',
                fontSize: '13px',
                color: '#64748b'
              }}>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Security Status Indicator */}
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
          background: timeLeft > 10 ? '#10b981' : '#ef4444',
          borderRadius: '50%',
          animation: 'pulse 2s infinite'
        }}></div>
        MFA Session: {timeLeft > 10 ? 'Active' : 'Expiring Soon'}
      </div>
    </div>
  );
}