import React from 'react';
import Profile from './components/Profile/Profile';
import userProfile from './components/Profile/user.json';
import Statistics from './components/newStatistics/Statistics';
import dataStatistics from './components/newStatistics/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import dataFriendList from './components/FriendList/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import dataTransactionHistory from './components/TransactionHistory/transactions.json';

const App = () => (
  <>
    <Profile user={userProfile} />
    <Statistics title="File upload" stats={dataStatistics} />
    <FriendList friends={dataFriendList} />
    <TransactionHistory item={dataTransactionHistory} />
  </>
);

export default App;
