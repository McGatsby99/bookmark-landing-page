
import './App.css';
import Download from './components/Download';
import FAQ from './components/FAQ';
import Features from './components/Features';
import HeroFeature from './components/HeroFeature';


/* 
  Features
  Pricing
  Contact
  Login

  

  More Info

  Intelligent search

  Our powerful search feature will help you find saved sites in no time at all. 
  No need to trawl through all of your bookmarks.

  More Info

  Share your bookmarks

  Easily share your bookmarks and collections with others. Create a shareable 
  link that you can send at the click of a button.

  More Info



  
  More Info

  35,000+ already joined

  Stay up-to-date with what we’re doing

  Contact Us

  Features
  Pricing
  Contact

*/

import Nav from './components/Nav';



function App() {
  return (
    <div className="app-container">
      <Nav />
      <HeroFeature />
      <Features />
      <Download />
      <FAQ />
    </div>
  );
}

export default App;
