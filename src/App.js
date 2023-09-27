
import './App.css';
import BackgroundFeature from './components/BackgroundFeature';
import Contact from './components/Contact';
import Download from './components/Download';
import FAQ from './components/FAQ';
import Features from './components/Features';
import Footer from './components/Footer';
import HeroFeature from './components/HeroFeature';




/* 
  

  

  More Info

  Intelligent search

  Our powerful search feature will help you find saved sites in no time at all. 
  No need to trawl through all of your bookmarks.

  More Info

  Share your bookmarks

  Easily share your bookmarks and collections with others. Create a shareable 
  link that you can send at the click of a button.

  More Info



  

  

*/

import Nav from './components/Nav';
import PopUpNav from './components/PopUpNav';
import React, {useState} from 'react';



function App() {

  const [navOpen, setNavOpen] = useState(false)

  return (
    <div class="app-container">
      
      <div className="content-container">
        <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
        <PopUpNav navOpen={navOpen} setNavOpen={setNavOpen}/>
        <HeroFeature />
        <Features />
        <Download />
        <FAQ />
      </div>

      <Contact />
      <Footer />
      <BackgroundFeature />
    </div>
  );
}

export default App;
