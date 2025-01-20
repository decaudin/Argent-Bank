import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    
    const token = useSelector((state) => state.auth.token);
    return token ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {children: PropTypes.node.isRequired}
