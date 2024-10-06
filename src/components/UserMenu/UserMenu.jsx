import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUserName } from '../../redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  return (
    <div>
      <p>Welcome, {name}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default UserMenu;
