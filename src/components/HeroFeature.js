import heroImage from '../images/illustration-hero.svg'
// import BackgroundFeature from './BackgroundFeature'

const HeroFeature = () => {
  return (
    <div className='hero-feature component-margin'>
        <section>
            <img className='feature-image' src={heroImage} alt=""/>
        </section>

        <section className='intro'> 
        
            <h1>A Simple Bookmark Manager</h1>
            <p>

                A clean and simple interface to organize your favourite websites. Open a new 
                browser tab and see your sites load instantly. Try it for free.

            </p>
            <div className="buttons">
              <button>Get it on Chrome</button>
              <button>Get it on Firefox</button>
            </div>
        </section>
    </div>
  )
}

export default HeroFeature