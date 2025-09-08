// App.jsx
import React, { useEffect } from 'react';
import { useAuth, useLoginWithRedirect, AdminPortal } from '@frontegg/react';

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome {user?.name}</h1>
      <button onClick={() => AdminPortal.show()}>Open Admin Portal</button>
    </div>
  );
}

export default App;
