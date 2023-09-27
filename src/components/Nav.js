import bookmarkIcon from '../images/logo-bookmark.svg'
import menuHamburger from '../images/icon-hamburger.svg'

const Nav = () => {
  return (
    <nav className='component-margin'>
        <img src={bookmarkIcon} alt="" height={25}/>
        <img src={menuHamburger} alt="" height={25}/>
  </nav>
  )
}

export default Nav