import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import { removeCard } from '../../redux/cardsRedux';

const Card = props => {

  const cardId = props.id
  const dispatch = useDispatch()

  const addToFavorite = e => {
    e.preventDefault()
    dispatch(toggleCardFavorite(cardId))
  }

  const removesCard = () => {
    dispatch(removeCard(cardId))
  };

  return(
    <li className={styles.card}>
      {props.title}
      <button onClick={addToFavorite} className={clsx(styles.icon, props.isFavorite && styles.isActive)}>
        <span className="fa fa-star-o" ></span>
      </button>
      <button onClick={removesCard} className={styles.icon}>
          <span className='fa fa-trash'></span>
      </button>
    </li>
  )
}


export default Card;
