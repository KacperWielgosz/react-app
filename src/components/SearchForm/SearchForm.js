import styles from './SearchForm.module.scss';
import { useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/searchStringRedux';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button'
import { useSelector } from 'react-redux';

const SearchForm = () => {

  const dispatch = useDispatch()
  const [searchString, setSearchString] = useState('');
  console.log('update')

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchString(searchString))
    setSearchString('')
  }

  useEffect(() => {
    dispatch(updateSearchString(''))
  },[]);

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
