import styles from './SearchForm.module.scss';

const SearchForm = () => {
    return (
        <form className="searchForm">
            <input type="text" className="input" />
            <button className="button">Search</button>
        </form>
    );
  };

  export default SearchForm;
