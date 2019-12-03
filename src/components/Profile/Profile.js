import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const {
  profile,
  description,
  avatar,
  name,
  tag,
  location,
  stats,
  label,
  quantity,
} = styles;

const Profile = ({ user }) => (
  <div className={profile}>
    <div className={description}>
      <img src={user.avatar} alt={user.name} className={avatar} />
      <p className={name}>{user.name}</p>
      <p className={tag}>{user.tag}</p>
      <p className={location}>{user.location}</p>
    </div>

    <ul className={stats}>
      <li>
        <span className={label}>Followers</span>
        <span className={quantity}>{user.stats.followers}</span>
      </li>
      <li>
        <span className={label}>Views</span>
        <span className={quantity}>{user.stats.views}</span>
      </li>
      <li>
        <span className={label}>Likes</span>
        <span className={quantity}>{user.stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  user: {},
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
export default Profile;
