import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const Friends = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.length > 0 &&
      friends.map(friend => (
        <li className={styles.item} key={friend.id}>
          {friend.isOnline ? (
            <span className={styles.status} style={{ background: '#66b258' }} />
          ) : (
            <span className={styles.status} style={{ background: '#ea5f58' }} />
          )}
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
  </ul>
);

Friends.defaultProps = {
  friends: [],
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }),
  ),
};
export default Friends;
