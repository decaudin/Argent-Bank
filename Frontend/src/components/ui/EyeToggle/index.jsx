import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './index.scss';

export const EyeToggle = ({ isVisible, onToggle }) => <FontAwesomeIcon className='eye-toggle' icon={isVisible ? faEye : faEyeSlash} onClick={onToggle} />

EyeToggle.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
};