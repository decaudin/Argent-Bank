import PropTypes from "prop-types";
import './index.scss';

const HomeFeature = ({ icon, title, text }) => {

    return (
        <div className="feature-wrapper">
            <img src={icon} alt={icon} className="feature-img"/>
            <h3 className="feature-title">{title}</h3>
            <p>{text}</p>
        </div>
    )
}

HomeFeature.propTypes = {
    icon: PropTypes.string.isRequired,  
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default HomeFeature;