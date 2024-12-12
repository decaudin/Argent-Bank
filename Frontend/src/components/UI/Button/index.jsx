import PropTypes from 'prop-types';
import './index.scss';

const Button = ({ children, onClick, className = '', ...props }) => {

    return (
        <button className={`button ${className}`} onClick={onClick} {...props}>{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default Button;
