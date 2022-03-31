import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../redux/store';

const Card = props => {

  const cardId = props.id
  const dispatch = useDispatch()

  const addToFavorite = e => {
    e.preventDefault()
    dispatch(addFavorite( cardId ))
  }

  return(
    <li className={styles.card}>
      {props.title}
      <button onClick={addToFavorite} className={clsx(styles.icon, props.isFavorite && styles.isActive)}>
        <span className="fa fa-star-o" ></span>
      </button>
    </li>
  )
}


export default Card;
