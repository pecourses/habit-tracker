import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import styles from './Header.module.css'

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  classNames(styles.link, { [styles.active]: isActive })

function Header () {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink to='/' className={navLinkClassName}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/habits' className={navLinkClassName}>
              My Habits
            </NavLink>
          </li>
          <li>
            <NavLink to='/habit/new' className={navLinkClassName}>
              Add New Habit
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
