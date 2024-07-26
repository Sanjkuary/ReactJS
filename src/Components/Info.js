import "./info.css";
import PropTypes from 'prop-types';

const Info = (props) => {
  return (
    <>
        <h1 id="p_object">{props.object}</h1>
        <h1 id="contact">CONTACT</h1>
        <h1 id="p_contact">{props.contact}</h1>
        <h1 id="skills">SKILLS</h1>
        <h1 id="p_skills">{props.skills}</h1>
        <h1 id="experience">WORKING EXPERIENCE</h1>
        <h1 id="p_experience">{props.experience}</h1>
    </>
  );
};

Info.propTypes = {
    object: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired
};

export default Info;
