import styles from './NavBar.module.scss'
import { Link, NavLink} from 'react-router-dom';
import Container from '../Container/Container'

const NavBar = () =>
  <nav className={styles.navBar}>
    <div className={styles.navbarWrapper}>
      <i className="fa fa-bars"></i>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => isActive ? styles.linkActive : undefined}
            to="/"
          >Home</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
          to="/favorite"
          >Favorite</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
          to="/about"
          >About</NavLink>
        </li>
      </ul>
    </div>
  </nav>

  export default NavBar;
