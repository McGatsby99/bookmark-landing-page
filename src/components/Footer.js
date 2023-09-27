import bookmarkLogo from '../images/logo-bookmark.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'



const Footer = () => {
  return (
    <footer className='footer'>
        <img src={bookmarkLogo} alt=""/>
        <p>Features</p>
        <p>Pricing</p>
        <p>Contact</p>
        <img className='icons' src={facebook} alt=""/>
        <img className='icons' src={twitter} alt=""/>
    </footer>
  )
}

export default Footer