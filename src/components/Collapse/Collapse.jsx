import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse-button" onClick={toggleOpen}>
        {title}
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </button>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {content}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default Collapse;