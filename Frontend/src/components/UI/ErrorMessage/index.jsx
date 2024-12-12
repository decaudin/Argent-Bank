import PropTypes from 'prop-types';
import './index.scss';

export const ErrorMessage = ({ children }) => <p className='error-message'>{children}</p>

ErrorMessage.propTypes = {children: PropTypes.node.isRequired}