import React, { useEffect } from 'react';
import { useAuth, useLoginWithRedirect, ContextHolder, AdminPortal } from '@frontegg/react';

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location.href}`;
  };

  const openSettings = () => {
    AdminPortal.show();
  };

  return (
    <div className="app">
      {isAuthenticated ? (
        <div className="card">
          <img className="avatar" src={user?.profilePictureUrl} alt={user?.name || 'User'} />
          <h2 className="title">Logged in as: {user?.name}</h2>
          <div className="row">
            <button onClick={() => alert(user?.accessToken || 'No access token yet')}>
              What is my access token?
            </button>
            <button onClick={openSettings}>Settings</button>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      ) : (
        <div className="card">
          <h2 className="title">Welcome</h2>
          <button onClick={loginWithRedirect}>Click me to login</button>
        </div>
      )}
    </div>
  );
}

export default App;
