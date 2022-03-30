import styles from './PageTitle.module.scss'

const PageTitle = props =>
<div className={styles.pageTitleWrapper}>
  <h1>{props.children}</h1>
</div>

export default PageTitle;
