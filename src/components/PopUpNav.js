import navLogo from '../images/logo-bookmark.svg'
import closeIcon from '../images/icon-close.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'



const PopUpNav = ({ navOpen, setNavOpen }) => {
  return (
    <div className={`pop-up-nav ${navOpen? 'show': ''}`}>
        <header>
            <img src={navLogo} alt=""/>
            <img 
                src={closeIcon} 
                alt=""
                onClick={() => setNavOpen(!navOpen)}
                />
        </header>
        <div class="menu">
            <button>Features</button>
            <button>Pricing</button>
            <button>Contact</button>
            <button>Login</button>
        </div>
        <img src={facebook} alt=""/>
        <img src={twitter} alt=""/>
    </div>
  )
}

export default PopUpNav