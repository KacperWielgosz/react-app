import styles from './List.module.scss';
import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllColumns, getListById, getColumnsByList } from '../../redux/store';
import ColumnForm from '../ColumnForm/ColumnForm';
import Column from '../Column/Column';
import SearchForm from '../SearchForm/SearchForm';

const List = () => {

  const { listId } = useParams();
  const columns = useSelector(state => getColumnsByList(state, listId));
  const listData = useSelector(state => getListById(state, listId))

  if(!listData) return <Navigate to="/" />
    return (
      <div className={styles.list}>
        <header className={styles.header}>
          <h2 className={styles.title}>{listData.title}<span>soon!</span></h2>
        </header>
        <SearchForm />
        <p className={styles.description}>{listData.description}</p>
        <section className={styles.columns}>
          { columns.map(column => <Column key={column.id} {...column} />) }
        </section>
        <ColumnForm listId={listId }/>
      </div>
    );
}

export default List;
