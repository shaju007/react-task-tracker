import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import Button from './Button';
const Header = ({ title, smth, toggleAddForm, showAddTaskValue }) => {
  const location = useLocation();
  return (
    <header className='header'>
      {/* <h1>
        Task Tracker {title} {smth}
      </h1>
      <h2 style={{ color: 'red' }}>heading style</h2>
      <h3 style={style}>variable style</h3> */}
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={showAddTaskValue ? 'red' : 'green'}
          text={showAddTaskValue ? 'Close' : 'Add'}
          onClick={toggleAddForm}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};
// Header.propTypes = {
//   title: PropTypes.number.isRequired,
// };
const style = {
  color: 'red',
  backgroundColor: '#000',
};
export default Header;
