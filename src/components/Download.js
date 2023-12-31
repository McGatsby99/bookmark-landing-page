import chrome from '../images/logo-chrome.svg'
import firefox from '../images/logo-firefox.svg'
import opera from '../images/logo-opera.svg'
import dots from '../images/bg-dots.svg'


const Download = () => {
  return (
    <div className='download component-margin'>
        <section>
            <h3>Download the extension</h3>
            <p>
                We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                got a favourite you’d like us to prioritize.
            </p>
        </section>
        <section>
            <div className="card">
                <img src={chrome} alt="" width={100}/>
                <h4>Add to Chrome</h4>
                <p>Minimum version 62</p>
                <img src={dots} alt=""/>
                <button>Add & Install Extension</button>
            </div>
            <div className="card">
                <img src={firefox} alt="" width={100}/>
                <h4>Add to firefox</h4>
                <p>Minimum version 55</p>
                <img src={dots} alt=""/>
                <button>Add & Install Extension</button>
            </div>
            <div className="card">
                <img src={opera} alt="" width={100}/>
                <h4>Add to Chrome</h4>
                <p>Minimum version 46</p>
                <img src={dots} alt=""/>
                <button>Add & Install Extension</button>
            </div>
        </section>
    </div>
  )
}

export default Download