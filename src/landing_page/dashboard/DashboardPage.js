import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1>Welcome to TradeMate Dashboard</h1>
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
          
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">User Information</h5>
              <p className="card-text">
                <strong>Name:</strong> {user?.name || 'N/A'}<br />
                <strong>Email:</strong> {user?.email || 'N/A'}
              </p>
              <p className="text-muted">
                This is a protected route. You can only see this if you're logged in.
              </p>
              <p className="text-muted">
                To access the full dashboard, navigate to the dashboard folder application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;

