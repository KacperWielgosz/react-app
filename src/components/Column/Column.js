import styles from './Column.module.scss'
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/cardsRedux';
import Card from '../Card/Card'
import CardForm from '../CardForm/CardForm'

const Column = props => {
  const cards = useSelector(state => getFilteredCards(state, props.id));
  const template = ' fa fa-'

  return (
    <article className={styles.column}>
      <h2 className={styles.title}><span className={`${styles.icon}${template}${props.icon}`} />{props.title}</h2>
      <ul className={styles.cards}>
      	{ cards.map(card => <Card key={card.id} id={card.id} isFavorite={card.isFavorite} title={card.title} />) }
      </ul>
      <CardForm columnId={props.id}/>
    </article>
  );
};

export default Column;
