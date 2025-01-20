import PropTypes from 'prop-types';

const Input = ({ className, label, type, id, name, value, onChange, ...props }) => {

    return (
        <div className={className}>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={name} value={value} onChange={onChange} {...props}/>
        </div>
    )
}

Input.propTypes = {
    className: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,  
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Input;