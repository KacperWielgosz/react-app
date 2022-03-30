import styles from './NavBar.module.scss'
import Container from '../Container/Container'

const NavBar = () =>
  <nav className={styles.navBar}>
      <div className={styles.navbarWrapper}>
        <i className="fa fa-bars"></i>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/favorite'>Favorite</a></li>
          <li><a href='/about'>About</a></li>
        </ul>
      </div>
  </nav>

  export default NavBar;
