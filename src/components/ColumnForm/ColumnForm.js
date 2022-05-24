import styles from './ColumnForm.module.scss';
import shortid from 'shortid';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';
import Button from '../Button/Button';

const ColumnForm = props => {
  const dispatch = useDispatch();

  const listId = props.listId
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId }));
    setTitle('');
    setIcon('');
  },[icon, title])

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <span> Title: </span> <input className={styles.columnForm} type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <span> Icon: </span> <input className={styles.columnForm} type="text" value={icon} onChange={e => setIcon(e.target.value)} />
      <Button>Add column</Button>
    </form>
);
};

export default ColumnForm;
