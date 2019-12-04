import React from 'react';
import Profile from './components/Profile/Profile';
import userProfile from './components/Profile/user.json';
import Statistics from './components/Statistics/Statistics';
import dataStatistics from './components/Statistics/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import dataFriendList from './components/FriendList/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import dataTransactionHistory from './components/TransactionHistory/transactions.json';

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
      <TransactionHistory item={dataTransactionHistory} />
    </div>
    <div style={{ ...appStyles }}>
      <Profile user={userProfile} />
    </div>
    <div style={{ ...appStyles }}>
      <Statistics title="File upload" stats={dataStatistics} />
    </div>
    <div style={{ ...appStyles }}>
      <FriendList friends={dataFriendList} />
    </div>
  </div>
);

export default App;
