// App.js
import React from 'react';
import { useEffect } from 'react';
import Hotjar from '@hotjar/browser';

function App() {
  useEffect(() => {
    // Initialize Hotjar
    Hotjar.init(5160361, 6);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <p>This is a dummy app with Hotjar integration.</p>
      </header>
      <main>
        <section>
          <h2>About Us</h2>
          <p>We're a company dedicated to creating amazing React applications.</p>
        </section>
        <section>
          <h2>Our Services</h2>
          <ul>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My React App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;