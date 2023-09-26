import featureOne from '../images/illustration-features-tab-1.svg'

const Features = () => {
  return (
    <div className='features component-margin'>
        <section>
          <h2>Features</h2>
          <p>
              Our aim is to make it quick and easy for you to access your favourite websites. 
              Your bookmarks sync between your devices so you can access them on the go.
          </p> 
        
          <span><button>Simple Bookmarking</button><hr/></span>
          <span><button>Speedy Searching</button><hr/></span>
          <span><button>Easy Sharing</button><hr/></span>
        </section> 

        <section>
          
          <img src={featureOne} alt=""/>
          <h2>Bookmark in one click</h2>
          <p>
            Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites
          </p>
        </section>  
    
    </div>
  )
}

export default Features