// Header.js

import React from 'react';
import './Header.css'; // Import a CSS file for styling (create this file)

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <a href="/">My Website</a>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
Next, create a CSS file (Header.css) for styling. You can customize this CSS file according to your design preferences:

css
Copy code
/* Header.css */

.header {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  font-size: 24px;
}

.nav-links {
  list-style: none;
  display: flex;
}

.nav-links li {
  margin-right: 20px;
}

.nav-links a {
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #ff6347; /* Change the color on hover */
}
Finally, you can use the Header component in your main application file (e.g., App.js) like this:

jsx
Copy code
// App.js

import React from 'react';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      {/* The rest of your application content */}
    </div>
  );
}

export default App;
In this example, we've created a simple header and navbar with a responsive design. You can further enhance it with additional CSS styles, responsive design practices, and interactive behavior using React Router or other routing solutions for your navigation links.





