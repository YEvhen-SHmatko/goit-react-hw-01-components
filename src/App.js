import React from 'react';
import Profile from './components/Profile/Profile';
import userProfile from './components/Profile/user.json';

const appStyles = {
  width: '100%',
  minHeight: '50vh',
  padding: '40px 10px',
  background: 'rgba(231, 236, 242)',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
};
const App = () => (
  <div>
    <div style={{ ...appStyles }}>
      <Profile user={userProfile} />
    </div>
  </div>
);

export default App;
