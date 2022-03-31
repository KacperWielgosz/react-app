import styles from './ListForm.module.scss'
import { addList } from '../../redux/store';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';

const ListForm = props => {
  const dispatch = useDispatch();

  const listId = props.listId
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    dispatch(addList({ title, description, listId }));
    setTitle('');
    setDescription('');
  },[description, title])

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <span> Title: </span> <input className={styles.listForm} type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <span> Description: </span> <input className={styles.listForm} type="text" value={description} onChange={e => setDescription(e.target.value)} />
      <Button>Add column</Button>
    </form>
);
};

export default ListForm;
