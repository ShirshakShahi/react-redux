import { Fragment } from 'react';
import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store/auth';
import UserProfile from './components/UserProfile';

const App = () => {


  const dispatch = useDispatch();
  const isAuthed = useSelector(state => state.auth.isAuthenticated);

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  }

  const logOutHandler = () => {
    dispatch(authActions.logout());
  }

  return (
    <Fragment>
      <Header onLogout={logOutHandler} />
      {!isAuthed && <Auth onLogin={loginHandler} />}
      {isAuthed && <UserProfile />}

      <Counter />
    </Fragment>
  );
}

export default App;
