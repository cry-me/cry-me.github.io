import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import './index.css';

const Header = () => (
  <div>
    <Link to="/" className="home-link">
      <header className="logo">
        <div className="icon"></div>
        <div className="name">
          <h1>Crystal Chang</h1>
        </div>
      </header>
    </Link>
  </div>
);

const Sidebar = () => (
  <nav className="sidebar">
    <div className="tagline">
      <p>Urban Interface + Experience Design major @ UC Berkeley</p>
    </div>

    <div className="squiggly1"></div>
    <ul className="sidebar-section">
      <li className="sidebar-item">
        <Link to="/design">Design</Link>
      </li>
      <li className="sidebar-item">
        <Link to="/illustration">Illustration</Link>
      </li>
    </ul>
    <div className="squiggly2"></div>
    <ul className="sidebar-section">
      <li className="sidebar-item">
        <a href="/resume.pdf">Resume</a>
      </li>
      <li className="sidebar-item">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="cry.me"
      meta={[
        { name: 'description', content: 'Urban Interface + Experience Design @ UC Berkeley' },
      ]}
    />

    <Header />
    <Sidebar />

    <div className="content">
      {children()}
    </div>

    <div className="portrait"></div>
    <div className="checkerboard"></div>
  </div>
);

export default TemplateWrapper;
