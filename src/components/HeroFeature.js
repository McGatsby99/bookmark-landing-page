import heroImage from '../images/illustration-hero.svg'

const HeroFeature = () => {
  return (
    <div className='hero-feature component-margin'>
        <section>
            <img src={heroImage} alt=""/>
        </section>

        <section className='intro'> 
        
            <h1>A Simple Bookmark Manager</h1>
            <p>

                A clean and simple interface to organize your favourite websites. Open a new 
                browser tab and see your sites load instantly. Try it for free.

            </p>
            <button>Get it on Chrome</button>
            <button>Get it on Firefox</button>
        </section>

    </div>
  )
}

export default HeroFeature