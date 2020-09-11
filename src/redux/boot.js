import { store } from './store';
import authActions from '@imd/redux/auth/actions';

export default () =>
  new Promise(() => {
    store.dispatch(authActions.checkAuthorization());
  });
