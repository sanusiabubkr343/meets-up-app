import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css'
import FavoritesContext from '../../store/favorite-context';
import { useContext } from 'react';
function MainNavigation()
{
  const favoritesCtx = useContext(FavoritesContext)
  return (
    <header className={classes.header}>
      <div className={classes.logo}> React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/new-meet-up'>Add New Meetups</Link>
          </li>
          <li>
            <Link to='/favorite'>
              My Favorites
              <span className ={classes.badge}>{ favoritesCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
   </header>
 )
}

export default MainNavigation