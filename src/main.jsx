import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import { fetchExpensesAsync } from './actions/expenses';
import { firebase } from './firebase/firebase';
import history from './utils/customHistory';
import { login, logout } from './actions/auth';
import M from 'materialize-css';
import LoadingPage from './components/LoadingPage';
import 'materialize-css/dist/css/materialize.min.css';
import './styles/styles.css';

const store = configStore();

ReactDOM.render(<LoadingPage />, document.getElementById('root'));

let hasRendered = false;

const renderApp = () => {
  // makes sure that the app is rendered only once. (first render)
  if (!hasRendered) {
    ReactDOM.render(
      <Provider store={store}>
        <AppRouter />
      </Provider>,
      document.getElementById('root')
    );
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged((user) => {
  // this callback is important as it runs when the user first loads the web page. It implicitly runs the code below if the user is already logged in (from previous session) and makes sure the store is up to date
  if (user) {
    console.log('login', user);
    store.dispatch(login(user.uid, user.displayName, user.email));
    // if logged in, fetch expenses and show app when done
    store.dispatch(fetchExpensesAsync()).then(() => {
      // render the app after data is fetched from DB
      renderApp();
      if (history.location.pathname === '/') {
        // redirect after logged in if user its in the login page
        history.push('/dashboard');
      }
    });
  } else {
    console.log('logout');
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
