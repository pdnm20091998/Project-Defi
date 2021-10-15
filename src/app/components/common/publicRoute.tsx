import { Redirect, Route } from 'react-router-dom';
import { getToken } from './common';

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return !getToken() ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};
export default PublicRoute;
