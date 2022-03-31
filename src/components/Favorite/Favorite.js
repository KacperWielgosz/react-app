import styles from './Favorite.module.scss'
import { useSelector } from 'react-redux';
import { getFavorite } from '../../redux/store';
import Card from '../Card/Card'
import PageTitle from '../PageTitle/PageTitle';

const Favorite = props => {

  const favoriteCards = useSelector(getFavorite)
  console.log(favoriteCards)

  return(
    <div className={styles.favoriteWrapper}>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.column}>
        <ul className={styles.cards}>
        	{ favoriteCards.map(card => <Card key={card.id} id={card.id} isFavorite={card.isFavorite} title={card.title} />) }
        </ul>
      </article>
      <p className={styles.footer}>Lorem ipsum dolor</p>
    </div>
  )
}


export default Favorite;
