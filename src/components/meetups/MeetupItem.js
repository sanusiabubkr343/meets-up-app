import { useContext } from 'react'
import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import FavoritesContext from '../../store/favorite-context';

function MeetUpItem(props) {
  const favoriteCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

  function toggeleFavoriteStatusHandler(){
    if (itemIsFavorite) {
        favoriteCtx.removeFavorite(props.id)
    }
    else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address:props.address
      })
    }
  }
  
  return (
    <li className={classes.item}>
      <Card>
         <div className={classes.image}>
        <img src={props.items.image} alt="" />
      </div>
      <div className={classes.content}>
        <h3>{props.items.title}</h3>
        <address>{props.items.address}</address>
        <p>{props.items.description}</p>
      </div>
      <div className={classes.actions}>
          <button onClick={toggeleFavoriteStatusHandler}>
          {itemIsFavorite ? 'Remove from Favorites':'To Favorites'}
          </button>
      </div>
      </Card>
     
    </li>
  )
}

export default MeetUpItem
