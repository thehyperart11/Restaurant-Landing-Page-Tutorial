import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
          <div className="LearnMoreButton" style={{width: '100%', height: '100%', padding: 10, background: '#0DFEB6', borderRadius: 100, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
          <div className="Submit" style={{width:120, height: 37, textAlign: 'center', color: 'white', fontSize: 25, fontFamily: 'Montserrat', fontWeight: '700', wordWrap: 'break-word'}}>Submit</div>
          </div>
      </div>
    </div>
  );
};

export default Contact;
