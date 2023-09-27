import bookmarkLogo from '../images/logo-bookmark.svg'

const Footer = () => {
  return (
    <footer className='footer'>
        <img style={{color:'white'}} src={bookmarkLogo} alt=""/>
        <p>Features</p>
        <p>Pricing</p>
        <p>Contact</p>
    </footer>
  )
}

export default Footer