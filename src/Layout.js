import React from 'react';
import './Layout.css';

const Layout = () => {
return (
<div className="container">
<div className="logo">
<img src="logo.png" alt="Logo" />
</div>
<div className="flex-container">
<div className="contact-info">
<h3>Boardline:</h3>
<p>022-69318000 / 69301000</p>
<p>022-50598000 / 022-50591000</p>
</div>
<div className="contact-info">
<h3>Casualty:</h3>
<p>022-69318063 / 69318064</p>
<p>+91 86579 07754</p>
</div>
<div className="language-options">
<select>
<option value="en">English</option>
<option value="fr">French</option>
<option value="es">Spanish</option>
</select>
</div>
<div className="contact-info">
<h3>Contact Information:</h3>
<p>Call us on 0233 221 2728 / 29</p>
<p>Address: Sangli-Miraj Road, Miraj</p>
<p>Email: info@sevasadanlifelin</p>
</div>
</div>
</div>
);
};

export default Layout;