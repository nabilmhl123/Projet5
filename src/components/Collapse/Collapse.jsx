import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.height = contentRef.current.scrollHeight + 'px';
    } else {
      contentRef.current.style.height = '0px';
    }
  }, [isOpen]);

  return (
    <div className="collapse">
      <button className="collapse-button" onClick={toggleOpen}>
        {title}
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`collapse-icon ${isOpen ? 'open' : ''}`}
        />
      </button>
      <div
        ref={contentRef}
        className={`collapse-content ${isOpen ? 'open' : ''}`}
        style={{ height: '0px', overflow: 'hidden', transition: 'height 0.3s ease' }}
      >
        <div className="collapse-content-inner">
          {content}
        </div>
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default Collapse;