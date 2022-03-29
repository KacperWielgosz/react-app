import styles from './ColumnForm.module.scss';
import shortid from 'shortid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import { addColumn } from '../../redux/store';

const ColumnForm = props => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn({ title, icon }));
    setTitle('');
    setIcon('');
  }

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <span> Title: </span> <input className={styles.columnForm} type="text" title={title} onChange={e => setTitle(e.target.value)} />
      <span> Icon: </span> <input className={styles.columnForm} type="text" value={icon} onChange={e => setIcon(e.target.value)} />
      <Button>Add column</Button>
    </form>
);
};

export default ColumnForm;
