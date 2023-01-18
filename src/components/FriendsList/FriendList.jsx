import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';
import css from './Friend.module.css';
export const FriendList = ({ friends }) => (
  <ul className={css.FriendList}>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        isOnline={friend.isOnline}
        name={friend.name}
      ></FriendListItem>
    ))}
  </ul>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
