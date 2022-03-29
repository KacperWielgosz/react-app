import styles from './SearchForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button'
import { searchFor } from '../../redux/store';

const SearchForm = () => {

  const dispatch = useDispatch()
  const [searchString, setSearchString] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(searchFor(searchString))
    console.log('serached for', searchString)
    setSearchString('')
  }

    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <TextInput placeholder="Search..." value={searchString} onChange={e => setSearchString(e.target.value)} />
          <Button>
            <span className="fa fa-search"/>
          </Button>
        </form>
    );
  };

  export default SearchForm;
